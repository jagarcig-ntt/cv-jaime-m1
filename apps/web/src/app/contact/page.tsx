'use client';

import SectionHeader from '../../components/SectionHeader';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');
  const [error, setError] = useState<string|undefined>();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus('submitting');
    setError(undefined);
    try {
      const payload = {
        name: String(formData.get('name') || ''),
        email: String(formData.get('email') || ''),
        subject: String(formData.get('subject') || ''),
        body: String(formData.get('message') || '')
      };
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Failed to send message');
      setStatus('success');
      form.reset();
    } catch (e: any) {
      setStatus('error');
      setError(e?.message || 'Unknown error');
    }
  }

  return (
    <div className="space-y-6">
      <SectionHeader title="Contact" subtitle="Send a message" />
      <form onSubmit={onSubmit} className="card space-y-4 max-w-xl">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-sm text-slate-300">Name</label>
            <input required name="name" className="mt-1 w-full rounded bg-slate-900 border border-slate-700 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-slate-300">Email</label>
            <input required type="email" name="email" className="mt-1 w-full rounded bg-slate-900 border border-slate-700 px-3 py-2" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-slate-300">Subject</label>
          <input required name="subject" className="mt-1 w-full rounded bg-slate-900 border border-slate-700 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-slate-300">Message</label>
          <textarea required name="message" rows={6} className="mt-1 w-full rounded bg-slate-900 border border-slate-700 px-3 py-2" />
        </div>
        <div className="flex items-center gap-3">
          <button disabled={status==='submitting'} className="px-4 py-2 rounded bg-sky-600 hover:bg-sky-500 disabled:opacity-60">
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'success' && <span className="text-green-400">Thanks! I will get back to you.</span>}
          {status === 'error' && <span className="text-red-400">{error}</span>}
        </div>
      </form>
    </div>
  );
}
