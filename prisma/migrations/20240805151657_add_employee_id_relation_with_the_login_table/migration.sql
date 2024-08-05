/*
  Warnings:

  - Added the required column `employeeId` to the `Login` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Login" ADD COLUMN     "employeeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Login" ADD CONSTRAINT "Login_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("empId") ON DELETE CASCADE ON UPDATE CASCADE;
