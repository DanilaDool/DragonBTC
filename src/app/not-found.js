"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-extralight text-white opacity-20">404</h1>
        </div>
        
        {/* Content */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            Страница не найдена
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            К сожалению, запрашиваемая страница не существует или была перемещена
          </p>
        </div>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="group relative px-8 py-3 text-sm font-medium text-black overflow-hidden transition-all duration-300 bg-white rounded-lg hover:bg-gray-100 hover:scale-105"
          >
            <span className="relative z-10">Вернуться на главную</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="group relative px-8 py-3 text-sm font-medium text-white overflow-hidden transition-all duration-300 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 backdrop-blur-sm"
          >
            <span className="relative z-10">Назад</span>
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  );
}
