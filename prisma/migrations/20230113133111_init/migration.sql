-- CreateTable
CREATE TABLE "hearbeat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "milliseconds" DECIMAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
