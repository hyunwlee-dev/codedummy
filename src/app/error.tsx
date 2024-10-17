'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h1>Error Page</h1>
      <button onClick={() => reset()}>다시 요청 시도해보기</button>
    </div>
  );
}
