-- AlterTable
ALTER TABLE "AssignedProducts" ADD COLUMN     "dateOfReturn" TIMESTAMP(3),
ALTER COLUMN "dateOfIssue" DROP NOT NULL;
