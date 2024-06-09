import Image from "next/image";
import Menu from "@/app/ui/menu";
import Link from "next/link";
const HEIGHT_TO_WIDTH = 2400/1080;

export default function WhatsappPage() {
  
  return (
    <main className="flex flex-col items-center justify-center">
      <Menu />
      <div className={`relative overflow-hidden flex items-center justify-center flex-col w-[calc(100vw-(100vh-60px)/${HEIGHT_TO_WIDTH})] h-[calc(100vh-60px)]`}>
        <Image 
        className="img-bg"
        alt="whatsapp_searchmsg_7"
        src="/whatsapp/wa_searchmsg_7.jpeg"
        width={0}
        height={0}
        sizes="100vh"
        style={{ height: '100%', width: 'auto'}}
        />
        <div className="absolute w-[calc((100vh-60px)/2.223*0.8)] h-[calc((100vh-60px)*0.3)] bottom-[calc((100vh-60px)*0.2)] right-[calc((100vh-60px)/2.223*0.1)] flex flex-col bg-white border-2 border-blue-400">
          <h2 className="text-md sm:text-xl p-1 sm:p-3 w-full rounded text-blue-600 justify-center">Search successful!</h2>
          <Link href="/whatsapp" className="text-md sm:text-xl m-1 sm:m-2 p-1 sm:p-4 rounded border-4 border-blue-500 bg-blue-300 text-center">Other WhatsApp Tutorials</Link>
          <Link href="/" className="text-md sm:text-xl m-1 sm:m-2 p-1 sm:p-4 rounded border-4 border-blue-500 bg-blue-300 text-center">Main Menu</Link>
        </div>
        <div className="absolute w-[calc((100vh-60px)/2.223*0.22)] h-[calc((100vh-60px)*0.06)] bottom-[calc((100vh-60px)*0)] right-[calc((100vh-60px)/2.223*0.18)] flex">
          <Link href="/whatsapp/search_msg/6" className="text-xl w-full rounded border-4 border-red-800 bg-red-100 opacity-30"></Link>
        </div>
        <div className="absolute w-full h-[calc((100vh-60px)*0.05)] bottom-[calc((100vh-60px)*0.72)] right-0 bg-white flex">
          <h2 className="text-md w-full rounded text-black text-center p-1">Previous Search Result</h2>
        </div>
        <div className="absolute w-[calc((100vh-60px)/2.223*0.3)] h-[calc((100vh-60px)*0.05)] bottom-[calc((100vh-60px)*0.92)] right-[calc((100vh-60px)/2.223*0.25)] bg-white flex">
          <h2 className="text-md w-full rounded text-black text-center p-1">Previous</h2>
        </div>
        <div className="absolute w-[calc((100vh-60px)/2.223*0.2)] h-[calc((100vh-60px)*0.05)] bottom-[calc((100vh-60px)*0.88)] right-0 bg-white flex">
          <h2 className="text-md w-full rounded text-black text-center p-1">Next</h2>
        </div>
        <div className="absolute w-[calc((100vh-60px)/2.223*0.22)] h-[calc((100vh-60px)*0.06)] bottom-[calc((100vh-60px)*0.02)] right-0 flex">
          <h2 className="text-xl w-full rounded text-red-600 justify-center p-3">Back</h2>
        </div>
      </div>
    </main>
  );
}
