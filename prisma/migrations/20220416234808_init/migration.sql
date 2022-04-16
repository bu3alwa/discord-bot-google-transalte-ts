/*
  Warnings:

  - You are about to drop the `_Receiver` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_Receiver";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_listeners" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Channel" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Channel" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_listeners_AB_unique" ON "_listeners"("A", "B");

-- CreateIndex
CREATE INDEX "_listeners_B_index" ON "_listeners"("B");
