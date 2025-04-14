import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function connectDB() {
  try {
    await prisma.$connect();
    console.log(`Connected to MySQL (${process.env.NODE_ENV?.toUpperCase()})`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
}

export default connectDB;
export { prisma };