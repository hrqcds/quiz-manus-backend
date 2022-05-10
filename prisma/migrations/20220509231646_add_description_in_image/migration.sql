/*
  Warnings:

  - Added the required column `description` to the `images` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_images" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "path" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_images" ("created_at", "id", "path") SELECT "created_at", "id", "path" FROM "images";
DROP TABLE "images";
ALTER TABLE "new_images" RENAME TO "images";
CREATE UNIQUE INDEX "images_description_key" ON "images"("description");
CREATE INDEX "images_id_path_idx" ON "images"("id", "path");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
