/*
  Warnings:

  - You are about to drop the column `imagePath` on the `Login` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "imagePath" TEXT;

-- AlterTable
ALTER TABLE "Login" DROP COLUMN "imagePath";
