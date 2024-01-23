import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <div className="hover:scale-105 duration-300 ease-in-out">
        <img className="" src="/tokyo.jpg" alt="anon"/>
      </div>
    </main>
  );
}
