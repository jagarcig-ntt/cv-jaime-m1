const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

type Profile = {
  id: string;
  name: string;
  title: string;
  summary: string;
  email: string;
  location?: string | null;
  website?: string | null;
  linkedin?: string | null;
  github?: string | null;
};

type Education = {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string | null;
  description?: string | null;
};

type Experience = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string | null;
  location?: string | null;
  summary?: string | null;
  highlights: string[];
};

type Project = {
  id: string;
  name: string;
  description: string;
  url?: string | null;
  githubUrl?: string | null;
  imageUrl?: string | null;
  techStack: string[];
};

export async function getProfile(): Promise<Profile | null> {
  try {
    const res = await fetch(`${API_URL}/api/profile`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getEducation(): Promise<Education[]> {
  try {
    const res = await fetch(`${API_URL}/api/education`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getExperience(): Promise<Experience[]> {
  try {
    const res = await fetch(`${API_URL}/api/experience`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_URL}/api/projects`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}
