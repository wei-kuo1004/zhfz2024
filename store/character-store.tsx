import { create } from 'zustand';

interface CharacterState {
  selectedCharacter: string;
  setSelectedCharacter: (character: string) => void;
  currentLevel: number;
  setCurrentLevel: (level: number) => void;
  answers: Record<number, string>;
  setAnswer: (level: number, answer: string) => void;
}

export const useCharacterStore = create<CharacterState>((set) => ({
  selectedCharacter: "",
  setSelectedCharacter: (character) => {
    console.log(`使用者選擇了: ${character}`);
    set({ selectedCharacter: character });
  },
  currentLevel: 1,
  setCurrentLevel: (level) => {
    console.log(`進入第 ${level} 關`);
    set({ currentLevel: level });
  },
  answers: {},
  setAnswer: (level, answer) => {
    console.log(`第 ${level} 關選擇了: ${answer}`);
    set((state) => ({
      answers: { ...state.answers, [level]: answer },
    }));
  },
}));

export const useCharacter = () => {
  const selectedCharacter = useCharacterStore((state) => state.selectedCharacter);
  const setSelectedCharacter = useCharacterStore((state) => state.setSelectedCharacter);
  const currentLevel = useCharacterStore((state) => state.currentLevel);
  const setCurrentLevel = useCharacterStore((state) => state.setCurrentLevel);
  const answers = useCharacterStore((state) => state.answers);
  const setAnswer = useCharacterStore((state) => state.setAnswer);

  return {
    selectedCharacter,
    setSelectedCharacter,
    currentLevel,
    setCurrentLevel,
    answers,
    setAnswer,
  };
};
