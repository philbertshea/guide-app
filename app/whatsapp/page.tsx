import Image from "next/image";
import Menu from "@/app/ui/menu";
import Link from "next/link";
const HEIGHT_TO_WIDTH = 2400/1080;

export default function WhatsappPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Menu />
      <div className="flex flex-col w-full h-full p-2">
        <div className="w-full justify-center p-5">
          <h1 className="font-bold text-xl">Choose a guide.</h1>
        </div>
        <Link className="border-4 border-green-700 bg-green-500 p-5 m-5 rounded-lg" key="send_image" href="/whatsapp/send_image/1">
          <h2 className="text-xl text-white text-center">WhatsApp: Send Image</h2>
        </Link>
        <Link className="border-4 border-green-700 bg-green-500 p-5 m-5 rounded-lg" key="send_location" href="/whatsapp/send_location/1">
          <h2 className="text-xl text-white text-center">WhatsApp: Send Location</h2>
        </Link>
      </div>
    </main>
  );
}
