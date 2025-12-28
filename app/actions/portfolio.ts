"use server"

import prisma from "@/lib/prisma.engine"
import { revalidatePath } from "next/cache"

export async function createSchoolWork(data: { title: string; description: string; coverImage: string; gallery: string[] }) {
    await prisma.schoolWork.create({ data })
    revalidatePath("/")
    revalidatePath("/schoolwork")
    revalidatePath("/admin")
}

export async function updateSchoolWork(id: string, data: { title: string; description: string; coverImage: string; gallery: string[] }) {
    await prisma.schoolWork.update({
        where: { id },
        data,
    })
    revalidatePath("/")
    revalidatePath("/schoolwork")
    revalidatePath("/admin")
}

export async function deleteSchoolWork(id: string) {
    await prisma.schoolWork.delete({ where: { id } })
    revalidatePath("/")
    revalidatePath("/schoolwork")
    revalidatePath("/admin")
}
