import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalThis.prisma = db

// export const prismaClient = new PrismaClient()

// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

// const prisma = globalForPrisma.prisma || prismaClient

// export default prisma
