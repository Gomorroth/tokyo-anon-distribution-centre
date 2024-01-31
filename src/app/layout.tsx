import type { Metadata } from "next";
import { Inter, M_PLUS_2 } from "next/font/google";
import "./globals.css";
import { useRouter } from "next/navigation";
import LinkButton from "@/components/LinkButton";

const inter = Inter({ subsets: ["latin"] });
const mplus2 = M_PLUS_2({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "東京あのん流通センター (TOKYO ANON DISTRIBUTION CENTRE)",
  description: "東京あのん流通センター",
  icons: "anon.png",
  openGraph: {
    title: "東京あのん流通センター (TOKYO ANON DISTRIBUTION CENTRE)",
    description: "東京あのん流通センター",
    images: "https://gomorroth.github.io/tokyo-anon-distribution-centre/anon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className=" overflow-clip" lang="ja">
      <body className={`${inter.className} max-w-screen-lg h-screen mx-auto flex flex-col`}>
        <header className={`flex flex-row h-[65px] w-full flex-grow-0 border-b-[1px] border-[#EFEFEF] items-center
                          text-2xl ${mplus2.className}
                          box-content`}>
          <div className="hover:scale-[102%] duration-200 will-change-transform flex flex-row">
            <p className="w-10 h-10 text-3xl bg-main border-main border-2 ">
              <img className="w-full h-full" src="anon.png"/>
            </p>
            <LinkButton href="https://x.com/intent/tweet?text=東京あのん流通センター&url=https://gomorroth.github.io/tokyo-anon-distribution-centre" className="ml-1 text-main -tracking-[0.15rem] text-clip my-auto">東京あのん流通センター</LinkButton>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
