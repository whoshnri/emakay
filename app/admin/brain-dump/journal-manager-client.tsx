"use client"

import { useState } from "react"
import { deleteBrainDump, createBrainDump, updateBrainDump } from "@/app/actions/journal"
import { X, Plus, Trash2, Edit } from "lucide-react"

interface Post {
    id: string
    title: string
    description: string
    coverImage: string
    gallery: string[]
    published: boolean
    createdAt: Date
}

export function JournalManager({ initialPosts }: { initialPosts: Post[] }) {
    const [posts, setPosts] = useState(initialPosts)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingPost, setEditingPost] = useState<Post | null>(null)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [coverImage, setCoverImage] = useState("")
    const [published, setPublished] = useState(true)

    const resetForm = () => {
        setTitle("")
        setDescription("")
        setCoverImage("")
        setPublished(true)
        setEditingPost(null)
    }

    const handleOpenCreate = () => {
        resetForm()
        setIsModalOpen(true)
    }

    const handleOpenEdit = (post: Post) => {
        setEditingPost(post)
        setTitle(post.title)
        setDescription(post.description)
        setCoverImage(post.coverImage)
        setPublished(post.published)
        setIsModalOpen(true)
    }

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this journal entry?")) {
            await deleteBrainDump(id)
            setPosts(posts.filter(p => p.id !== id))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const data = { title, description, coverImage, gallery: [], published }

        if (editingPost) {
            await updateBrainDump(editingPost.id, data)
            setPosts(posts.map(p => p.id === editingPost.id ? { ...p, ...data } : p))
        } else {
            await createBrainDump(data)
            window.location.reload()
        }
        setIsModalOpen(false)
        resetForm()
    }

    return (
        <div className="space-y-12">
            <header className="space-y-4 border-b border-border pb-12">
                <div className="text-[10px] uppercase tracking-[0.5em] font-black text-muted-foreground italic">Manage</div>
                <div className="flex justify-between items-end">
                    <h1 className="font-serif text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
                        Brain Dump
                    </h1>
                    <button
                        onClick={handleOpenCreate}
                        className="px-8 py-3 bg-foreground text-background text-[10px] uppercase tracking-widest font-black italic hover:opacity-90 transition-all cursor-pointer"
                    >
                        Add New Post
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <div key={post.id} className="border border-border bg-card group overflow-hidden flex flex-col">
                        <div className="aspect-square bg-muted border-b border-border overflow-hidden relative">
                            <img
                                src={post.coverImage || "/placeholder.svg"}
                                alt={post.title}
                                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                            />
                            {!post.published && (
                                <div className="absolute top-4 right-4 bg-background border border-border px-2 py-1 text-[8px] uppercase tracking-widest font-black text-muted-foreground">
                                    Draft
                                </div>
                            )}
                        </div>
                        <div className="p-8 space-y-6 flex-1 flex flex-col">
                            <div className="flex-1">
                                <h3 className="font-serif text-xl font-bold italic tracking-tight uppercase group-hover:translate-x-1 transition-transform">{post.title}</h3>
                                <p className="mt-4 text-[10px] uppercase tracking-widest text-muted-foreground line-clamp-3 leading-loose">
                                    {post.description}
                                </p>
                            </div>

                            <div className="flex justify-between items-center pt-8 border-t border-border/30">
                                <button
                                    onClick={() => handleOpenEdit(post)}
                                    className="text-[9px] uppercase tracking-widest font-black hover:underline italic cursor-pointer inline-flex items-center gap-2"
                                >
                                    <Edit size={10} /> Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(post.id)}
                                    className="text-[9px] uppercase tracking-widest font-black text-destructive hover:underline italic cursor-pointer inline-flex items-center gap-2 border p-2 border-destructive"
                                >
                                    <Trash2 size={10} /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div onClick={() => setIsModalOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-6">
                    <div style={{
                        scrollbarWidth: "none",
                        scrollbarColor: "transparent transparent"
                    }} className="bg-card border border-border w-[90vw] max-w-xl overflow-hidden animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
                        <header className="p-8 border-b border-border flex justify-between items-center bg-background">
                            <h2 className="font-serif text-2xl font-black italic uppercase tracking-tight">
                                {editingPost ? "Edit Post" : "New Post"}
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 hover:bg-muted transition-colors opacity-50 hover:opacity-100"
                            >
                                <X size={20} />
                            </button>
                        </header>

                        <form onSubmit={handleSubmit} className="p-12 space-y-8">
                            <div className="grid grid-cols-1 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50">Title</label>
                                    <input
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full bg-background border border-border/50 px-4 py-4 focus:border-foreground outline-none transition-all font-mono text-xs uppercase tracking-widest"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50">Description</label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full bg-background border border-border/50 px-4 py-4 focus:border-foreground outline-none transition-all font-mono text-xs uppercase tracking-widest min-h-32"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50">Cover Image URL</label>
                                    <input
                                        value={coverImage}
                                        onChange={(e) => setCoverImage(e.target.value)}
                                        className="w-full bg-background border border-border/50 px-4 py-4 focus:border-foreground outline-none transition-all font-mono text-xs tracking-widest"
                                        required
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="checkbox"
                                        checked={published}
                                        onChange={(e) => setPublished(e.target.checked)}
                                        id="published"
                                        className="w-4 h-4 rounded-none border-border"
                                    />
                                    <label htmlFor="published" className="text-[10px] uppercase tracking-widest font-black opacity-50 cursor-pointer">Published</label>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-border flex justify-end gap-6">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-[10px] uppercase tracking-widest font-black opacity-50 hover:opacity-100 transition-opacity italic"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-12 py-4 bg-foreground text-background text-[10px] uppercase tracking-widest font-black italic hover:opacity-90 transition-all cursor-pointer"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
