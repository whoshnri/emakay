import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoginForm } from "./login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="flex items-center justify-center min-h-[calc(100vh-200px)] px-6 pt-24">
        <div className="max-w-md w-full">
          <header className="text-center mb-12 space-y-4">
            <div className="text-[10px] uppercase tracking-[0.5em] font-black text-muted-foreground italic">Security Protocol</div>
            <h1 className="font-serif text-5xl font-black italic uppercase tracking-tighter">Authorized Access</h1>
          </header>

          <LoginForm />

          <div className="mt-12 text-center text-[10px] uppercase tracking-[0.3em] font-black opacity-30">
            EMAKAY STUDIO © EST. 2024
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

