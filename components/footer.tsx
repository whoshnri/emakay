import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <a 
              href="mailto:hello@designer.com" 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
              title="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            
            <a 
              href="tel:+15551234567" 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
              title="Phone"
            >
              <Phone className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a 
              href="#" 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
              title="Instagram"
            >
              <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            
            <a 
              href="#" 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
              title="Pinterest"
            >
              <div className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.001 24c6.624 0 11.99-5.373 11.99-12C24 5.372 18.626.001 12.001.001z"/>
                </svg>
              </div>
            </a>
            
            <a 
              href="#" 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground">
            © 2025 EMAKAY. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
} 