import Link from 'next/link';
import Image from "next/image";
import Menu from "@/app/ui/menu"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Menu />
      <div className="flex flex-row w-full h-full p-2">
        <div className="w-full place-content-center justify-center p-5">
          Select one guide to access.
        </div>
        <div className="flex flex-col h-full w-full place-content-center justify-center p-5">
          <Link className="bg-green-500 text-xl text-white" key="whatsapp" href="/whatsapp">WhatsApp</Link>
          <Link className="bg-green-500 text-xl text-white" key="whatsapp" href="/whatsapp">Facebook</Link>
          <Link className="bg-green-500 text-xl text-white" key="whatsapp" href="/whatsapp">Instagram</Link>
        </div>
      </div>
    </main>
  );
}
