import Image from 'next/image';

export default function Loading() {
  return (
    <Image
      className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
      width={100}
      height={100}
      src="/gifs/loading.gif"
      alt="loading"
    />
  );
}
