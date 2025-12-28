"use server"

import prisma from "@/lib/prisma.engine"
import { revalidatePath } from "next/cache"

export async function updateSiteSettings(data: {
    aboutImage: string;
    aboutText: string;
    contactEmail: string;
    phoneNumber: string;
    footerText: string;
    seoTitle: string;
    seoDescription: string
}) {
    await prisma.siteSettings.upsert({
        where: { id: "singleton" },
        update: data,
        create: { ...data, id: "singleton" },
    })
    revalidatePath("/")
    revalidatePath("/about")
    revalidatePath("/admin/settings")
}

