import React from 'react';

const LoadingDots: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-yellow-400">
      <div className="flex space-x-2">
        <div className="h-3 w-3 animate-bounce rounded-full bg-gray-800 delay-0"></div>
        <div className="h-3 w-3 animate-bounce rounded-full bg-gray-800 delay-200"></div>
        <div className="delay-400 h-3 w-3 animate-bounce rounded-full bg-gray-800"></div>
      </div>
    </div>
  );
};

export default LoadingDots;
