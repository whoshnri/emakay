import prisma from "@/lib/prisma.engine"
import { JournalManager } from "./journal-manager-client"

export default async function BrainDumpAdminPage() {
  const posts = await prisma.brainDump.findMany({
    orderBy: { createdAt: "desc" }
  })

  return <JournalManager initialPosts={posts} />
}


