// app/schoolwork/page.tsx
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Mock data until the database is connected
const mockSchoolwork = [
  {
    id: '1',
    title: 'Project Alpha',
    description: 'A deep dive into avant-garde fashion concepts.',
    coverImage: 'https://via.placeholder.com/300x200',
    gallery: [],
    school: 'Fashion Institute of Technology',
    course: 'Advanced Design',
    year: '2023',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    title: 'Collection Beta',
    description: 'Exploring sustainable materials in modern apparel.',
    coverImage: 'https://via.placeholder.com/300x200',
    gallery: [],
    school: 'Parsons School of Design',
    course: 'Sustainable Fashion',
    year: '2022',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function SchoolworkPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold font-serif mb-12">Schoolwork</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockSchoolwork.map((item) => (
              <div key={item.id} className="border rounded-lg overflow-hidden">
                <img src={item.coverImage} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-muted-foreground mt-2">{item.description}</p>
                  <div className="text-sm text-gray-500 mt-4">
                    <p>{item.school}</p>
                    <p>{item.course} - {item.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
