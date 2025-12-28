"use client"

import { useState } from "react"
import { createSocialLink, updateSocialLink, deleteSocialLink } from "@/app/actions/social-links"
import { Plus, Trash2, Link as LinkIcon } from "lucide-react"

interface SocialLink {
    id: string
    label: string
    url: string
}

export function SocialLinksManager({ initialLinks }: { initialLinks: SocialLink[] }) {
    const [links, setLinks] = useState(initialLinks)
    const [isAdding, setIsAdding] = useState(false)
    const [newLabel, setNewLabel] = useState("")
    const [newUrl, setNewUrl] = useState("")

    const handleAdd = async () => {
        if (!newLabel || !newUrl) return
        await createSocialLink({ label: newLabel, url: newUrl })
        // In a real app we'd fetch the new list or get it back from the action
        // For now, let's assume revalidatePath works or local state update
        setIsAdding(false)
        setNewLabel("")
        setNewUrl("")
        window.location.reload() // Simple way to refresh data for now
    }

    const handleDelete = async (id: string) => {
        await deleteSocialLink(id)
        setLinks(links.filter(l => l.id !== id))
    }

    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end border-b border-border pb-8">
                <div className="space-y-2">
                    <div className="text-[10px] uppercase tracking-[0.5em] font-black text-muted-foreground italic">Manage Links</div>
                    <h2 className="font-serif text-4xl font-black italic uppercase tracking-tighter">Social Links</h2>
                </div>
                <button
                    onClick={() => setIsAdding(true)}
                    className="p-3 bg-foreground text-background hover:opacity-90 transition-all cursor-pointer"
                >
                    <Plus size={20} />
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {links.map((link) => (
                    <div key={link.id} className="group border border-border p-6 flex justify-between items-center hover:border-foreground transition-all">
                        <div className="space-y-1">
                            <div className="text-[10px] uppercase tracking-[0.2em] font-black italic">{link.label}</div>
                            <div className="text-xs font-mono text-muted-foreground truncate max-w-[200px]">{link.url}</div>
                        </div>
                        <button
                            onClick={() => handleDelete(link.id)}
                            className="opacity-0 group-hover:opacity-100 p-2 text-destructive hover:bg-destructive/10 transition-all"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                ))}
            </div>

            {isAdding && (
                <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="w-full max-w-md bg-card border border-border p-12 space-y-8">
                        <div className="space-y-2">
                            <h3 className="font-serif text-3xl font-black italic uppercase">New Link</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50 block italic">Name</label>
                                <input
                                    type="text"
                                    value={newLabel}
                                    onChange={(e) => setNewLabel(e.target.value)}
                                    className="w-full bg-background border border-border px-6 py-4 focus:border-foreground outline-none transition-all font-mono text-sm uppercase"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50 block italic">URL</label>
                                <input
                                    type="text"
                                    value={newUrl}
                                    onChange={(e) => setNewUrl(e.target.value)}
                                    className="w-full bg-background border border-border px-6 py-4 focus:border-foreground outline-none transition-all font-mono text-sm"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={() => setIsAdding(false)}
                                className="flex-1 py-4 border border-border text-[10px] uppercase tracking-[0.3em] font-black italic hover:bg-muted"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAdd}
                                className="flex-1 py-4 bg-foreground text-background text-[10px] uppercase tracking-[0.3em] font-black italic hover:opacity-90 transition-all cursor-pointer"
                            >
                                Add Link
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
