import Image from "next/image";

export default function Loading() {
  return (
    <Image width={150} height={75} src="/gifs/loading.gif" alt="loading" />
  );
}
