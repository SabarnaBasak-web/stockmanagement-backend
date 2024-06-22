/*
  Warnings:

  - You are about to drop the column `ipName` on the `Ip` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ipNumber` to the `Ip` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_ipId_fkey";

-- AlterTable
ALTER TABLE "Ip" DROP COLUMN "ipName",
ADD COLUMN     "ipNumber" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";
