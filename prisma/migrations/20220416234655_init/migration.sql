-- CreateTable
CREATE TABLE "Channel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "snowflake" TEXT,
    "language" TEXT
);

-- CreateTable
CREATE TABLE "_Receiver" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Channel" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Channel" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Channel_snowflake_key" ON "Channel"("snowflake");

-- CreateIndex
CREATE UNIQUE INDEX "_Receiver_AB_unique" ON "_Receiver"("A", "B");

-- CreateIndex
CREATE INDEX "_Receiver_B_index" ON "_Receiver"("B");
