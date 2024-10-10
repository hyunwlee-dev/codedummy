import Image from "next/image";
import { getUserInfo } from "@apis/github";
import { withAuth } from "@utils/withAuth";
import { info } from "@constants/info";

export default async function Header() {
  const whoami = await withAuth((options) => getUserInfo(info.owner, options));
  return (
    <header>
      <div>
        <p>{whoami.login}</p>
      </div>

      <Image width={30} height={30} src={whoami.avatar_url} alt="whoami" />

      <span className="text-xl">{whoami.login}</span>
    </header>
  );
}
