import { useShortlist } from '@/context/ShortlistContext';
import Link from 'next/link';

export default function Shortlist() {
  const { list, remove } = useShortlist();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your 5 hires ({list.length}/5)</h1>

      {list.length === 0 && <p>No one shortlisted yet.</p>}

      <ul>
        {list.map(c => (
          <li key={c.email} className="mb-4 border p-4 rounded">
            <h2 className="font-semibold">{c.name}</h2>
            <p>
              {c.location} • {c.skills.slice(0, 5).join(', ')}
            </p>
            <button
              onClick={() => remove(c.email)}
              className="mt-2 px-2 py-1 bg-red-600 text-white rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <Link href="/" className="block mt-8 text-blue-600 underline">
        ← Back to list
      </Link>
    </main>
  );
}
