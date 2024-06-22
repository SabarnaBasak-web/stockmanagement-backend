-- CreateTable
CREATE TABLE "Vendor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mobile" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "dateOfRegistry" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ups" (
    "id" SERIAL NOT NULL,
    "gemNo" INTEGER NOT NULL,
    "gemDate" TIMESTAMP(3) NOT NULL,
    "brandName" TEXT NOT NULL,
    "serialNo" TEXT NOT NULL,
    "modelNo" TEXT NOT NULL,
    "deliveryDate" TIMESTAMP(3),
    "problem" TEXT,
    "warrentStartDate" TIMESTAMP(3),
    "warrentyEndDate" TIMESTAMP(3),
    "defunct" BOOLEAN NOT NULL,
    "isAmc" BOOLEAN NOT NULL,
    "eWaste" BOOLEAN NOT NULL,
    "productId" INTEGER NOT NULL,
    "vendorId" INTEGER NOT NULL,

    CONSTRAINT "Ups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Monitor" (
    "id" SERIAL NOT NULL,
    "gemNo" INTEGER NOT NULL,
    "gemDate" TIMESTAMP(3) NOT NULL,
    "brandName" TEXT NOT NULL,
    "serialNo" TEXT NOT NULL,
    "modelNo" TEXT NOT NULL,
    "deliveryDate" TIMESTAMP(3),
    "problem" TEXT,
    "warrentStartDate" TIMESTAMP(3),
    "warrentyEndDate" TIMESTAMP(3),
    "defunct" BOOLEAN NOT NULL,
    "isAmc" BOOLEAN NOT NULL,
    "eWaste" BOOLEAN NOT NULL,
    "displaySize" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "vendorId" INTEGER NOT NULL,

    CONSTRAINT "Monitor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cpu" (
    "id" SERIAL NOT NULL,
    "gemNo" INTEGER NOT NULL,
    "gemDate" TIMESTAMP(3) NOT NULL,
    "brandName" TEXT NOT NULL,
    "serialNo" TEXT NOT NULL,
    "modelNo" TEXT NOT NULL,
    "deliveryDate" TIMESTAMP(3),
    "problem" TEXT,
    "warrentStartDate" TIMESTAMP(3),
    "warrentyEndDate" TIMESTAMP(3),
    "defunct" BOOLEAN NOT NULL,
    "isAmc" BOOLEAN NOT NULL,
    "eWaste" BOOLEAN NOT NULL,
    "ssd" TEXT,
    "hdd" TEXT,
    "processor" TEXT NOT NULL,
    "processorBaseFrequency" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "opticalDrive" BOOLEAN NOT NULL,
    "graphicsCard" TEXT,
    "wireless" BOOLEAN NOT NULL,
    "os" TEXT NOT NULL,
    "osSerialNumber" TEXT NOT NULL,
    "chipSet" TEXT NOT NULL,
    "upgrade" BOOLEAN NOT NULL,
    "active" BOOLEAN NOT NULL,
    "productId" INTEGER NOT NULL,
    "vendorId" INTEGER NOT NULL,

    CONSTRAINT "Cpu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ups_serialNo_key" ON "Ups"("serialNo");

-- CreateIndex
CREATE UNIQUE INDEX "Ups_modelNo_key" ON "Ups"("modelNo");

-- CreateIndex
CREATE UNIQUE INDEX "Monitor_serialNo_key" ON "Monitor"("serialNo");

-- CreateIndex
CREATE UNIQUE INDEX "Monitor_modelNo_key" ON "Monitor"("modelNo");

-- CreateIndex
CREATE UNIQUE INDEX "Cpu_serialNo_key" ON "Cpu"("serialNo");

-- CreateIndex
CREATE UNIQUE INDEX "Cpu_modelNo_key" ON "Cpu"("modelNo");

-- AddForeignKey
ALTER TABLE "Ups" ADD CONSTRAINT "Ups_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ups" ADD CONSTRAINT "Ups_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Monitor" ADD CONSTRAINT "Monitor_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Monitor" ADD CONSTRAINT "Monitor_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cpu" ADD CONSTRAINT "Cpu_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cpu" ADD CONSTRAINT "Cpu_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
