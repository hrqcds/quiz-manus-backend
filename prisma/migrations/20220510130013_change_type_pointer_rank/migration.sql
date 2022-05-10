/*
  Warnings:

  - You are about to alter the column `points` on the `rank` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_rank" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_rank" ("created_at", "id", "name", "points") SELECT "created_at", "id", "name", "points" FROM "rank";
DROP TABLE "rank";
ALTER TABLE "new_rank" RENAME TO "rank";
CREATE INDEX "rank_id_idx" ON "rank"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
