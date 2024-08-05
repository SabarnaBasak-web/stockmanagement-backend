/*
  Warnings:

  - Added the required column `active` to the `Login` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Login" ADD COLUMN     "active" BOOLEAN NOT NULL;
