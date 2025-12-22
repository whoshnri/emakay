// Mock data until the database is connected
const mockSiteSettings = {
  aboutImage: '/fashion-designer-portrait.png',
  contactEmail: 'xyz@gmail.com',
  // You would also have social media links and a bio field
};

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const bio = `
    <p>
      I am a fashion designer dedicated to creating timeless pieces that embody minimalist elegance and
      sustainable craftsmanship. My work focuses on clean lines, premium materials, and thoughtful
      construction.
    </p>
    <p>
      Each piece is designed with intention, prioritizing quality over quantity. I believe in slow
      fashion—creating garments that transcend seasonal trends and become cherished wardrobe staples.
    </p>
    <p>
      My design philosophy centers on the intersection of form and function, where every detail serves a
      purpose. From ethically sourced materials to meticulous attention to fit, each creation reflects a
      commitment to excellence.
    </p>
  `;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="font-serif text-4xl font-bold mb-8">About</h1>
              {/*
                NOTE: Using dangerouslySetInnerHTML is a potential security risk.
                When this content becomes dynamic, it should be sanitized or, preferably,
                rendered from a format like Markdown that can be safely converted to HTML.
              */}
              <div className="space-y-6 text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: bio }} />
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Contact</h2>
                <a href={`mailto:${mockSiteSettings.contactEmail}`} className="text-blue-500 hover:underline">
                  {mockSiteSettings.contactEmail}
                </a>
                {/* Add social media links here */}
              </div>
            </div>

            <div className="aspect-[3/4] bg-muted">
              <img src={mockSiteSettings.aboutImage} alt="Designer portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
