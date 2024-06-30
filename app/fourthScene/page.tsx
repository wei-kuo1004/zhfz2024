import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';


// 假設這是一個頁面組件
const FourthPage = () => {
  return (
    <div >
      <h1>完成測驗</h1>
      <div className="flex gap-4">
        <Link
          href="/"
          className={buttonVariants()}
        >
         回首頁
        </Link>
      </div>
    </div>
  );
};

export default FourthPage;