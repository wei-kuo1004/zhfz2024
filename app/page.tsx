"use client"
import Link from "next/link";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="container mx-auto flex aspect-[1/1.8] min-h-screen flex-col items-center justify-center bg-p1-bg  bg-cover p-6">
      <div className=" w-full flex-1 p-8">
        {/* 你的內容 */}
      </div>

      <div className=" w-full flex-1 p-8">
        {/* 你的內容 */}
      </div> 

      <div className=" w-full flex-1 p-8">
        <Link href="/secondScene" passHref>    
          <Image
            src="https://wei-kuo1004.github.io/zhfz2024/images/PRD/p1-start.png"
            alt="描述文字"
            width={800}
            height={600}
            layout="responsive"
            objectFit="cover"
          />
        </Link> 
      </div>
    </div>
  );
}
