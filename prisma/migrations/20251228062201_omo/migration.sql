-- AlterTable
ALTER TABLE "SiteSettings" ADD COLUMN     "aboutText" TEXT NOT NULL DEFAULT 'I am a fashion designer dedicated to creating architecture for the body...',
ADD COLUMN     "footerText" TEXT NOT NULL DEFAULT 'EMAKAY STUDIO © EST. 2024',
ADD COLUMN     "phoneNumber" TEXT NOT NULL DEFAULT '+1 234 567 890';

-- CreateTable
CREATE TABLE "SocialLink" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "SocialLink_pkey" PRIMARY KEY ("id")
);
