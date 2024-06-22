-- AlterTable
ALTER TABLE "User" ALTER COLUMN "ipId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Ip" (
    "id" SERIAL NOT NULL,
    "ipName" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "inUse" BOOLEAN NOT NULL,

    CONSTRAINT "Ip_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_ipId_fkey" FOREIGN KEY ("ipId") REFERENCES "Ip"("id") ON DELETE SET NULL ON UPDATE CASCADE;
