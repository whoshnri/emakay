"use server"

import prisma from "@/lib/prisma.engine"
import { revalidatePath } from "next/cache"

export async function createBrainDump(data: { title: string; description: string; coverImage: string; gallery: string[]; published?: boolean }) {
    await prisma.brainDump.create({ data })
    revalidatePath("/brain-dump")
    revalidatePath("/admin/brain-dump")
}

export async function updateBrainDump(id: string, data: { title: string; description: string; coverImage: string; gallery: string[]; published?: boolean }) {
    await prisma.brainDump.update({
        where: { id },
        data,
    })
    revalidatePath("/brain-dump")
    revalidatePath("/admin/brain-dump")
}

export async function deleteBrainDump(id: string) {
    await prisma.brainDump.delete({ where: { id } })
    revalidatePath("/brain-dump")
    revalidatePath("/admin/brain-dump")
}
