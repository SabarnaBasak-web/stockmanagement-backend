-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "cell" TEXT NOT NULL,
    "floorNumber" TEXT NOT NULL,
    "mobileNumber" INTEGER NOT NULL,
    "empId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "ipId" INTEGER NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_ipId_fkey" FOREIGN KEY ("ipId") REFERENCES "Ip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
