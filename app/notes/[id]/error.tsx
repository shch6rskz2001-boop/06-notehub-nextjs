'use client';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function NoteDetailsError({ error, reset }: ErrorProps) {
  return (
    <div>
      <p>Could not fetch note details. {error.message}</p>
      {/* Кнопка використовує reset, і ESLint більше не свариться */}
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}



