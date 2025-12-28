import prisma from "@/lib/prisma.engine"
import { PortfolioManager } from "./portfolio-client"

export default async function SchoolworkAdminPage() {
  const projects = await prisma.schoolWork.findMany({
    orderBy: { createdAt: "desc" }
  })

  return <PortfolioManager initialProjects={projects} />
}


