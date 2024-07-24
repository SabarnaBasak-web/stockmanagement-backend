/*
  Warnings:

  - Added the required column `productId` to the `AssignedProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AssignedProducts" ADD COLUMN     "productId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "AssignedProducts" ADD CONSTRAINT "AssignedProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
