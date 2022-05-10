-- CreateTable
CREATE TABLE "rank" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "points" REAL NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "question_type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "options" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "option_a" TEXT NOT NULL,
    "image_a" TEXT NOT NULL,
    "option_b" TEXT NOT NULL,
    "image_b" TEXT NOT NULL,
    "option_c" TEXT NOT NULL,
    "image_c" TEXT NOT NULL,
    "option_d" TEXT NOT NULL,
    "image_d" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "questions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "question_TypeId" INTEGER NOT NULL,
    "optionsId" INTEGER NOT NULL,
    CONSTRAINT "questions_question_TypeId_fkey" FOREIGN KEY ("question_TypeId") REFERENCES "question_type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "questions_optionsId_fkey" FOREIGN KEY ("optionsId") REFERENCES "options" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "rank_id_idx" ON "rank"("id");

-- CreateIndex
CREATE UNIQUE INDEX "question_type_description_key" ON "question_type"("description");

-- CreateIndex
CREATE INDEX "question_type_id_description_idx" ON "question_type"("id", "description");

-- CreateIndex
CREATE INDEX "options_id_idx" ON "options"("id");

-- CreateIndex
CREATE INDEX "questions_id_idx" ON "questions"("id");
