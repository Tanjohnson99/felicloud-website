/**
 * PostgreSQL Database Connection
 * Uses connection pooling for better performance
 */

import { Pool } from 'pg';

// Create a singleton pool instance
let pool: Pool | null = null;

/**
 * Get or create PostgreSQL connection pool
 */
export function getPool(): Pool {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error('DATABASE_URL environment variable is not set');
    }

    pool = new Pool({
      connectionString,
      max: 20, // Maximum number of clients in the pool
      idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
      connectionTimeoutMillis: 2000, // Return error after 2 seconds if no connection available
    });

    // Log pool errors
    pool.on('error', (err) => {
      console.error('Unexpected error on idle PostgreSQL client', err);
    });

    console.log('PostgreSQL connection pool created');
  }

  return pool;
}

/**
 * Execute a query with automatic connection management
 */
export async function query<T = any>(text: string, params?: any[]): Promise<T[]> {
  const pool = getPool();
  const result = await pool.query(text, params);
  return result.rows;
}

/**
 * Execute a query and return a single row
 */
export async function queryOne<T = any>(text: string, params?: any[]): Promise<T | null> {
  const rows = await query<T>(text, params);
  return rows.length > 0 ? rows[0] : null;
}

/**
 * Close all connections in the pool
 * Only use this when shutting down the application
 */
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
    console.log('PostgreSQL connection pool closed');
  }
}

/**
 * Test database connection
 */
export async function testConnection(): Promise<boolean> {
  try {
    const pool = getPool();
    await pool.query('SELECT NOW()');
    console.log('PostgreSQL connection test: SUCCESS');
    return true;
  } catch (error) {
    console.error('PostgreSQL connection test: FAILED', error);
    return false;
  }
}
