"use client";

import BorrowForm from "../components/BorrowForm";
import { useEffect, useState } from "react";

export default function Borrow() {
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
            Взять в долг
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Получите ликвидность под залог Bitcoin
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16 text-center">
          <div>
            <div className="mb-2 text-2xl sm:text-3xl font-light text-white">50%</div>
            <div className="text-xs sm:text-sm text-gray-600">От депозита</div>
          </div>
          <div>
            <div className="mb-2 text-2xl sm:text-3xl font-light text-white">10%</div>
            <div className="text-xs sm:text-sm text-gray-600">Годовая ставка</div>
          </div>
          <div>
            <div className="mb-2 text-2xl sm:text-3xl font-light text-white">⚡</div>
            <div className="text-xs sm:text-sm text-gray-600">Мгновенно</div>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 sm:p-8 border border-white/10 rounded-2xl bg-white/5">
          <BorrowForm />
        </div>

        {/* Info */}
        <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-center text-gray-600 px-4">
          Максимальная сумма займа: 50% от вашего депозита
        </div>
      </div>
    </div>
  );
}
