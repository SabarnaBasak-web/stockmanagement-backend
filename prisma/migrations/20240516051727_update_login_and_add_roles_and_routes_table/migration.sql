/*
  Warnings:

  - Added the required column `roleId` to the `Login` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Login" ADD COLUMN     "roleId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Routes" (
    "id" SERIAL NOT NULL,
    "routes" TEXT NOT NULL,

    CONSTRAINT "Routes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_routeToRoles" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_routeToRoles_AB_unique" ON "_routeToRoles"("A", "B");

-- CreateIndex
CREATE INDEX "_routeToRoles_B_index" ON "_routeToRoles"("B");

-- AddForeignKey
ALTER TABLE "Login" ADD CONSTRAINT "Login_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_routeToRoles" ADD CONSTRAINT "_routeToRoles_A_fkey" FOREIGN KEY ("A") REFERENCES "Roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_routeToRoles" ADD CONSTRAINT "_routeToRoles_B_fkey" FOREIGN KEY ("B") REFERENCES "Routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
