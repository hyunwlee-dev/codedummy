import { PropsWithClassName } from "@/types/props";
import Image from "next/image";
import clsx from "clsx";

export default function Logo({ className }: PropsWithClassName) {
  return (
    <>
      <h1 className="sr-only">CodeDummy</h1>
      <div className={clsx("absolute h-40 w-40", className)}>
        <Image
          fill
          src="/svgs/logo.svg"
          alt="codedummy logo"
          className="absolute"
        />
      </div>
    </>
  );
}
