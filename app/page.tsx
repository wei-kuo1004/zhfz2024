"use client";
import Link from "next/link";
import Image from "next/image";
import ClickCounter from "@/components/clickCount";
import { useEffect, useState } from "react";
import LoadingDots from "@/components/loadingDot";
import Head from 'next/head';

export default function IndexPage() {
  const [clickCount, setClickCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 初始加載 clickCount
    const savedCount = localStorage.getItem("clickCount");
    if (savedCount) {
      setClickCount(parseInt(savedCount, 10));
    }

    const images = [
      "https://wei-kuo1004.github.io/zhfz2024/images/PRD/p1-bg.png",
      "https://wei-kuo1004.github.io/zhfz2024/images/PRD/p1-start.png",
    ];

    // 加載圖片並更新 isLoading 狀態
    Promise.all(images.map(loadImage)).then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    // 每次 clickCount 改變時更新 localStorage
    localStorage.setItem("clickCount", clickCount.toString());
  }, [clickCount]);

  const loadImage = (src: string) => {
    return new Promise<void>((resolve, reject) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => resolve();
      img.onerror = () => reject();
    });
  };

  const handleStartClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  if (isLoading) {
    return <LoadingDots />;
  }

  return (
    <>
      <Head>
        {/* 預加載背景圖片 */}
        <link
          rel="preload"
          href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/p1-bg.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/p1-start.png"
          as="image"
        />
      </Head>
      <div className="container mx-auto flex aspect-[1/1.8] min-h-screen flex-col items-center justify-center bg-p1-bg bg-cover p-6">
        <div className="w-full flex-1 p-8">
          {/* 你的內容 */}
        </div>
        <div className="w-full flex-1 p-8">
          {/* 你的內容 */}
        </div>
        <div className="w-full flex-1 p-8">
          <Link href="/secondScene" passHref onClick={handleStartClick}>
            <Image
              src="https://wei-kuo1004.github.io/zhfz2024/images/PRD/p1-start.png"
              alt="描述文字"
              width={800}
              height={600}
              priority
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
          </Link>
        </div>
        {/* 顯示本日日期及遊玩人次 */}
        <ClickCounter clickCount={clickCount} />
      </div>
    </>
  );
}
