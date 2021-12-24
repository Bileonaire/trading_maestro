-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "Trade" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "traderId" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "ticketNum" INTEGER NOT NULL,
    "slPrice" DECIMAL(65,30) NOT NULL,
    "tpPrice" DECIMAL(65,30),
    "slPips" DECIMAL(65,30),
    "tpPips" DECIMAL(65,30),
    "RR" DECIMAL(65,30),
    "lotSize" DECIMAL(65,30),
    "commission" DECIMAL(65,30),
    "accumulate" DECIMAL(65,30),
    "D1CLOSE" TEXT,
    "H4CLOSE" TEXT,
    "H1CLOSE" TEXT,
    "M15CLOSE" TEXT,
    "D1PREV" TEXT,
    "H4PREV" TEXT,
    "H1PREV" TEXT,
    "M15PREV" TEXT,
    "D1200EMA" TEXT,
    "H4200EMA" TEXT,
    "H1200EMA" TEXT,
    "M15200EMA" TEXT,
    "D150SMA" TEXT,
    "H450SMA" TEXT,
    "H150SMA" TEXT,
    "M1550SMA" TEXT,
    "D18EMA" TEXT,
    "H48EMA" TEXT,
    "H18EMA" TEXT,
    "M158EMA" TEXT,
    "D120EMA" TEXT,
    "H420EMA" TEXT,
    "H120EMA" TEXT,
    "M1520SMA" TEXT,
    "D1ENV" TEXT,
    "H4ENV" TEXT,
    "H1ENV" TEXT,
    "M15ENV" TEXT,
    "image1" TEXT,
    "image2" TEXT,
    "maxPips" DECIMAL(65,30),
    "profit" DECIMAL(65,30),
    "closed" BOOLEAN NOT NULL DEFAULT false,
    "closedAt" TIMESTAMP(3),
    "closePrice" DECIMAL(65,30),

    CONSTRAINT "Trade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "image" TEXT,
    "role" "Role" NOT NULL DEFAULT E'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Currency" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "accumulate" DECIMAL(65,30),
    "spread" DECIMAL(65,30),
    "lastUpdated" TEXT,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Trade_ticketNum_key" ON "Trade"("ticketNum");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Currency_name_key" ON "Currency"("name");

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_traderId_fkey" FOREIGN KEY ("traderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
