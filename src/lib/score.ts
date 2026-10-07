import { Candidate } from '@/types/Candidate';

export const yearsExperience = (c: Candidate) => c.work_experiences.length;

export const skillMatch = (c: Candidate, target: string[]) =>
  target.filter(s => c.skills.includes(s)).length / (target.length || 1);

export const salaryScore = (c: Candidate, max = 150_000) => {
  const raw = Number(
    c.annual_salary_expectation['full-time']?.replace(/[$,]/g, '') || 0
  );
  return 1 - Math.min(raw / max, 1);
};

export const totalScore = (c: Candidate, targetSkills: string[]) => {
  const w = { skill: 0.5, exp: 0.3, salary: 0.2 };
  return (
    w.skill * skillMatch(c, targetSkills) +
    w.exp * Math.min(yearsExperience(c), 10) / 10 +
    w.salary * salaryScore(c)
  );
};
