import React from 'react';

const ClickCounter = ({ clickCount }: { clickCount: number }) => {
  const today = new Date().toLocaleDateString();

  return (
    <div className="fixed bottom-0 mb-4 text-center">
      <p>本日日期: {today}</p>
      <p>今日遊玩人次: {clickCount}</p>
    </div>
  );
};

export default ClickCounter;