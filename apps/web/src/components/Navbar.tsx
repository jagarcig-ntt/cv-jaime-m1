import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">{process.env.NEXT_PUBLIC_SITE_NAME || 'CV Portal'}</Link>
        <nav className="flex gap-4 text-sm text-slate-200">
          <Link href="/education" className="hover:text-white">Education</Link>
          <Link href="/experience" className="hover:text-white">Experience</Link>
          <Link href="/projects" className="hover:text-white">Projects</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

