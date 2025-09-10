import { Router } from 'express';
import { prisma } from '../db/prisma';

const router = Router();

router.get('/', async (_req, res) => {
  const profile = await prisma.profile.findFirst();
  res.json(profile ?? null);
});

export default router;

