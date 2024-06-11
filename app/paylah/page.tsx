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
          <h1 className="font-bold text-xl">Choose a DBS PayLah! guide.</h1>
        </div>
        <div className="w-full justify-center pt-5 pb-2">
          <h1 className="font-bold text-xl text-center">Make a Payment</h1>
        </div>
        <Link className="border-4 border-green-700 bg-green-500 p-2 m-1 rounded-lg" key="pay_num" href="/paylah/pay_num/1">
          <h2 className="text-xl text-white text-center">Pay via Phone Number to PayLah! User</h2>
        </Link>
        <Link className="border-4 border-green-700 bg-green-500 p-2 m-1 rounded-lg" key="pay_qr" href="/paylah/pay_qr/1">
          <h2 className="text-xl text-white text-center">Pay via QR to PayLah! User</h2>
        </Link>
        <Link className="border-4 border-green-700 bg-green-500 p-2 m-1 rounded-lg" key="shop_qr" href="/paylah/shop_qr/1">
          <h2 className="text-xl text-white text-center">Pay via QR to PayLah! Merchant</h2>
        </Link>
        <Link className="border-4 border-green-700 bg-green-500 p-2 m-1 rounded-lg" key="show_qr" href="/paylah/show_qr/1">
          <h2 className="text-xl text-white text-center">Show my QR</h2>
        </Link>
        <Link className="border-4 border-green-700 bg-green-500 p-2 m-1 rounded-lg" key="top_up" href="/paylah/top_up/1">
          <h2 className="text-xl text-white text-center">Top Up to Account</h2>
        </Link>
        <Link className="border-4 border-green-700 bg-green-500 p-2 m-1 rounded-lg" key="trans_acc" href="/paylah/trans_acc/1">
          <h2 className="text-xl text-white text-center">Transfer to Account</h2>
        </Link>
        
        <div className="w-full justify-center pt-5 pb-2">
          <h1 className="font-bold text-xl text-center">Main Menu</h1>
        </div>
        <Link className="border-4 border-blue-700 bg-blue-100 p-1 m-1 rounded-lg" key="main_menu" href="/">
          <h2 className="text-xl text-black text-center">Main Menu</h2>
        </Link>
      </div>
    </main>
  );
}
