/*
  Warnings:

  - You are about to drop the column `productId` on the `AssignedProducts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[serialNo]` on the table `AssignedProducts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `serialNo` to the `AssignedProducts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AssignedProducts" DROP CONSTRAINT "AssignedProducts_productId_fkey";

-- AlterTable
ALTER TABLE "AssignedProducts" DROP COLUMN "productId",
ADD COLUMN     "serialNo" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AssignedProducts_serialNo_key" ON "AssignedProducts"("serialNo");
