/*
  Warnings:

  - Added the required column `userId` to the `Login` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Login" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "cell" TEXT NOT NULL,
    "floorNumber" INTEGER NOT NULL,
    "mobileNumber" INTEGER NOT NULL,
    "emp_id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "ipId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Login" ADD CONSTRAINT "Login_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
