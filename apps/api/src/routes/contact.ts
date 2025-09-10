import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../db/prisma';

const router = Router();

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  body: z.string().min(1)
});

router.post('/', async (req, res) => {
  const parsed = ContactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Invalid payload', details: parsed.error.flatten() });
  }
  const msg = await prisma.message.create({ data: parsed.data });
  res.status(201).json({ id: msg.id });
});

export default router;

