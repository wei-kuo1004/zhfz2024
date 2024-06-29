import Link from "next/link";
import Image from "next/image";

export default function SecondPage() {
  return (
    <div className="container mx-auto flex aspect-[1/1.8] min-h-screen flex-col items-center justify-center bg-p2-bg  bg-cover p-6">
      <div className="w-1/2 ">
        <Link href="/thirdScene" passHref>    
            <Image
              src="/images/PRD/p2-character1.png"
              alt="描述文字"
              width={400}
              height={400}
              layout="responsive"
              objectFit="cover"
            />
          </Link> 
      </div>
      <div className=" w-full p-8  ">
        <div className=" flex w-full flex-1 flex-row">
          <div className=" mx-2 w-1/2 flex-1">
            <Link href="/thirdScene" passHref>    
              <Image
                src="/images/PRD/p2-character2.png"
                alt="描述文字"
                width={400}
                height={400}
                layout="responsive"
                objectFit="cover"
              />
            </Link> 
          </div>
          <div className=" mx-2 w-1/2 flex-1 ">
              <Link href="/thirdScene" passHref>    
                <Image
                  src="/images/PRD/p2-character3.png"
                  alt="描述文字"
                  width={400}
                  height={400}
                  layout="responsive"
                  objectFit="cover"
                />
              </Link> 
          </div>
        </div>
      </div>
    </div>
  );
}
