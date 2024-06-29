"use client";
import { useCharacter } from '@/store/character-store';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
    character1: {
      bg: [
        "/images/PRD/C1/C1-Q1-bg.jpg",
        "/images/PRD/C1/C1-Q2-bg.jpg",
        "/images/PRD/C1/C1-Q3-bg.jpg",
      ],
      options: [
        { src: "/images/PRD/C1/C1-Q1-A.png", correct: true },
        { src: "/images/PRD/C1/C1-Q2-A.png", correct: false },
        { src: "/images/PRD/C1/C1-Q3-A.png", correct: false },
        { src: "/images/PRD/C1/C1-Q1-B.png", correct: false },
        { src: "/images/PRD/C1/C1-Q2-B.png", correct: true },
        { src: "/images/PRD/C1/C1-Q3-B.png", correct: false },
        { src: "/images/PRD/C1/C1-Q1-C.png", correct: false },
        { src: "/images/PRD/C1/C1-Q2-C.png", correct: false },
        { src: "/images/PRD/C1/C1-Q3-C.png", correct: true },
        { src: "/images/PRD/C1/C1-Q1-D.png", correct: false },
        { src: "/images/PRD/C1/C1-Q2-D.png", correct: false },
        { src: "/images/PRD/C1/C1-Q3-D.png", correct: false },
      ],
      correctImage: "/images/PRD/C1/C1-o.jpg",
      wrongImage: "/images/PRD/C1/C1-x.jpg",
    },
    character2: {
      bg: [
        "/images/PRD/C2/C2-Q1-bg.jpg",
        "/images/PRD/C2/C2-Q2-bg.jpg",
        "/images/PRD/C2/C2-Q3-bg.jpg",
      ],
      options: [
        { src: "/images/PRD/C2/C2-Q1-A.png", correct: true },
        { src: "/images/PRD/C2/C2-Q2-A.png", correct: false },
        { src: "/images/PRD/C2/C2-Q3-A.png", correct: false },
        { src: "/images/PRD/C2/C2-Q1-B.png", correct: false },
        { src: "/images/PRD/C2/C2-Q2-B.png", correct: true },
        { src: "/images/PRD/C2/C2-Q3-B.png", correct: false },
        { src: "/images/PRD/C2/C2-Q1-C.png", correct: false },
        { src: "/images/PRD/C2/C2-Q2-C.png", correct: false },
        { src: "/images/PRD/C2/C2-Q3-C.png", correct: true },
        { src: "/images/PRD/C2/C2-Q1-D.png", correct: false },
        { src: "/images/PRD/C2/C2-Q2-D.png", correct: false },
        { src: "/images/PRD/C2/C2-Q3-D.png", correct: false },
      ],
      correctImage: "/images/PRD/C2/C2-o.jpg",
      wrongImage: "/images/PRD/C2/C2-x.jpg",
    },
    character3: {
      bg: [
        "/images/PRD/C3/C3-Q1-bg.jpg",
        "/images/PRD/C3/C3-Q2-bg.jpg",
        "/images/PRD/C3/C3-Q3-bg.jpg",
      ],
      options: [
        { src: "/images/PRD/C3/C3-Q1-A.png", correct: true },
        { src: "/images/PRD/C3/C3-Q2-A.png", correct: false },
        { src: "/images/PRD/C3/C3-Q3-A.png", correct: false },
        { src: "/images/PRD/C3/C3-Q1-B.png", correct: false },
        { src: "/images/PRD/C3/C3-Q2-B.png", correct: true },
        { src: "/images/PRD/C3/C3-Q3-B.png", correct: false },
        { src: "/images/PRD/C3/C3-Q1-C.png", correct: false },
        { src: "/images/PRD/C3/C3-Q2-C.png", correct: false },
        { src: "/images/PRD/C3/C3-Q3-C.png", correct: true },
        { src: "/images/PRD/C3/C3-Q1-D.png", correct: false },
        { src: "/images/PRD/C3/C3-Q2-D.png", correct: false },
        { src: "/images/PRD/C3/C3-Q3-D.png", correct: false },
      ],
      correctImage: "/images/PRD/C3/C3-o.jpg",
      wrongImage: "/images/PRD/C3/C3-x.jpg",
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
    <div className="container mx-auto flex aspect-[1/1.8] min-h-screen flex-col items-center justify-end bg-cover p-2 relative" style={{ backgroundImage: `url(${data.bg})` }}>
      {showFeedback && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Image 
            src={feedbackImage} 
            alt="答題反饋" 
            layout="intrinsic" 
            width={300} 
            height={300} 
          />
        </div>
      )}
      <div className={`flex flex-col mb-8 w-full max-w-2xl space-y-1 ${showFeedback ? 'pointer-events-none' : ''}`}>
        {data.options.map((option, index) => (
          <div key={index} className="cursor-pointer w-full flex justify-center" onClick={() => handleClick(String.fromCharCode(65 + index), option.correct)}>
            <div className="relative w-full aspect-[10/2.5]">
              <Image 
                src={option.src} 
                alt={`選項 ${String.fromCharCode(65 + index)}`} 
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-200"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
