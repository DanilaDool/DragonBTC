"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DepositForm = dynamic(() => import("../components/DepositForm"), {
  ssr: false,
  loading: () => <div className="text-center text-gray-500">Загрузка...</div>
});

export default function Deposit() {
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
            Депозит
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Конвертируйте Bitcoin в sBTC
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16 text-center">
          <div>
            <div className="mb-2 text-xl sm:text-2xl font-light text-white">1</div>
            <div className="text-xs sm:text-sm text-gray-600">Отправить BTC</div>
          </div>
          <div>
            <div className="mb-2 text-xl sm:text-2xl font-light text-white">2</div>
            <div className="text-xs sm:text-sm text-gray-600">Подождать</div>
          </div>
          <div>
            <div className="mb-2 text-xl sm:text-2xl font-light text-white">3</div>
            <div className="text-xs sm:text-sm text-gray-600">Получить sBTC</div>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 sm:p-8 border border-white/10 rounded-2xl bg-white/5">
          <DepositForm />
        </div>

        {/* Info */}
        <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-center text-gray-600 px-4">
          sBTC — это Bitcoin на блокчейне Stacks (1:1)
        </div>
      </div>
    </div>
  );
}
