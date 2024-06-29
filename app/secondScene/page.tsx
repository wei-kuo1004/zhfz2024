"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const roles = [
  { id: 1, name: "汽車維修工程師", imgSrc: "/images/car1.webp" },
  { id: 2, name: "沖床加工工程師", imgSrc: "/images/press1.webp" },
  { id: 3, name: "焊接鑄造工程師", imgSrc: "/images/welding1.webp" }
];

const SecondPage = () => {
  const [selectedRole, setSelectedRole] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        選擇角色
      </h1>
      <div className="flex gap-4">
        {roles.map((role) => (
          <div
            key={role.id}
            className={`relative w-1/3 cursor-pointer p-4 transition-transform duration-300 hover:scale-105 ${
              selectedRole === role.id ? 'border-4 border-Yellow-500 shadow-lg shadow-yellow-500/50' : ''
            }`}
            onClick={() => setSelectedRole(role.id)}
          >
            <img src={role.imgSrc} alt={role.name} className="h-auto w-full rounded-lg" />
            <p className="mt-2 text-center">{role.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/thirdScene">
          <button className={buttonVariants()}>
            開始問答
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SecondPage;
