-- CreateTable
CREATE TABLE "Login" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "imagePath" TEXT,

    CONSTRAINT "Login_pkey" PRIMARY KEY ("id")
);
