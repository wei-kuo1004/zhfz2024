"use client";
import { useCharacter } from '@/store/character-store';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import LoadingDots from '@/components/loadingDot';
import Head from 'next/head';



export default function ThirdPage() {
  const { selectedCharacter, currentLevel, setCurrentLevel, setAnswer } = useCharacter();
  const router = useRouter();
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackImage, setFeedbackImage] = useState("");
  const [data, setData] = useState<{
    bg: string,
    options: { src: string, correct: boolean }[],
    correctImage: string,
    wrongImage: string,
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentLevel > 3) {
      setCurrentLevel(1);
      router.push("/fourthScene");
    }
  }, [currentLevel, router]);

  useEffect(() => {
    const characterData = renderData();
    if (characterData) {
      setData(characterData);
    }
  }, [selectedCharacter, currentLevel]);

  useEffect(() => {
    if (data) {
      const imagesToPreload = [
        data.bg,
        ...data.options.map(option => option.src),
        data.correctImage,
        data.wrongImage
      ];

      Promise.all(imagesToPreload.map(src => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = resolve;
        });
      })).then(() => setIsLoading(false));
    }
  }, [data]);

  const images = {
    character1: {
      bg: [
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q1-bg.webp",
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q2-bg.webp",
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q3-bg.webp",
      ],
      options: [
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q1-A.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q1-B.png", correct: true },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q1-C.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q1-D.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q2-A.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q2-B.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q2-C.png", correct: true },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q2-D.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q3-A.png", correct: true },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q3-B.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q3-C.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q3-D.png", correct: false },
      ],
      correctImage: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-o.webp",
      wrongImage: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-x.webp",
    },
    character2: {
      bg: [
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q1-bg.webp",
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q2-bg.webp",
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q3-bg.webp",
      ],
      options: [
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q1-A.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q1-B.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q1-C.png", correct: true },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q1-D.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q2-A.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q2-B.png", correct: true },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q2-C.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q2-D.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q3-A.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q3-B.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q3-C.png", correct: true },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q3-D.png", correct: false },
      ],
      correctImage: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-o.webp",
      wrongImage: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-x.webp",
    },
    character3: {
      bg: [
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q1-bg.webp",
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q2-bg.webp",
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q3-bg.webp",
      ],
      options: [
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q1-A.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q1-B.png", correct: true },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q1-C.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q1-D.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q2-A.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q2-B.png", correct: true },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q2-C.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q2-D.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q3-A.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q3-B.png", correct: true },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q3-C.png", correct: false },
        { src: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q3-D.png", correct: false },
      ],
      correctImage: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-o.webp",
      wrongImage: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-x.webp",
    },
  };
  
  const renderData = () => {
    const character = images[selectedCharacter as keyof typeof images];
    const level = (currentLevel || 1) - 1;

    if (character) {
      return {
        bg: character.bg[level],
        options: character.options.slice(level * 4, level * 4 + 4),
        correctImage: character.correctImage,
        wrongImage: character.wrongImage,
      };
    } else {
      return null;
    }
  };

  const handleClick = (answer: string, isCorrect: boolean) => {
    setAnswer(currentLevel, answer);
    setShowFeedback(true);
    setFeedbackImage(isCorrect ? data!.correctImage : data!.wrongImage);

    setTimeout(() => {
      setShowFeedback(false);
      setCurrentLevel(currentLevel + 1);
    }, 2000);
  };

  if (isLoading || !data) return <LoadingDots />;

  return (
    <>
      <Head>
        {/* <!-- Preload links for character1 --> */}
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q1-bg.webp" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q2-bg.webp" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q3-bg.webp" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q1-A.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q1-B.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q1-C.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q1-D.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q2-A.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q2-B.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q2-C.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q2-D.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q3-A.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q3-B.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q3-C.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q3-D.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-o.webp" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-x.webp" as="image" />

    {/* <!-- Preload links for character2 --> */}
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q1-bg.webp" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q2-bg.webp" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q3-bg.webp" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q1-A.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q1-B.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q1-C.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q1-D.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q2-A.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q2-B.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q2-C.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q2-D.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q3-A.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q3-B.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q3-C.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q3-D.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-o.webp" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-x.webp" as="image" />

    {/* <!-- Preload links for character3 --> */}
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q1-bg.webp" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q2-bg.webp" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q3-bg.webp" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q1-A.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q1-B.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q1-C.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q1-D.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q2-A.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q2-B.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q2-C.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q2-D.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q3-A.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q3-B.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q3-C.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q3-D.png" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-o.webp" as="image" />
    <link rel="preload" href="https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-x.webp" as="image" />

    </Head>
      <div className="container relative mx-auto flex aspect-[1/1.8] min-h-screen flex-col items-center justify-end bg-cover p-2" style={{ backgroundImage: `url(${data.bg})` }}>
        {showFeedback && (
          <motion.div 
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <Image 
              src={feedbackImage} 
              alt="答題反饋" 
              width={300} 
              height={300} 
              style={{ width: 'auto', height: 'auto' }}
            />
          </motion.div>
        )}
        <div className={`mb-8 flex w-full max-w-2xl flex-col space-y-1`}>
          {data.options.map((option, index) => (
            <div 
              key={index} 
              className="flex w-full cursor-pointer justify-center" 
              onClick={() => !showFeedback && handleClick(String.fromCharCode(65 + index), option.correct)}
            >
              <div className="relative aspect-[10/2.5] w-full">
                <Image 
                  src={option.src} 
                  alt={`選項 ${String.fromCharCode(65 + index)}`} 
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
  );
}
