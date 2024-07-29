/*
  Warnings:

  - You are about to drop the column `warrentStartDate` on the `Cpu` table. All the data in the column will be lost.
  - You are about to drop the column `warrentStartDate` on the `Monitor` table. All the data in the column will be lost.
  - You are about to drop the column `warrentStartDate` on the `Ups` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cpu" DROP COLUMN "warrentStartDate",
ADD COLUMN     "warrentyStartDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Monitor" DROP COLUMN "warrentStartDate",
ADD COLUMN     "warrentyStartDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Ups" DROP COLUMN "warrentStartDate",
ADD COLUMN     "warrentyStartDate" TIMESTAMP(3);
