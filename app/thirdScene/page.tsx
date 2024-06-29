import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';


// 假設這是一個頁面組件
const ThirdPage = () => {
  return (
    <div>
      <h1>問答區</h1>
      <div className="flex gap-4">
        <Link
          href="/fourthScene"
          className={buttonVariants()}
        >
         看解答
        </Link>
      </div>
    </div>
  );
};

export default ThirdPage;