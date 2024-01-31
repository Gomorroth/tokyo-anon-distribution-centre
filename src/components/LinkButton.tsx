"use client";
export default function LinkButton(props: React.ButtonHTMLAttributes<HTMLButtonElement> & {href: string})
{
    return <button  onClick={() => window.open(props.href)} {...props}/>
}