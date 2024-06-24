import React from 'react';

interface PageProps {
  params: { id: string };
}

// 假設這是一個頁面組件
const FourthPage: React.FC<PageProps> = ({ params }) => {
  return (
    <div>
      <h1>Page {params.id}</h1>
    </div>
  );
};

export default FourthPage;