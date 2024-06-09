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
          <h1 className="font-bold text-xl">Choose a WhatsApp guide.</h1>
        </div>
        <div className="w-full justify-center pt-5 pb-2">
          <h1 className="font-bold text-xl text-center">Start a Conversation</h1>
        </div>
        <Link className="border-4 border-green-700 bg-green-500 p-2 m-1 rounded-lg" key="new_chat" href="/whatsapp/new_chat/1">
          <h2 className="text-xl text-white text-center">Start a New Chat</h2>
        </Link>
        <Link className="border-4 border-green-700 bg-green-500 p-2 m-1 rounded-lg" key="search_msg" href="/whatsapp/search_msg/1">
          <h2 className="text-xl text-white text-center">Search Contact/Group and Message</h2>
        </Link>
        <div className="w-full justify-center pt-5 pb-2">
          <h1 className="font-bold text-xl text-center">Attach Multimedia Content</h1>
        </div>
        <Link className="border-4 border-green-700 bg-green-500 p-2 m-1 rounded-lg" key="take_pic" href="/whatsapp/take_pic/1">
          <h2 className="text-xl text-white text-center">Take Photo, Mark Up and Send</h2>
        </Link>
        <Link className="border-4 border-green-700 bg-green-500 p-2 m-1 rounded-lg" key="send_image" href="/whatsapp/send_image/1">
          <h2 className="text-xl text-white text-center">Send Photo from Gallery</h2>
        </Link>
        <Link className="border-4 border-green-700 bg-green-500 p-2 m-1 rounded-lg" key="send_location" href="/whatsapp/send_location/1">
          <h2 className="text-xl text-white text-center">Send Location</h2>
        </Link>        
        <div className="w-full justify-center pt-5 pb-2">
          <h1 className="font-bold text-xl text-center">Message Related</h1>
        </div>
        <Link className="border-4 border-green-700 bg-green-500 p-2 m-1 rounded-lg" key="edit_msg" href="/whatsapp/edit_msg/1">
          <h2 className="text-xl text-white text-center">Edit Message</h2>
        </Link>
        <Link className="border-4 border-green-700 bg-green-500 p-2 m-1 rounded-lg" key="react_msg" href="/whatsapp/react_msg/1">
          <h2 className="text-xl text-white text-center">React Message</h2>
        </Link>
        <Link className="border-4 border-green-700 bg-green-500 p-2 m-1 rounded-lg" key="delete_msg" href="/whatsapp/delete_msg/1">
          <h2 className="text-xl text-white text-center">Delete Message</h2>
        </Link>
        <Link className="border-4 border-green-700 bg-green-500 p-2 m-1 rounded-lg" key="delete_msg" href="/whatsapp/msg_info/1">
          <h2 className="text-xl text-white text-center">Message Information</h2>
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
