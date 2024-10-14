import Image from 'next/image';
import { getUserInfo } from '@apis/github';
import { info } from '@constants/info';
import { withAuth } from '@utils/withAuth';
import Logo from '../Logo';

export default async function Header() {
  const whoami = await withAuth(options => getUserInfo(info.owner, options));
  return (
    <header className="relative">
      <Logo className="left-0 top-0" />
      <div>
        <p>{whoami.login}</p>
      </div>
      <Image width={30} height={30} src={whoami.avatar_url} alt="whoami" />
      <span className="text-xl">{whoami.login}</span>
    </header>
  );
}
