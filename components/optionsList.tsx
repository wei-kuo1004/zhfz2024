import Image from 'next/image';
import React from 'react';

interface OptionType {
  src: string;
  correct: boolean;
}

interface ResponsiveOptionProps {
  option: OptionType;
  index: number;
  onClick: () => void;
}

const ResponsiveOption: React.FC<ResponsiveOptionProps> = ({ option, index, onClick }) => (
  <div 
    className="flex w-full cursor-pointer justify-center" 
    onClick={onClick}
  >
    <div className="relative w-full" style={{ aspectRatio: '10 / 2.5' }}>
      <Image 
        src={option.src} 
        alt={`選項 ${String.fromCharCode(65 + index)}`} 
        fill
        style={{ objectFit: 'contain' }}
      />
    </div>
  </div>
);

interface OptionsListProps {
  data: {
    options: OptionType[];
  };
  showFeedback: boolean;
  handleClick: (answer: string, isCorrect: boolean) => void;
}

const OptionsList: React.FC<OptionsListProps> = ({ data, showFeedback, handleClick }) => (
  <div className="mb-8 flex w-full flex-col space-y-1 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
    {data.options.map((option, index) => (
      <ResponsiveOption
        key={index}
        option={option}
        index={index}
        onClick={() => !showFeedback && handleClick(String.fromCharCode(65 + index), option.correct)}
      />
    ))}
  </div>
);

export default OptionsList;