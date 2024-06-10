import Link from 'next/link';
import Image from "next/image";
import Menu from "@/app/ui/menu"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Menu />
      <div className="flex flex-col w-full h-full p-2">
        <div className="w-full justify-center p-5">
          <h1 className="font-bold text-xl">Choose an app.</h1>
        </div>
        <Link className="border-4 border-green-700 bg-green-500 p-5 m-5 rounded-lg" key="whatsapp" href="/whatsapp">
          <h2 className="text-xl text-white text-center">WhatsApp</h2>
        </Link>
        <Link className="border-4 border-blue-700 bg-blue-500 p-5 m-5 rounded-lg" key="paylah" href="/paylah">
          <h2 className="text-xl text-white text-center">PayLah!</h2>
        </Link>
        <Link className="border-4 border-red-700 bg-red-500 p-5 m-5 rounded-lg" key="singpass" href="/singpass">
          <h2 className="text-xl text-white text-center">Singpass</h2>
        </Link>
      </div>
    </main>
  );
}
