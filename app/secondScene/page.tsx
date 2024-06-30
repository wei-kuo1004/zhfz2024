"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCharacter } from '@/store/character-store';
import LoadingDots from '@/components/loadingDot';


const SecondPage: React.FC = () => {
  const { setSelectedCharacter } = useCharacter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = [
      "https://wei-kuo1004.github.io/zhfz2024/images/PRD/p2-bg.png",
      "https://wei-kuo1004.github.io/zhfz2024/images/PRD/p2-character1.png",
      "https://wei-kuo1004.github.io/zhfz2024/images/PRD/p2-character2.png",
      "https://wei-kuo1004.github.io/zhfz2024/images/PRD/p2-character3.png",
    ];
    
    Promise.all(images.map(src => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.src = src;
        img.onload = resolve;
      });
    })).then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <LoadingDots />;
  }

  return (
      <div className="container mx-auto flex aspect-[1/1.8] min-h-screen flex-col items-center justify-center bg-p2-bg bg-cover p-6">
        <div className="w-1/2">
          <Link href="/thirdScene" passHref>
            <div onClick={() => setSelectedCharacter('character1')}>
              <Image
                src="https://wei-kuo1004.github.io/zhfz2024/images/PRD/p2-character1.png"
                alt="沖床工程師"
                width={400}
                height={400}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
          </Link>
        </div>
        <div className="w-full p-8">
          <div className="flex w-full flex-1 flex-row">
            <div className="mx-2 w-1/2 flex-1">
              <Link href="/thirdScene" passHref>
                <div onClick={() => setSelectedCharacter('character2')}>
                  <Image
                    src="https://wei-kuo1004.github.io/zhfz2024/images/PRD/p2-character2.png"
                    alt="汽車維修工程師"
                    width={400}
                    height={400}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                  />
                </div>
              </Link>
            </div>
            <div className="mx-2 w-1/2 flex-1">
              <Link href="/thirdScene" passHref>
                <div onClick={() => setSelectedCharacter('character3')}>
                  <Image
                    src="https://wei-kuo1004.github.io/zhfz2024/images/PRD/p2-character3.png"
                    alt="焊接鑄造工程師"
                    width={400}
                    height={400}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SecondPage;
