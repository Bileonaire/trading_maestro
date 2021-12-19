-- CreateTable
CREATE TABLE "Trade" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currency" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "slPrice" INTEGER NOT NULL,
    "tpPrice" INTEGER,
    "slPips" INTEGER,
    "tpPips" INTEGER,
    "RR" INTEGER,
    "D1prev" INTEGER,
    "D18ema" INTEGER,
    "D1CLOSE" INTEGER,
    "H4PREV" INTEGER,
    "H450SMA" INTEGER,
    "H420EMA" INTEGER,
    "H1PREV" INTEGER,
    "M15PREV" INTEGER,
    "M15200EMA" INTEGER,
    "M1550SMA" INTEGER,
    "M1520SMA" INTEGER,
    "M15ENV" INTEGER,
    "H1ENV" INTEGER,
    "H4ENV" INTEGER,
    "maxPips" INTEGER,
    "closed" BOOLEAN NOT NULL DEFAULT false,
    "closedAt" TIMESTAMP(3) NOT NULL,
    "traderId" INTEGER NOT NULL,

    CONSTRAINT "Trade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_traderId_fkey" FOREIGN KEY ("traderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
