"use client";
import { useCharacter } from '@/store/character-store';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

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

  const images = {
    // 沖床 答案BCA
    character1: {
      bg: [
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q1-bg.jpg",
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q2-bg.jpg",
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-Q3-bg.jpg",
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
      correctImage: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-o.jpg",
      wrongImage: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-x.jpg",
    },
    // 汽車維修 答案CBC
    character2: {
      bg: [
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q1-bg.jpg",
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q2-bg.jpg",
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-Q3-bg.jpg",
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
      correctImage: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-o.jpg",
      wrongImage: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-x.jpg",
    },
    // 鑄造 答案BBB
    character3: {
      bg: [
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q1-bg.jpg",
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q2-bg.jpg",
        "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-Q3-bg.jpg",
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
      correctImage: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-o.jpg",
      wrongImage: "https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-x.jpg",
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

  if (!data) return <div>沒有選擇角色</div>;

  return (
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
            layout="intrinsic" 
            width={300} 
            height={300} 
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
                layout="fill"
                objectFit="cover"
                className={`transition-transform duration-200 hover:scale-105 ${showFeedback ? 'opacity-50' : ''}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}