import Link from 'next/link';

export default function Page() {
  const photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="relative">
      {photos.map(id => (
        <Link className="card" key={id} href={`/issues/${id}`} passHref>
          {id}
        </Link>
      ))}
    </section>
  );
}
