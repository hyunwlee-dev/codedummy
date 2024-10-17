import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '@components/Header';
import RouterAnimation from '@components/RouterAnimation';
import '@styles/globals.css';

const pretendardFont = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  title: 'CodeDummy',
  description: 'CodeDummy 개인 블로그',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html className="scrollbar-hide">
      <body className={clsx(pretendardFont.className, 'size-full')}>
        <Header />
        <RouterAnimation>{children}</RouterAnimation>
        {modal}
        <div id="modal-root" />
      </body>
    </html>
  );
}
