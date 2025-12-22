// app/brain-dump/[id]/page.tsx
import { Metadata } from 'next';

// This function would normally fetch data from the database
async function getBrainDumpItem(id: string) {
  // Mock data until the database is connected
  return {
    id,
    title: `Brain Dump Item ${id}`,
    description: `This is a detailed description of brain dump item ${id}.`,
    coverImage: 'https://via.placeholder.com/800x600',
  };
}

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = await getBrainDumpItem(params.id);

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      images: [
        {
          url: item.coverImage,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function BrainDumpItemPage({ params }: Props) {
  const item = await getBrainDumpItem(params.id);

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold font-serif mb-8">{item.title}</h1>
      <img src={item.coverImage} alt={item.title} className="w-full h-auto object-cover mb-8" />
      <p className="text-muted-foreground">{item.description}</p>
    </div>
  );
}
