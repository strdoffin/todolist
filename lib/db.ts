import { PrismaClient } from "@prisma/client";

// Extending the global object to hold the Prisma instance
declare global {
  var prisma: PrismaClient | undefined;
}

// Check if a Prisma instance exists on globalThis, or create a new one
export const db = globalThis.prisma || new PrismaClient();

// In development, store the Prisma instance in globalThis to avoid re-instantiating it
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
