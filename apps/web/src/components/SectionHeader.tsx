type Props = { title: string; subtitle?: string };

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-2">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="text-slate-400">{subtitle}</p>}
    </div>
  );
}

