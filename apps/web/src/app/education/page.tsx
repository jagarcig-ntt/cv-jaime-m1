import SectionHeader from '../../components/SectionHeader';
import { getEducation } from '../../lib/api';

export default async function EducationPage() {
  const items = await getEducation();
  return (
    <div className="space-y-6">
      <SectionHeader title="Education" subtitle="Degrees and certifications" />
      <div className="space-y-4">
        {items.map((e) => (
          <div key={e.id} className="card">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold">{e.degree} · {e.field}</h3>
              <span className="text-sm text-slate-400">
                {new Date(e.startDate).getFullYear()} – {e.endDate ? new Date(e.endDate).getFullYear() : 'Present'}
              </span>
            </div>
            <p className="text-slate-300">{e.institution}</p>
            {e.description && <p className="text-slate-400 mt-2">{e.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

