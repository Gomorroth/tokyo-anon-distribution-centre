import type { Metadata } from "next";
import { Inter, M_PLUS_2 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const mplus2 = M_PLUS_2({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "東京あのん流通センター (TOKYO ANON DISTRIBUTION CENTRE)",
  description: "東京あのん流通センター",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className=" overflow-clip" lang="ja">
      <body className={`${inter.className} w-screen h-screen flex flex-col`}>
        <header className={`flex flex-row h-[65px] w-full flex-grow-0 border-b-[1px] border-[#EFEFEF] items-center
                          text-2xl ${mplus2.className}
                          box-content`}>
          <p className="w-10 h-10 text-3xl bg-main border-main border-2 ">
            <img className="w-full h-full" src="/anon.png"/>
          </p>
          <p className="ml-1 text-main -tracking-[0.15rem] text-clip">東京あのん流通センター</p>
        </header>
        {children}
      </body>
    </html>
  );
}
