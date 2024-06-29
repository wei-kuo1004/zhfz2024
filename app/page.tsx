// app/page.tsx
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';

export default function IndexPage() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center min-h-screen bg-safeFirst p-6">
      <div className="flex flex-col items-center text-center max-w-[980px]">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
          災害防治首頁 <br className="hidden sm:inline" />
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          歡迎來到災害防治問答系統。在這裡，你可以學習到如何預防和應對各種災害。準備好挑戰了嗎？
        </p>
        <div className="mt-6">
          <Link href="/secondScene" passHref>
            <button className={`px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 ${buttonVariants()}`}>
              開始挑戰 Start
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
