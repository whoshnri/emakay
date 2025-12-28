import prisma from "@/lib/prisma.engine"
import { SettingsManager } from "./settings-manager-client"
import { SocialLinksManager } from "./social-links-manager"

export default async function SettingsAdminPage() {
  const settings = await prisma.siteSettings.findUnique({
    where: { id: "singleton" }
  })

  const socialLinks = await prisma.socialLink.findMany()

  return (
    <div className="space-y-24">
      <SettingsManager initialSettings={settings} />
      <div className="border-t border-border pt-24">
        <SocialLinksManager initialLinks={socialLinks} />
      </div>
    </div>
  )
}



