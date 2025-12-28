"use server"

import prisma from "@/lib/prisma.engine"
import { revalidatePath } from "next/cache"

export async function createSocialLink(data: { label: string; url: string }) {
    await prisma.socialLink.create({
        data,
    })
    revalidatePath("/")
    revalidatePath("/admin/settings")
}

export async function updateSocialLink(id: string, data: { label: string; url: string }) {
    await prisma.socialLink.update({
        where: { id },
        data,
    })
    revalidatePath("/")
    revalidatePath("/admin/settings")
}

export async function deleteSocialLink(id: string) {
    await prisma.socialLink.delete({
        where: { id },
    })
    revalidatePath("/")
    revalidatePath("/admin/settings")
}
