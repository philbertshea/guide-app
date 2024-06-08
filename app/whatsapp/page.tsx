import Image from "next/image";
import Menu from "@/app/ui/menu";
const HEIGHT_TO_WIDTH = 2400/1080;

export default function WhatsappPage() {
  
  return (
    <main className="flex flex-col items-center justify-center">
      <Menu />
      <div className={`relative overflow-hidden flex items-center justify-center flex-col w-[calc(100vw-(100vh-60px)/${HEIGHT_TO_WIDTH})] h-[calc(100vh-60px)]`}>
        <Image 
        className="img-bg"
        alt="whatsapp_home"
        src="/whatsapp/wa_home.jpeg"
        width={0}
        height={0}
        sizes="100vh"
        style={{ height: '100%', width: 'auto'}}
        />     
        <div className="absolute w-full h-[calc((100vh-60px)*0.09)] bottom-[calc((100vh-60px)*0.81)] right-0 flex">
          <button className="text-xl w-full rounded border-blue-200"></button>
        </div>
        <div className="absolute w-full h-[calc((100vh-60px)*0.09)] bottom-[calc((100vh-60px)*0.81)] right-0 flex">
          <h2 className="text-xl w-full rounded text-blue-600"></h2>
        </div>
      </div>
    </main>
  );
}
