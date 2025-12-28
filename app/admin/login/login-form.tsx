"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { loginAction } from "@/app/actions/auth"

export function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)

        const formData = new FormData()
        formData.append("username", username)
        formData.append("password", password)

        try {
            const result = await loginAction(formData)
            if (result.success) {
                router.push("/admin")
                router.refresh()
            } else {
                setError(result.error || "Invalid credentials")
            }
        } catch (err) {
            setError("An unexpected error occurred.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 bg-card border border-border p-12">
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] opacity-50 block font-bold">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-background border border-border/50 px-4 py-4 focus:border-foreground outline-none transition-all font-mono text-sm uppercase tracking-widest"
                        placeholder="USERNAME"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] opacity-50 block font-bold">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-background border border-border/50 px-4 py-4 focus:border-foreground outline-none transition-all font-mono text-sm uppercase tracking-widest"
                        placeholder="PASSWORD"
                        required
                    />
                </div>
            </div>

            {error && (
                <div className="bg-destructive/10 border border-destructive/20 p-4 text-[10px] uppercase tracking-widest font-black text-destructive text-center italic">
                    {error}
                </div>
            )}

            <button
                type="submit"
                disabled={isLoading}
                className="w-full py-6 bg-foreground text-background font-black uppercase tracking-[0.5em] italic text-xs hover:opacity-90 cursor-pointer transition-all disabled:opacity-50"
            >
                {isLoading ? "Authenticating..." : "Sign In"}
            </button>
        </form>
    )
}
