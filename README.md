# CV Jaime — Professional Personal Website

A modern monorepo for an interactive CV and portfolio.

- Frontend: Next.js 14 (App Router) + TailwindCSS
- Backend: Express + TypeScript + Prisma
- Database: PostgreSQL

## Quickstart

1) Copy envs

- Duplicate `.env.example` to `.env` at repo root (and edit if needed).

2) Start PostgreSQL

- With Docker: `docker compose up -d`

3) Install dependencies

- From repo root: `npm install`

4) Prepare database (generate client, run migrations, seed)

- `npm --workspace @cv/api run prisma:generate`
- `npm --workspace @cv/api run prisma:migrate`
- `npm --workspace @cv/api run prisma:seed`

5) Run dev servers

- Backend: `npm run dev:api` (http://localhost:4000)
- Frontend: `npm run dev:web` (http://localhost:3000)
- Or both: `npm run dev`

## Project Structure

- `apps/web` — Next.js app (dashboard homepage, Education, Experience, Projects, Contact)
- `apps/api` — Express API (profile, education, experience, projects, contact)
- `docker-compose.yml` — Local PostgreSQL
- `.env.example` — Environment variables reference

## API Endpoints

- `GET /health`
- `GET /api/profile`
- `GET /api/education`
- `GET /api/experience`
- `GET /api/projects`
- `POST /api/contact` { name, email, subject, body }

## Configuration

- `NEXT_PUBLIC_API_URL` (default `http://localhost:4000`) — frontend → backend URL
- `DATABASE_URL` — Postgres connection string
- `PORT` — API port (default 4000)
- `ORIGIN` — Allowed CORS origins (comma‑separated)

## Deployment Notes

- Containerize `apps/api` and `apps/web` separately, or run as a single full‑stack on a PaaS.
- Database: provision a managed Postgres (Azure Database for PostgreSQL, AWS RDS, etc.).
- Set env vars in the hosting platform; run Prisma migrations during release.

## Next Steps

- Add auth (optional) to protect admin routes.
- Build an editor/admin UI to manage content (profile, experience, etc.).
- Add images for projects (S3/Azure Blob Storage) and a CDN.
- Add tests and CI (format, typecheck, build, test).

