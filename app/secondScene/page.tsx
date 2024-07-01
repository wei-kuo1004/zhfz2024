"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCharacter } from '@/store/character-store';

const SecondPage: React.FC = () => {
  const { setSelectedCharacter } = useCharacter();

  return (
      <div className="container mx-auto flex aspect-[1/1.8] min-h-screen flex-col items-center justify-center bg-p2-bg bg-cover p-6">
        <div className="w-1/2">
          <Link href="/thirdScene" passHref>
            <div onClick={() => setSelectedCharacter('character1')}>
              <Image
                src="images/PRD/p2-character1.png"
                alt="沖床工程師"
                width={400}
                height={400}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                priority
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
                    src="images/PRD/p2-character2.png"
                    alt="汽車維修工程師"
                    width={400}
                    height={400}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                    priority
                  />
                </div>
              </Link>
            </div>
            <div className="mx-2 w-1/2 flex-1">
              <Link href="/thirdScene" passHref>
                <div onClick={() => setSelectedCharacter('character3')}>
                  <Image
                    src="images/PRD/p2-character3.png"
                    alt="焊接鑄造工程師"
                    width={400}
                    height={400}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                    priority
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
