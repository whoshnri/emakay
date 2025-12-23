import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-4">
        <nav className="flex flex-col space-y-2">
          <Link href="/admin/schoolwork">Schoolwork</Link>
          <Link href="/admin/brain-dump">Brain Dump</Link>
          <Link href="/admin/settings">Settings</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
