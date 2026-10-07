import useSWR from 'swr';
import { Candidate } from '@/types/Candidate';
import { useShortlist } from '@/context/ShortlistContext';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function Home() {
  const { data, error } = useSWR<Candidate[]>(
    '/api/candidates?skills=react,python',
    fetcher
  );
  const { add } = useShortlist();

  if (error) return <p>Error loading.</p>;
  if (!data) return <p className="p-4">Loading…</p>;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Candidates</h1>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2">Experience</th>
            <th className="p-2">Skills</th>
            <th className="p-2">Score</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 50).map(c => (
            <tr key={c.email} className="border-b">
              <td className="p-2">{c.name}</td>
              <td className="p-2">{c.work_experiences.length} roles</td>
              <td className="p-2">{c.skills.slice(0, 3).join(', ')}</td>
              <td className="p-2">{(c as any).score.toFixed(2)}</td>
              <td className="p-2">
                <button
                  onClick={() => add(c)}
                  className="px-2 py-1 bg-blue-600 text-white rounded"
                >
                  Shortlist
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link
        href="/shortlist"
        className="fixed bottom-4 right-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        View Shortlist
      </Link>
    </main>
  );
}
