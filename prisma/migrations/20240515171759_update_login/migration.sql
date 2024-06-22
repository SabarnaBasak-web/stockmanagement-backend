/*
  Warnings:

  - You are about to drop the column `userId` on the `Login` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Login` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Login" DROP CONSTRAINT "Login_userId_fkey";

-- AlterTable
ALTER TABLE "Login" DROP COLUMN "userId";

-- CreateIndex
CREATE UNIQUE INDEX "Login_username_key" ON "Login"("username");
