import Image from "next/image";
import Menu from "@/app/ui/menu";
import Link from "next/link";
const HEIGHT_TO_WIDTH = 2400/1080;

export default function SingpassPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Menu />
      <div className="flex flex-col w-full h-full p-2">
        <div className="w-full justify-center p-5">
          <h1 className="font-bold text-xl">Choose a Singpass guide.</h1>
        </div>
        <Link className="border-4 border-green-700 bg-green-500 p-2 m-1 rounded-lg" key="take_pic" href="/singpass/show_id/1">
          <h2 className="text-xl text-white text-center">Show ID Card</h2>
        </Link>
        <Link className="border-4 border-blue-700 bg-blue-100 p-1 m-1 rounded-lg" key="main_menu" href="/">
          <h2 className="text-xl text-black text-center">Main Menu</h2>
        </Link>
      </div>
    </main>
  );
}
