import { PrismaClient } from '../app/generated/prisma/client/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import bcrypt from 'bcryptjs'
import "dotenv/config";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
    // Clear existing data
    await prisma.user.deleteMany()
    await prisma.schoolWork.deleteMany()
    await prisma.brainDump.deleteMany()
    await prisma.siteSettings.deleteMany()

    // Create Admin User
    const hashedPassword = await bcrypt.hash('admin123', 10)
    await prisma.user.create({
        data: {
            username: 'admin',
            password: hashedPassword,
        },
    })

    // Create Site Settings
    await prisma.siteSettings.create({
        data: {
            id: 'singleton',
            aboutImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
            aboutText: 'I am a fashion designer dedicated to creating architecture for the body. Based on the intersection of minimalist elegance and sustainable craftsmanship, my practice revolves around the dialogue between form and textile.',
            contactEmail: 'contact@emakay.com',
            phoneNumber: '+1 234 567 890',
            footerText: 'EMAKAY STUDIO © EST. 2024',
            seoTitle: 'EMA KAY | Fashion Portfolio',
            seoDescription: 'Premium fashion design and creative direction portfolio by Ema Kay.',
        },
    })

    // Create Social Links
    await prisma.socialLink.createMany({
        data: [
            { label: 'Instagram', url: 'https://instagram.com/emakay' },
            { label: 'LinkedIn', url: 'https://linkedin.com/in/emakay' },
        ],
    })


    // Create School Work
    await prisma.schoolWork.createMany({
        data: [
            {
                title: 'Metamorphosis Collection',
                description: 'A study on organic shapes and fluid textiles inspired by biological transformations.',
                coverImage: 'https://images.unsplash.com/photo-1539109132381-3daa50e2b34a?w=800&q=80',
                gallery: [
                    'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&q=80',
                    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80',
                ],
            },
            {
                title: 'Urban Nomads 2024',
                description: 'Sustainable streetwear designed for the modern metropolitan traveler.',
                coverImage: 'https://images.unsplash.com/photo-1529139513466-420914c77604?w=800&q=80',
                gallery: [
                    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
                ],
            },
        ],
    })

    // Create Brain Dump
    await prisma.brainDump.createMany({
        data: [
            {
                title: 'On Texture and Light',
                description: 'An exploration of how different fabrics interact with natural light in architectural spaces.',
                coverImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
                gallery: [],
                published: true,
            },
            {
                title: 'Moodboard: Ethereal Nights',
                description: 'Visual research for the upcoming Fall/Winter collection.',
                coverImage: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
                gallery: [],
                published: true,
            },
        ],
    })

    console.log('Seed completed successfully!')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
