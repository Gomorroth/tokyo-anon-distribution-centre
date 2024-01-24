import Link from "next/link";
import { JSDOM } from "jsdom"

export type Props = {
    url: string,
    className?: string
}

export default async function BoothItem(props: Props)
{
    const response = await fetch(props.url);
    const dom = new JSDOM(await response.text());
    const ogps = Array.from(dom.window.document.head.children).filter(x => x.getAttribute("property")?.startsWith("og:")).map(x => ({property: x.getAttribute("property"), content: x.getAttribute("content")}));
    const image = ogps.find(x => x.property == "og:image")?.content;
    const title = ogps.find(x => x.property == "og:title")?.content;
    return (
        <Link href={props.url} className={`flex m-8 w-3/8 max-w-xl flex-col rounded-xl border-2 shadow-lg will-change-transform hover:scale-[101%] duration-200 ${props.className}`}>
            <div className="flex p-2 w-full aspect-square">
                <div className="w-full h-full bg-contain rounded-xl" style={{backgroundImage: `url(${image})`}}/>
            </div>
            <p className="px-4 py-2 overflow-hidden w-full 
                         text-center md:text-lg text-ellipsis">
                {title}
            </p>
        </Link>
    );
}