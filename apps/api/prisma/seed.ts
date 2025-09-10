import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed a basic profile
  await prisma.profile.upsert({
    where: { email: 'jaime@example.com' },
    update: {},
    create: {
      name: 'Jaime García',
      title: 'Full‑Stack Engineer',
      summary: 'Engineer focused on clean architecture, DX, and product impact.',
      email: 'jaime@example.com',
      location: 'Madrid, Spain',
      website: 'https://example.com',
      linkedin: 'https://www.linkedin.com/in/example',
      github: 'https://github.com/example'
    }
  });

  // Seed some education
  await prisma.education.createMany({
    data: [
      {
        institution: 'Example University',
        degree: 'BSc',
        field: 'Computer Science',
        startDate: new Date('2013-09-01'),
        endDate: new Date('2017-06-30'),
        description: 'Focused on software engineering and distributed systems.'
      }
    ],
    skipDuplicates: true
  });

  // Seed experience (use create for array fields)
  await prisma.experience.create({
    data: {
      company: 'Tech Co',
      role: 'Senior Engineer',
      startDate: new Date('2021-01-01'),
      endDate: null,
      location: 'Remote',
      summary: 'Led full‑stack initiatives across platform teams.',
      highlights: []
    }
  }).catch(() => {});

  // Seed projects (use create for array fields)
  await prisma.project.create({
    data: {
      name: 'CV Portal',
      description: 'Interactive CV and portfolio website built with Next.js and Express.',
      url: 'https://example.com',
      githubUrl: 'https://github.com/example/cv-portal',
      imageUrl: null,
      techStack: ['Next.js', 'Express', 'Prisma', 'PostgreSQL']
    }
  }).catch(() => {});
}

main()
  .then(async () => {
    await prisma.$disconnect();
    // eslint-disable-next-line no-console
    console.log('Seed completed');
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
