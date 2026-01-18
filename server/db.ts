import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";
import dotenv from "dotenv";

// Load environment variables for local development
dotenv.config();

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL must be set. Please check your environment variables or .env file.",
  );
}

// Optimized for Supabase/Standard Postgres
export const pool = new Pool({ 
  connectionString,
  ssl: connectionString.includes('supabase.co') ? { rejectUnauthorized: false } : false
});

export const db = drizzle(pool, { schema });
