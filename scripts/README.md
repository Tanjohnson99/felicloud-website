# Felicloud Setup Scripts

This directory contains utility scripts for setting up and managing Felicloud infrastructure.

## Setup Nextcloud Groups

**File:** `setup-nextcloud-groups.ts`

This script creates the required Nextcloud groups for paid user management.

### Required Groups

The script creates the following groups:

1. **Paid Users** - Distinguishes paid accounts from free users
2. **500GB** - Users with 500GB storage tier
3. **1TB** - Users with 1TB storage tier
4. **2TB** - Users with 2TB storage tier

### When to Run

Run this script **once** before processing your first paid customer. The script is idempotent - it's safe to run multiple times.

### Usage

```bash
npx tsx scripts/setup-nextcloud-groups.ts
```

### Prerequisites

Ensure your `.env.local` contains:
- `NEXTCLOUD_URL`
- `NEXTCLOUD_ADMIN_USER`
- `NEXTCLOUD_ADMIN_PASSWORD`

### Expected Output

```
🚀 Setting up Nextcloud groups for Felicloud...

Groups to create:
  - Paid Users
  - 500GB
  - 1TB
  - 2TB

✅ Created group: "Paid Users"
✅ Created group: "500GB"
✅ Created group: "1TB"
✅ Created group: "2TB"

📊 Summary:
   ✅ Success: 4
   ❌ Failed: 0

✨ All groups are ready! You can now process paid customers.
```

### How It Works

When a customer completes payment via Stripe:

1. The webhook receives the payment event
2. A Nextcloud account is created with the purchased quota
3. The user is automatically assigned to:
   - **"Paid Users"** group
   - Their **storage tier group** (e.g., "1TB")

This allows administrators to:
- Easily identify all paid users
- Filter users by storage tier
- Apply group-specific policies or permissions
- Generate reports by customer segment
