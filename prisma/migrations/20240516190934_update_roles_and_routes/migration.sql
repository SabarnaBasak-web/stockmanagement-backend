/*
  Warnings:

  - You are about to drop the column `routeId` on the `Roles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Roles" DROP CONSTRAINT "Roles_routeId_fkey";

-- AlterTable
ALTER TABLE "Roles" DROP COLUMN "routeId";

-- CreateTable
CREATE TABLE "_RolesToRoutes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RolesToRoutes_AB_unique" ON "_RolesToRoutes"("A", "B");

-- CreateIndex
CREATE INDEX "_RolesToRoutes_B_index" ON "_RolesToRoutes"("B");

-- AddForeignKey
ALTER TABLE "_RolesToRoutes" ADD CONSTRAINT "_RolesToRoutes_A_fkey" FOREIGN KEY ("A") REFERENCES "Roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RolesToRoutes" ADD CONSTRAINT "_RolesToRoutes_B_fkey" FOREIGN KEY ("B") REFERENCES "Routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
