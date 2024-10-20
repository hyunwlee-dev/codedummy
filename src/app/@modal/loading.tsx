import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-24 aspect-video">
      <Image
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src="/gifs/loading.gif"
        alt="loading"
      />
    </div>
  );
}
