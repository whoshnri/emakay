import prisma from "@/lib/prisma.engine"

export async function Footer() {
  const settings = await prisma.siteSettings.findUnique({
    where: { id: "singleton" },
  })

  const socialLinks = await prisma.socialLink.findMany()

  const email = settings?.contactEmail || "hello@emakay.com"
  const phone = settings?.phoneNumber || "+1 555 123 4567"
  const footerText = settings?.footerText || "EMAKAY STUDIO © EST. 2024"

  return (
    <footer className="border-t border-border/50 pt-24 pb-10 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6 max-w-sm">
            <Link href="/" className="font-serif text-3xl font-black italic uppercase tracking-tighter">EMA KAY</Link>
            <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-wider">
              Pushing the boundaries of sustainable fashion and architectural silhouettes through conscious design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Inquiries</h3>
              <div className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-wider">
                <a href={`mailto:${email}`} className="hover:opacity-50 transition-opacity">{email}</a>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:opacity-50 transition-opacity">{phone}</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Connect</h3>
              <div className="flex flex-col gap-2 font-bold uppercase tracking-widest text-[10px]">
                {socialLinks.map((link) => (
                  <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">
                    {link.label}
                  </a>
                ))}
                {socialLinks.length === 0 && (
                  <>
                    <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
                    <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/50 text-center md:text-left">
          <div>{footerText}</div>
          <div className="flex gap-8">
            {/* Legal links removed as per request to simplify */}
          </div>
          <div>EST. 2024</div>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
