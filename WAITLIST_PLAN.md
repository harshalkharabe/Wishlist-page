# Plan: Separate Waitlist Table

To ensure we don't mix up your application data (itineraries, recommendations, etc.) with the landing page signups, I propose creating a completely isolated table.

## 1. Naming Strategy
We should avoid the name `wishlist` because in a travel app, "Wishlist" usually means "places a user wants to visit".
Instead, we will use **`waitlist_signups`**. This clearly indicates it's for the "Coming Soon" landing page.

## 2. Table Schema
This table will be standalone. It will **not** be linked to your `users` or `auth` tables, ensuring complete separation.

| Column Name | Type | Notes |
| :--- | :--- | :--- |
| `id` | `bigint` | Unique ID for each entry. |
| `email` | `text` | The user's email address. **Unique** constraint to prevent duplicates. |
| `created_at` | `timestamptz` | Auto-recorded time of submission. |
| `status` | `text` | Default: `'pending'`. Useful later if you want to mark people as `'invited'`. |

## 3. Security (Row Level Security)
We will add strict security rules so your list remains private, even though the "Join" button is public.
*   **Insert Policy**: `public` (anyone) can add their email.
*   **Select Policy**: `none` (public users cannot see the list of emails). Only you (via the Supabase dashboard) can see them.

## 4. Implementation Steps
1.  **Execute SQL**: Run the SQL script to create this specific table.
2.  **Update Frontend**: specific the `WaitlistInput.tsx` component to target `waitlist_signups` instead of `wishlist`.
3.  **Test**: Verify that a new email appears in `waitlist_signups` but does not affect any other table.

This approach guarantees zero interference with your main application logic.
