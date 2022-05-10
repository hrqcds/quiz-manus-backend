-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_questions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "question_TypeId" INTEGER NOT NULL,
    "optionsId" INTEGER NOT NULL,
    CONSTRAINT "questions_question_TypeId_fkey" FOREIGN KEY ("question_TypeId") REFERENCES "question_type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "questions_optionsId_fkey" FOREIGN KEY ("optionsId") REFERENCES "options" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_questions" ("answer", "created_at", "id", "optionsId", "question", "question_TypeId") SELECT "answer", "created_at", "id", "optionsId", "question", "question_TypeId" FROM "questions";
DROP TABLE "questions";
ALTER TABLE "new_questions" RENAME TO "questions";
CREATE INDEX "questions_id_idx" ON "questions"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
