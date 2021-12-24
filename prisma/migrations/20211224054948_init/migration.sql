/*
  Warnings:

  - Added the required column `lastUpdated` to the `Currency` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Currency" DROP COLUMN "lastUpdated",
ADD COLUMN     "lastUpdated" TIMESTAMP(3) NOT NULL;
