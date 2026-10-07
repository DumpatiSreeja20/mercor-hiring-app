import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { Candidate } from '@/types/Candidate';
import { totalScore } from '@/lib/score';

const dataPath = path.join(process.cwd(), 'data', 'form-submissions.json');
const raw: Candidate[] = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const skillsParam = (req.query.skills as string) || '';
  const targetSkills = skillsParam.split(',').filter(Boolean);

  const ranked = raw
    .map(c => ({ ...c, score: totalScore(c, targetSkills) }))
    .sort((a, b) => (b as any).score - (a as any).score);

  res.status(200).json(ranked);
}
