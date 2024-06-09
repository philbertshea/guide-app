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
        alt="whatsapp_searchmsg_6"
        src="/whatsapp/wa_searchmsg_6.jpeg"
        width={0}
        height={0}
        sizes="100vh"
        style={{ height: '100%', width: 'auto'}}
        />     
        <div className="absolute w-[calc((100vh-60px)/2.223*0.15)] h-[calc((100vh-60px)*0.08)] bottom-[calc((100vh-60px)*0.9)] right-[calc((100vh-60px)/2.223*0.15)] flex">
          <Link href="/whatsapp/search_msg/7" className="text-xl w-full rounded border-4 border-blue-800 bg-blue-100 opacity-50"></Link>
        </div>
        <div className="absolute animate-bounce w-[calc((100vh-60px)/2.223*0.2)] h-[calc((100vh-60px)*0.1)] bottom-[calc((100vh-60px)*0.75)] right-[calc((100vh-60px)/2.223*0.1)] flex justify-center">
          <Image
          alt="arrow"
          src="/icons/up-arrow.png"
          width={0}
          height={0}
          sizes="100vh"
          style={{ height: '100%', width: 'auto'}}/>
        </div>
        <div className="absolute w-[calc((100vh-60px)/2.223*0.8)] h-[calc((100vh-60px)*0.2)] bottom-[calc((100vh-60px)*0.56)] right-0 flex bg-white border-2 border-blue-400">
          <h2 className="text-xl w-full rounded text-blue-600 justify-center p-3">Find Previous message matching term</h2>
        </div>
        <div className="absolute w-full h-[calc((100vh-60px)*0.05)] bottom-[calc((100vh-60px)*0.22)] right-0 bg-white flex">
          <h2 className="text-md w-full rounded text-black text-center p-1">Latest Search Result</h2>
        </div>
        <div className="absolute w-[calc((100vh-60px)/2.223*0.22)] h-[calc((100vh-60px)*0.06)] bottom-[calc((100vh-60px)*0)] right-[calc((100vh-60px)/2.223*0.18)] flex">
          <Link href="/whatsapp/search_msg/5" className="text-xl w-full rounded border-4 border-red-800 bg-red-100 opacity-30"></Link>
        </div>
        <div className="absolute w-[calc((100vh-60px)/2.223*0.22)] h-[calc((100vh-60px)*0.06)] bottom-[calc((100vh-60px)*0.02)] right-0 flex">
          <h2 className="text-xl w-full rounded text-red-600 justify-center p-3">Back</h2>
        </div>
      </div>
    </main>
  );
}
