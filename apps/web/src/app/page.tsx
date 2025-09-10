import Link from 'next/link';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import { getProfile } from '../lib/api';

export default async function HomePage() {
  const profile = await getProfile();
  return (
    <div className="space-y-10">
      <section>
        <SectionHeader
          title={profile?.name ?? 'Your Name'}
          subtitle={profile?.title ?? 'Your Title'}
        />
        <p className="text-slate-300 max-w-3xl">
          {profile?.summary ?? 'Welcome to my professional portal. Explore my education, experience, projects, and feel free to get in touch.'}
        </p>
      </section>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/education"><Card title="Education" description="Degrees and certifications" /></Link>
        <Link href="/experience"><Card title="Experience" description="Roles and responsibilities" /></Link>
        <Link href="/projects"><Card title="Projects" description="Portfolio and case studies" /></Link>
        <Link href="/contact"><Card title="Contact" description="Send a message or connect" /></Link>
      </section>
    </div>
  );
}

