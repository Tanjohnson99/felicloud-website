/**
 * Email Verification Token Management
 * Handles CRUD operations for email verification tokens
 */

import { query, queryOne } from './postgres';

export interface EmailVerification {
  id: number;
  token: string;
  email: string;
  full_name: string;
  created_at: Date;
  expires_at: Date;
  verified: boolean;
  verified_at: Date | null;
  ip_address: string | null;
}

/**
 * Create a new email verification token
 * Token expires after 24 hours
 */
export async function createVerificationToken(
  email: string,
  fullName: string,
  ipAddress?: string
): Promise<EmailVerification> {
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 24); // 24 hours from now

  const result = await queryOne<EmailVerification>(
    `INSERT INTO email_verifications (email, full_name, expires_at, ip_address)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [email, fullName, expiresAt, ipAddress || null]
  );

  if (!result) {
    throw new Error('Failed to create verification token');
  }

  return result;
}

/**
 * Get verification token by token string
 */
export async function getVerificationToken(token: string): Promise<EmailVerification | null> {
  return await queryOne<EmailVerification>(
    `SELECT * FROM email_verifications WHERE token = $1`,
    [token]
  );
}

/**
 * Get pending verification token by email
 * Returns the most recent non-verified, non-expired token
 */
export async function getPendingTokenByEmail(email: string): Promise<EmailVerification | null> {
  return await queryOne<EmailVerification>(
    `SELECT * FROM email_verifications
     WHERE email = $1 AND verified = false AND expires_at > NOW()
     ORDER BY created_at DESC
     LIMIT 1`,
    [email]
  );
}

/**
 * Check if a verification token is valid
 * A token is valid if it exists, hasn't been verified, and hasn't expired
 */
export async function isTokenValid(token: string): Promise<boolean> {
  const result = await queryOne<{ valid: boolean }>(
    `SELECT EXISTS(
       SELECT 1 FROM email_verifications
       WHERE token = $1 AND verified = false AND expires_at > NOW()
     ) as valid`,
    [token]
  );

  return result?.valid || false;
}

/**
 * Mark a token as verified
 */
export async function markTokenAsVerified(token: string): Promise<boolean> {
  const result = await query(
    `UPDATE email_verifications
     SET verified = true, verified_at = NOW()
     WHERE token = $1 AND verified = false AND expires_at > NOW()
     RETURNING id`,
    [token]
  );

  return result.length > 0;
}

/**
 * Delete expired tokens (cleanup)
 * Call this periodically to clean up old tokens
 */
export async function deleteExpiredTokens(): Promise<number> {
  const result = await query(
    `DELETE FROM email_verifications
     WHERE expires_at < NOW()
     RETURNING id`
  );

  return result.length;
}

/**
 * Delete all tokens for a specific email
 * Useful when a user successfully creates an account
 */
export async function deleteTokensByEmail(email: string): Promise<number> {
  const result = await query(
    `DELETE FROM email_verifications WHERE email = $1 RETURNING id`,
    [email]
  );

  return result.length;
}

/**
 * Get statistics about verification tokens
 * Useful for admin dashboard
 */
export async function getTokenStats(): Promise<{
  total: number;
  pending: number;
  verified: number;
  expired: number;
}> {
  const result = await queryOne<{
    total: string;
    pending: string;
    verified: string;
    expired: string;
  }>(
    `SELECT
       COUNT(*) as total,
       COUNT(*) FILTER (WHERE verified = false AND expires_at > NOW()) as pending,
       COUNT(*) FILTER (WHERE verified = true) as verified,
       COUNT(*) FILTER (WHERE verified = false AND expires_at < NOW()) as expired
     FROM email_verifications`
  );

  return {
    total: parseInt(result?.total || '0'),
    pending: parseInt(result?.pending || '0'),
    verified: parseInt(result?.verified || '0'),
    expired: parseInt(result?.expired || '0'),
  };
}
