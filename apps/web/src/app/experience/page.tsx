import SectionHeader from '../../components/SectionHeader';
import { getExperience } from '../../lib/api';

export default async function ExperiencePage() {
  const items = await getExperience();
  return (
    <div className="space-y-6">
      <SectionHeader title="Experience" subtitle="Professional history and impact" />
      <div className="space-y-4">
        {items.map((x) => (
          <div key={x.id} className="card">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold">{x.role} · {x.company}</h3>
              <span className="text-sm text-slate-400">
                {new Date(x.startDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })} – {x.endDate ? new Date(x.endDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' }) : 'Present'}
              </span>
            </div>
            {x.summary && <p className="text-slate-300">{x.summary}</p>}
            {x.highlights?.length ? (
              <ul className="list-disc pl-6 mt-2 text-slate-300">
                {x.highlights.map((h, i) => (<li key={i}>{h}</li>))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

