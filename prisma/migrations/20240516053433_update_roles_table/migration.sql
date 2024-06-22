/*
  Warnings:

  - You are about to drop the `_routeToRoles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `routeId` to the `Roles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_routeToRoles" DROP CONSTRAINT "_routeToRoles_A_fkey";

-- DropForeignKey
ALTER TABLE "_routeToRoles" DROP CONSTRAINT "_routeToRoles_B_fkey";

-- AlterTable
ALTER TABLE "Roles" ADD COLUMN     "routeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_routeToRoles";

-- AddForeignKey
ALTER TABLE "Roles" ADD CONSTRAINT "Roles_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
