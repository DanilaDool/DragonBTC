"use client";

import LendForm from "../components/LendForm";
import { useEffect, useState } from "react";

export default function Lend() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen px-4 py-12 sm:py-20">
      <div className={`max-w-2xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
            Дать в долг
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Положите sBTC в пул и получайте пассивный доход
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16 text-center">
          <div>
            <div className="mb-2 text-2xl sm:text-3xl font-light text-white">10%</div>
            <div className="text-xs sm:text-sm text-gray-600">Годовая ставка</div>
          </div>
          <div>
            <div className="mb-2 text-2xl sm:text-3xl font-light text-white">24/7</div>
            <div className="text-xs sm:text-sm text-gray-600">Доступность</div>
          </div>
          <div>
            <div className="mb-2 text-2xl sm:text-3xl font-light text-white">0%</div>
            <div className="text-xs sm:text-sm text-gray-600">Комиссия</div>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 sm:p-8 border border-white/10 rounded-2xl bg-white/5">
          <LendForm />
        </div>

        {/* Info */}
        <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-center text-gray-600 px-4">
          Ваш sBTC будет добавлен в общий пул ликвидности
        </div>
      </div>
    </div>
  );
}
