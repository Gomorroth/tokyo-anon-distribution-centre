"use client";

import { useRouter } from "next/navigation";

export default function Header(props: React.HTMLAttributes<HTMLElement> )
{
    const router = useRouter();
    return <header onClick={() => window.open("https://x.com/intent/tweet?text=東京あのん流通センター&url=https://gomorroth.github.io/tokyo-anon-distribution-centre")} {...props}/>
}