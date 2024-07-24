-- CreateTable
CREATE TABLE "AssignedProducts" (
    "id" SERIAL NOT NULL,
    "empId" TEXT NOT NULL,
    "dateOfIssue" TIMESTAMP(3) NOT NULL,
    "ipId" INTEGER NOT NULL,

    CONSTRAINT "AssignedProducts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AssignedProducts" ADD CONSTRAINT "AssignedProducts_empId_fkey" FOREIGN KEY ("empId") REFERENCES "Employee"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignedProducts" ADD CONSTRAINT "AssignedProducts_ipId_fkey" FOREIGN KEY ("ipId") REFERENCES "Ip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
