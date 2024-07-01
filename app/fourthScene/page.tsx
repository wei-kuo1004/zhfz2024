"use client";
import { useCharacter } from '@/store/character-store';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const backgrounds: Record<'character1' | 'character2' | 'character3', string> = {
  character1: 'images/PRD/C1/C1-F-bg.webp',
  character2: 'images/PRD/C2/C2-F-bg.webp',
  character3: 'images/PRD/C3/C3-F-bg.webp',
};

const FourthPage = () => {
  const { selectedCharacter } = useCharacter();
  const [character, setCharacter] = useState<'character1' | 'character2' | 'character3'>('character1');

  useEffect(() => {
    if (selectedCharacter) {
      setCharacter(selectedCharacter as 'character1' | 'character2' | 'character3');
    }
  }, [selectedCharacter]);

  const backgroundUrl = backgrounds[character];

  return (
    <>
      <Head>
        <title>Fourth Page</title>
      </Head>
      <div
        className="container mx-auto flex aspect-[1/1.8] min-h-screen flex-col items-center justify-center bg-p1-bg bg-cover p-6"
        style={{ backgroundImage: `url(${backgroundUrl})`, backgroundSize: 'cover' }}
      >
        <div className="grow"></div> {/* 占位符，讓按鈕在底部 */}
        <div className="flex items-end justify-center gap-4 pb-4">
          <Link href="/">
            <Image
              src="images/PRD/back.png"
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
};

export default FourthPage;
