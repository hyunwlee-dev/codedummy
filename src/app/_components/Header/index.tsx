import Image from 'next/image';
import type { UserType } from '@/types/github';
import { getUserInfo } from '@apis/github';
import Logo from '@app/_components/Logo';
import { info } from '@constants/info';
import { withAuth } from '@utils/withAuth';

export default async function Header() {
  const whoami = await withAuth<UserType>(options =>
    getUserInfo(info.owner, options),
  );
  return (
    <header className="relative">
      <Logo className="left-0 top-0" />
      <Image width={30} height={30} src={whoami.avatar_url} alt="whoami" />
      <span className="text-xl">{whoami.login}</span>
    </header>
  );
}
