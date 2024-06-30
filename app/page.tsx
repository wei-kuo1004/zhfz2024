"use client"
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';


export default function IndexPage() {
  return (

    <>
    <Head>
      {/* 預加載背景圖片 */}
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/p1-bg.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/p1-start.png" as="image" />

      {/* 第二頁 */}
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/p2-bg.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/p2-character1.png" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/p2-character2.png" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/p2-character3.png" as="image" />
      
      {/* 第三頁 */}
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q1-bg.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q2-bg.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q3-bg.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q1-bg.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q2-bg.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q3-bg.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q1-bg.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q2-bg.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q3-bg.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-o.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-x.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-o.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-x.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-o.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-x.jpg" as="image" />
      {/* 第四頁 */}
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-F-bg.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-F-bg.jpg" as="image" />
      <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-F-bg.jpg" as="image" />
    </Head>

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
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            />
          </Link> 
        </div>
      </div>
    </>
  );
}
