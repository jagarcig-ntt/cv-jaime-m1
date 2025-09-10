import SectionHeader from '../../components/SectionHeader';
import { getProjects } from '../../lib/api';
import Link from 'next/link';

export default async function ProjectsPage() {
  const items = await getProjects();
  return (
    <div className="space-y-6">
      <SectionHeader title="Projects" subtitle="Portfolio work and links" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <div key={p.id} className="card">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-slate-300 mt-1">{p.description}</p>
            {p.techStack?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.techStack.map((t, i) => (
                  <span key={i} className="text-xs bg-slate-700 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            ) : null}
            <div className="mt-4 flex gap-4 text-sm">
              {p.url && <Link className="text-sky-400 hover:underline" href={p.url} target="_blank">Live</Link>}
              {p.githubUrl && <Link className="text-sky-400 hover:underline" href={p.githubUrl} target="_blank">GitHub</Link>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

