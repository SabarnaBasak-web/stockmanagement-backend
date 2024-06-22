-- DropForeignKey
ALTER TABLE "Login" DROP CONSTRAINT "Login_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_ipId_fkey";

-- AddForeignKey
ALTER TABLE "Login" ADD CONSTRAINT "Login_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_ipId_fkey" FOREIGN KEY ("ipId") REFERENCES "Ip"("id") ON DELETE CASCADE ON UPDATE CASCADE;
