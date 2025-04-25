// db/prisma.ts
// db/prisma.ts
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

if (!process.env.DATABASE_URL) {
  throw new Error("Missing env var DATABASE_URL");
}

// 1️⃣ Instantiate the Neon adapter with your connection string
import { Pool } from '@neondatabase/serverless';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
class PrismaNeonAdapter extends PrismaNeon {
  async connect() {
    // Implement the required connect method
    return this; // Return the adapter instance as required
  }
}

const adapter = new PrismaNeonAdapter(pool);

// 2️⃣ Create your PrismaClient with that adapter and your result extensions

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  errorFormat: 'pretty',
   // Use the adapter directly in the PrismaClient configuration
});
// 4️⃣ Use the adapter in your PrismaClient
export { prisma, adapter };
