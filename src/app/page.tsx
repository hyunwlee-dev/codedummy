import Link from 'next/link';
import ContanctMe from '@app/_components/ContactMe';
import Introduce from '@app/_components/Introduce';
import About from './_components/About';
import Issues from './_components/Issues';
import Projects from './_components/Projects';

export default function Page() {
  const photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <main className="relative">
      <Introduce />
      {photos.map(id => (
        <Link className="card" key={id} href={`/issues/${id}`} passHref>
          {id}
        </Link>
      ))}
      <Issues />
      <About />
      <Projects />
      <ContanctMe />
    </main>
  );
}
