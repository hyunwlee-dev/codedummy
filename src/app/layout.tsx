import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendardFont = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
});

export const metadata: Metadata = {
  title: "CodeDummy",
  description: "CodeDummy 개인 블로그",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html>
      <body className={pretendardFont.className}>
        {children}
        {modal}
        <div id="modal-root" />
      </body>
    </html>
  );
}
