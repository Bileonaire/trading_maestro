-- AlterTable
ALTER TABLE "Trade" ADD COLUMN     "AvgTrend" DECIMAL(65,30),
ADD COLUMN     "TrendD1" DECIMAL(65,30),
ADD COLUMN     "TrendH1" DECIMAL(65,30),
ADD COLUMN     "TrendH4" DECIMAL(65,30),
ADD COLUMN     "TrendM15" DECIMAL(65,30);
