-- AlterTable
ALTER TABLE `user` ADD COLUMN `status` ENUM('active', 'pending', 'suspended') NOT NULL DEFAULT 'pending';
