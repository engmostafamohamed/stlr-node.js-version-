/*
  Warnings:

  - You are about to drop the column `verified` on the `passwordresetotp` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `passwordresetotp` DROP COLUMN `verified`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `verified` BOOLEAN NOT NULL DEFAULT false;
