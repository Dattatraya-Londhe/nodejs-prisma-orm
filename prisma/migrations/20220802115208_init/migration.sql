-- CreateTable
CREATE TABLE `Blog` (
    `id` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Blog_id_key`(`id`),
    FULLTEXT INDEX `Blog_content_idx`(`content`),
    FULLTEXT INDEX `Blog_content_title_idx`(`content`, `title`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
