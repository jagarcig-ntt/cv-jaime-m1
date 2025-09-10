export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-10">
      <div className="container mx-auto px-4 py-6 text-sm text-slate-400 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Jaime García</span>
        <span>Built with Next.js, Express & PostgreSQL</span>
      </div>
    </footer>
  );
}

