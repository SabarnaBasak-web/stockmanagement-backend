-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_ipId_fkey";

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "ipId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_ipId_fkey" FOREIGN KEY ("ipId") REFERENCES "Ip"("id") ON DELETE SET NULL ON UPDATE CASCADE;
