import Image from "next/image";
import Menu from "@/app/ui/menu";
import Link from "next/link";
const HEIGHT_TO_WIDTH = 2400/1080;

export default function PaylahPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Menu />
      <div className={`relative overflow-hidden flex items-center justify-center flex-col w-[calc(100vw-(100vh-60px)/${HEIGHT_TO_WIDTH})] h-[calc(100vh-60px)]`}>
        <Image 
        className="img-bg"
        alt="pl_home_2"
        src="/paylah/pl_home_2.jpeg"
        width={0}
        height={0}
        sizes="100vh"
        style={{ height: '100%', width: 'auto'}}
        />     
        <div className="absolute w-[calc((100vh-60px)/2.223*0.96)] h-[calc((100vh-60px)*0.08)] bottom-[calc((100vh-60px)*0.59)] right-[calc((100vh-60px)/2.223*0.02)] flex">
          <Link href="/paylah/top_up/3" className="text-xl w-full rounded border-4 border-blue-800 bg-blue-100 opacity-50"></Link>
        </div>
        <div className="absolute animate-bounce w-[calc((100vh-60px)/2.223*0.3)] h-[calc((100vh-60px)*0.15)] bottom-[calc((100vh-60px)*0.4)] right-[calc((100vh-60px)/2.223*0.35)] flex justify-center">
          <Image
          alt="arrow"
          src="/icons/up-arrow.png"
          width={0}
          height={0}
          sizes="100vh"
          style={{ height: '100%', width: 'auto'}}/>
        </div>
        <div className="absolute w-[calc((100vh-60px)/2.223*0.5)] h-[calc((100vh-60px)*0.1)] bottom-[calc((100vh-60px)*0.32)] right-[calc((100vh-60px)/2.223*0.25)] flex bg-white border-2 border-blue-400">
          <h2 className="text-xl w-full rounded text-blue-600 justify-center p-3">Log In</h2>
        </div>
        <div className="absolute w-full h-[calc((100vh-60px)*0.03)] bottom-[calc((100vh-60px)*0.72)] right-0 bg-white flex">
          <h2 className="text-md w-full rounded text-black text-center p-1">Enter password</h2>
        </div>
        <div className="absolute w-[calc((100vh-60px)/2.223*0.22)] h-[calc((100vh-60px)*0.06)] bottom-[calc((100vh-60px)*0)] right-[calc((100vh-60px)/2.223*0.18)] flex">
          <Link href="/paylah/top_up/1" className="text-xl w-full rounded border-4 border-red-800 bg-red-100 opacity-30"></Link>
        </div>
        <div className="absolute w-[calc((100vh-60px)/2.223*0.22)] h-[calc((100vh-60px)*0.06)] bottom-[calc((100vh-60px)*0.02)] right-0 flex">
          <h2 className="text-xl w-full rounded text-red-600 justify-center p-3">Back</h2>
        </div>
      </div>
    </main>
  );
}
