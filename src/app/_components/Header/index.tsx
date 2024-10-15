import Logo from '@app/_components/Logo';
import Navigation from '@app/_components/Navigation';

export default async function Header() {
  return (
    <header className="relative tablet:mx-auto tablet:w-[500px] laptop:w-[800px] desktop:w-[1100px]">
      <Logo className="left-3 -top-1 tablet:left-0 tablet:-top-4 desktop:-top-11" />
      <Navigation />
    </header>
  );
}
