"use client"

import { useState } from "react"
import { updateSiteSettings } from "@/app/actions/settings"
import { Check } from "lucide-react"

interface Settings {
    aboutImage: string
    aboutText: string
    contactEmail: string
    phoneNumber: string
    footerText: string
    seoTitle: string
    seoDescription: string
}

export function SettingsManager({ initialSettings }: { initialSettings: Settings | null }) {
    const [aboutImage, setAboutImage] = useState(initialSettings?.aboutImage || "")
    const [aboutText, setAboutText] = useState(initialSettings?.aboutText || "")
    const [contactEmail, setContactEmail] = useState(initialSettings?.contactEmail || "")
    const [phoneNumber, setPhoneNumber] = useState(initialSettings?.phoneNumber || "")
    const [footerText, setFooterText] = useState(initialSettings?.footerText || "")
    const [seoTitle, setSeoTitle] = useState(initialSettings?.seoTitle || "")
    const [seoDescription, setSeoDescription] = useState(initialSettings?.seoDescription || "")

    const [isSaving, setIsSaving] = useState(false)
    const [saved, setSaved] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSaving(true)
        await updateSiteSettings({
            aboutImage,
            aboutText,
            contactEmail,
            phoneNumber,
            footerText,
            seoTitle,
            seoDescription
        })
        setIsSaving(false)
        setSaved(true)
        setTimeout(() => setSaved(false), 3000)
    }


    return (
        <div className="space-y-12 max-w-2xl">
            <header className="space-y-4 border-b border-border pb-12">
                <div className="text-[10px] uppercase tracking-[0.5em] font-black text-muted-foreground italic">Site Settings</div>
                <h1 className="font-serif text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
                    Settings
                </h1>
            </header>

            <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50 block italic">Contact Email</label>
                                <input
                                    type="email"
                                    value={contactEmail}
                                    onChange={(e) => setContactEmail(e.target.value)}
                                    className="w-full bg-card border border-border px-6 py-4 focus:border-foreground outline-none transition-all font-mono text-sm uppercase tracking-widest"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50 block italic">Phone Number</label>
                                <input
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="w-full bg-card border border-border px-6 py-4 focus:border-foreground outline-none transition-all font-mono text-sm uppercase tracking-widest"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50 block italic">Footer Text</label>
                            <input
                                type="text"
                                value={footerText}
                                onChange={(e) => setFooterText(e.target.value)}
                                className="w-full bg-card border border-border px-6 py-4 focus:border-foreground outline-none transition-all font-mono text-sm uppercase tracking-widest"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50 block italic">About Text</label>
                            <textarea
                                value={aboutText}
                                onChange={(e) => setAboutText(e.target.value)}
                                className="w-full bg-card border border-border px-6 py-4 focus:border-foreground outline-none transition-all font-mono text-sm uppercase tracking-widest min-h-32"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50 block italic">About Image URL</label>
                        <input
                            type="text"
                            value={aboutImage}
                            onChange={(e) => setAboutImage(e.target.value)}
                            className="w-full bg-card border border-border px-6 py-4 focus:border-foreground outline-none transition-all font-mono text-sm tracking-widest"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50 block italic">SEO Title</label>
                        <input
                            type="text"
                            value={seoTitle}
                            onChange={(e) => setSeoTitle(e.target.value)}
                            className="w-full bg-card border border-border px-6 py-4 focus:border-foreground outline-none transition-all font-mono text-sm uppercase tracking-widest"
                            placeholder="TITLE"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50 block italic">SEO Description</label>
                        <textarea
                            value={seoDescription}
                            onChange={(e) => setSeoDescription(e.target.value)}
                            className="w-full bg-card border border-border px-6 py-4 focus:border-foreground outline-none transition-all font-mono text-sm uppercase tracking-widest min-h-32"
                            placeholder="DESCRIPTION"
                            required
                        />
                    </div>

                </div>

                <button
                    disabled={isSaving}
                    className="px-12 py-5 bg-foreground text-background text-[10px] uppercase tracking-[0.5em] font-black italic hover:opacity-90 transition-all cursor-pointer flex items-center gap-4"
                >
                    {isSaving ? "Saving..." : saved ? <><Check size={14} /> Saved</> : "Save Settings"}
                </button>

            </form>
        </div>
    )
}
