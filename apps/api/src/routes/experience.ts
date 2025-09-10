import { Router } from 'express';
import { prisma } from '../db/prisma';

const router = Router();

router.get('/', async (_req, res) => {
  const items = await prisma.experience.findMany({ orderBy: { startDate: 'desc' } });
  res.json(items);
});

export default router;

