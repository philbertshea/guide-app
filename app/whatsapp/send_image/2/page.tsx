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
        alt="whatsapp_home"
        src="/whatsapp/wa_send_image_2.jpg"
        width={0}
        height={0}
        sizes="100vh"
        style={{ height: '100%', width: 'auto'}}
        />     
        <div className="absolute w-[calc((100vh-60px)/2.223*0.15)] h-[calc((100vh-60px)*0.08)] bottom-[calc((100vh-60px)*0.05)] right-[calc((100vh-60px)/2.223*0.25)] flex">
          <Link href="/whatsapp/send_image/3" className="text-xl w-full rounded border-4 border-blue-800 bg-blue-100 opacity-50"></Link>
        </div>
        <div className="absolute animate-bounce w-[calc((100vh-60px)/2.223*0.2)] h-[calc((100vh-60px)*0.1)] bottom-[calc((100vh-60px)*0.12)] right-[calc((100vh-60px)/2.223*0.22)] flex justify-center">
          <Image
          alt="arrow"
          src="/icons/down-arrow.png"
          width={0}
          height={0}
          sizes="100vh"
          style={{ height: '100%', width: 'auto'}}/>
        </div>
        <div className="absolute w-[calc((100vh-60px)/2.223*0.5)] h-[calc((100vh-60px)*0.2)] bottom-[calc((100vh-60px)*0.25)] right-[calc((100vh-60px)/2.223*0.1)] flex bg-white border-2 border-blue-400">
          <h2 className="text-xl w-full rounded text-blue-600 justify-center p-3">Attach a file</h2>
        </div>
      </div>
    </main>
  );
}