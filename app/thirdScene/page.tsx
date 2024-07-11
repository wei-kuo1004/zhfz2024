"use client";
import { useCharacter } from '@/store/character-store';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Head from 'next/head';
import OptionsList from '@/components/optionsList';

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
  }, [currentLevel, router, setCurrentLevel]);

  useEffect(() => {
    const characterData = renderData();
    if (characterData) {
      setData(characterData);
    }
  }, [selectedCharacter, currentLevel]);

  const images = {
    character1: {
      bg: [
        "images/PRD/C1/C1-Q1-bg.png",
        "images/PRD/C1/C1-Q2-bg.png",
        "images/PRD/C1/C1-Q3-bg.png",
      ],
      options: [
        { src: "images/PRD/C1/C1-Q1-A.png", correct: false },
        { src: "images/PRD/C1/C1-Q1-B.png", correct: true },
        { src: "images/PRD/C1/C1-Q1-C.png", correct: false },
        { src: "images/PRD/C1/C1-Q1-D.png", correct: false },
        { src: "images/PRD/C1/C1-Q2-A.png", correct: false },
        { src: "images/PRD/C1/C1-Q2-B.png", correct: false },
        { src: "images/PRD/C1/C1-Q2-C.png", correct: true },
        { src: "images/PRD/C1/C1-Q2-D.png", correct: false },
        { src: "images/PRD/C1/C1-Q3-A.png", correct: true },
        { src: "images/PRD/C1/C1-Q3-B.png", correct: false },
        { src: "images/PRD/C1/C1-Q3-C.png", correct: false },
        { src: "images/PRD/C1/C1-Q3-D.png", correct: false },
      ],
      correctImage: "images/PRD/C1/C1-o.webp",
      wrongImage: "images/PRD/C1/C1-x.webp",
    },
    character2: {
      bg: [
        "images/PRD/C2/C2-Q1-bg.png",
        "images/PRD/C2/C2-Q2-bg.png",
        "images/PRD/C2/C2-Q3-bg.png",
      ],
      options: [
        { src: "images/PRD/C2/C2-Q1-A.png", correct: false },
        { src: "images/PRD/C2/C2-Q1-B.png", correct: false },
        { src: "images/PRD/C2/C2-Q1-C.png", correct: true },
        { src: "images/PRD/C2/C2-Q1-D.png", correct: false },
        { src: "images/PRD/C2/C2-Q2-A.png", correct: false },
        { src: "images/PRD/C2/C2-Q2-B.png", correct: true },
        { src: "images/PRD/C2/C2-Q2-C.png", correct: false },
        { src: "images/PRD/C2/C2-Q2-D.png", correct: false },
        { src: "images/PRD/C2/C2-Q3-A.png", correct: false },
        { src: "images/PRD/C2/C2-Q3-B.png", correct: false },
        { src: "images/PRD/C2/C2-Q3-C.png", correct: true },
        { src: "images/PRD/C2/C2-Q3-D.png", correct: false },
      ],
      correctImage: "images/PRD/C2/C2-o.webp",
      wrongImage: "images/PRD/C2/C2-x.webp",
    },
    character3: {
      bg: [
        "images/PRD/C3/C3-Q1-bg.png",
        "images/PRD/C3/C3-Q2-bg.png",
        "images/PRD/C3/C3-Q3-bg.png",
      ],
      options: [
        { src: "images/PRD/C3/C3-Q1-A.png", correct: false },
        { src: "images/PRD/C3/C3-Q1-B.png", correct: true },
        { src: "images/PRD/C3/C3-Q1-C.png", correct: false },
        { src: "images/PRD/C3/C3-Q1-D.png", correct: false },
        { src: "images/PRD/C3/C3-Q2-A.png", correct: false },
        { src: "images/PRD/C3/C3-Q2-B.png", correct: false },
        { src: "images/PRD/C3/C3-Q2-C.png", correct: false },
        { src: "images/PRD/C3/C3-Q2-D.png", correct: true },
        { src: "images/PRD/C3/C3-Q3-A.png", correct: false },
        { src: "images/PRD/C3/C3-Q3-B.png", correct: true },
        { src: "images/PRD/C3/C3-Q3-C.png", correct: false },
        { src: "images/PRD/C3/C3-Q3-D.png", correct: false },
      ],
      correctImage: "images/PRD/C3/C3-o.webp",
      wrongImage: "images/PRD/C3/C3-x.webp",
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

  if (!data) return null;

  return (
    <>
      <Head>
        <title>Third Page</title>
      </Head>
      <div className="container relative mx-auto flex aspect-[1/1.8] min-h-screen flex-col items-center justify-end bg-cover p-2" style={{ backgroundImage: `url(${data.bg})` }}>
        {showFeedback && (
          <motion.div 
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
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
        <OptionsList
          data={data}
          showFeedback={showFeedback}
          handleClick={handleClick}
        />
      </div>
    </>
  );
}
