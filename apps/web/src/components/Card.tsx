type Props = { title: string; description?: string };

export default function Card({ title, description }: Props) {
  return (
    <div className="card h-full">
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && <p className="text-slate-300 mt-1">{description}</p>}
    </div>
  );
}

