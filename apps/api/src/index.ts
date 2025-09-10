import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { prisma } from './db/prisma';
import profileRouter from './routes/profile';
import eduRouter from './routes/education';
import expRouter from './routes/experience';
import projectsRouter from './routes/projects';
import contactRouter from './routes/contact';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: process.env.ORIGIN?.split(',') ?? '*'}));

app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'api', time: new Date().toISOString() });
});

app.use('/api/profile', profileRouter);
app.use('/api/education', eduRouter);
app.use('/api/experience', expRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/contact', contactRouter);

const port = Number(process.env.PORT ?? 4000);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on http://localhost:${port}`);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

