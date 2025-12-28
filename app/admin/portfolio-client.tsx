"use client"

import { useState } from "react"
import { deleteSchoolWork, createSchoolWork, updateSchoolWork } from "@/app/actions/portfolio"
import { X, Plus, Trash2, Edit } from "lucide-react"

interface Project {
    id: string
    title: string
    description: string
    coverImage: string
    gallery: string[]
    createdAt: Date
}

export function PortfolioManager({ initialProjects }: { initialProjects: Project[] }) {
    const [projects, setProjects] = useState(initialProjects)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingProject, setEditingProject] = useState<Project | null>(null)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [coverImage, setCoverImage] = useState("")
    const [gallery, setGallery] = useState<string[]>([])

    const resetForm = () => {
        setTitle("")
        setDescription("")
        setCoverImage("")
        setGallery([])
        setEditingProject(null)
    }

    const handleOpenCreate = () => {
        resetForm()
        setIsModalOpen(true)
    }

    const handleOpenEdit = (project: Project) => {
        setEditingProject(project)
        setTitle(project.title)
        setDescription(project.description)
        setCoverImage(project.coverImage)
        setGallery(project.gallery)
        setIsModalOpen(true)
    }

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this project?")) {
            await deleteSchoolWork(id)
            setProjects(projects.filter(p => p.id !== id))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const data = { title, description, coverImage, gallery }

        if (editingProject) {
            await updateSchoolWork(editingProject.id, data)
            setProjects(projects.map(p => p.id === editingProject.id ? { ...p, ...data } : p))
        } else {
            await createSchoolWork(data)
            // Note: In a real app, you'd get the new item back from the action or revalidate
            window.location.reload() // Quickest way to reflect server changes
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
                        Schoolwork
                    </h1>
                    <button
                        onClick={handleOpenCreate}
                        className="px-8 py-3 bg-foreground text-background text-[10px] uppercase tracking-widest font-black italic hover:opacity-90 transition-all cursor-pointer"
                    >
                        Add New Project
                    </button>
                </div>
            </header>

            <div className="border border-border bg-card overflow-hidden">
                <table className="w-full text-left border-collapse">
                    {/* <thead>
                        <tr className="border-b border-border/50 bg-background/50">
                            <th className="p-8 text-[10px] uppercase tracking-widest font-black opacity-30">Identity</th>
                            <th className="p-8 text-[10px] uppercase tracking-widest font-black opacity-30">Status</th>
                            <th className="p-8 text-[10px] uppercase tracking-widest font-black opacity-30 text-right">Actions</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id} className="border-b border-border/20 group hover:bg-foreground/2 transition-colors">
                                <td className="p-8">
                                    <div className="flex items-center gap-6">
                                        <img
                                            src={project.coverImage || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-16 h-16 object-cover border border-border/50 grayscale group-hover:grayscale-0 transition-all"
                                        />
                                        <div>
                                            <div className="font-serif text-lg font-bold italic tracking-tight uppercase">{project.title}</div>
                                            <div className="text-[10px] uppercase tracking-widest  truncate max-w-xs">{project.description}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-8">
                                    <span className="text-[9px] uppercase tracking-widest font-black border border-foreground/20 px-3 py-1 italic">Published</span>
                                </td>
                                <td className="p-8 text-right space-x-6">
                                    <button
                                        onClick={() => handleOpenEdit(project)}
                                        className="text-[10px] uppercase tracking-widest font-black hover:underline  hover:opacity-100 transition-opacity italic cursor-pointer inline-flex items-center gap-2"
                                    >
                                        <Edit size={12} /> Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(project.id)}
                                        className="text-[10px] uppercase tracking-widest font-black hover:underline text-destructive hover:opacity-100 transition-opacity italic cursor-pointer inline-flex items-center gap-2 border p-2 border-destructive"
                                    >
                                        <Trash2 size={12} /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div onClick={() => setIsModalOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-6">
                    <div style={{
                        scrollbarWidth: "none"
                    }} className="bg-card border border-border w-[90vw] h-[90vh] overflow-y-auto max-w-xl overflow-hidden animate-in fade-in zoom-in duration-300">
                        <header className="p-8 border-b border-border flex justify-between items-center bg-background">
                            <h2 className="font-serif text-2xl font-black italic uppercase tracking-tight">
                                {editingProject ? "Edit Project" : "New Project"}
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 hover:bg-muted transition-colors  hover:opacity-100"
                            >
                                <X size={20} />
                            </button>
                        </header>

                        <form onSubmit={handleSubmit} className="p-12 space-y-8">
                            <div className="grid grid-cols-1 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-black ">Title</label>
                                    <input
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full bg-background border border-border/50 px-4 py-4 focus:border-foreground outline-none transition-all font-mono text-xs uppercase tracking-widest"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-black ">Description</label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full bg-background border border-border/50 px-4 py-4 focus:border-foreground outline-none transition-all font-mono text-xs uppercase tracking-widest min-h-32"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-black ">Cover Image URL</label>
                                    <input
                                        value={coverImage}
                                        onChange={(e) => setCoverImage(e.target.value)}
                                        className="w-full bg-background border border-border/50 px-4 py-4 focus:border-foreground outline-none transition-all font-mono text-xs tracking-widest"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="pt-8 border-t border-border flex justify-end gap-6">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-[10px] uppercase tracking-widest font-black  hover:opacity-100 transition-opacity italic"
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
