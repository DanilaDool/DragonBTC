"use client";

import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";
import ConnectWallet from "./components/ConnectWallet";
import Footer from "./components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { userData, userSession } = useContext(UserContext);
  const [localUserData, setLocalUserData] = useState({});

  useEffect(() => {
    setMounted(true);
    setLocalUserData(userData);
  }, [userData]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with animated gradient */}
      <section className="relative px-4 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden text-center">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className={`relative max-w-5xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 text-sm font-light tracking-widest text-gray-500 uppercase">
            Powered by Bitcoin & Stacks
          </div>
          <h1 className="mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tighter text-white">
            DragonBTC
          </h1>
          <div className="h-px mx-auto mb-8 w-24 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <p className="mb-4 text-lg sm:text-xl md:text-2xl font-light text-gray-300">
            Децентрализованное кредитование Bitcoin
          </p>
          <p className="max-w-2xl mx-auto mb-12 text-sm text-gray-500">
            Зарабатывайте на своих активах или получайте ликвидность без продажи Bitcoin. 
            Прозрачно. Безопасно. Децентрализовано.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            {/* Дать в долг - темная тема */}
            <Link
              href="/lend"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 text-sm font-medium text-white overflow-hidden transition-all duration-500 bg-black/80 border border-white/20 rounded-lg hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 hover:border-orange-500/50"
            >
              {/* Animated gradient border */}
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                <span className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                <span className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-orange-500 via-purple-500 to-blue-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-100"></span>
                <span className="absolute right-0 bottom-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-100"></span>
              </span>
              
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20"></span>
              
              {/* Button text with icon */}
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover:tracking-wider transition-all duration-300">
                <svg className="w-4 h-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Дать в долг
              </span>
              
              {/* Shine effect */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              </span>
              
              {/* Ripple effect on hover */}
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-orange-500/5 via-purple-500/5 to-blue-500/5"></span>
            </Link>
            
            {/* Взять в долг - белая тема */}
            <Link
              href="/borrow"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 text-sm font-medium text-black overflow-hidden transition-all duration-500 bg-white rounded-lg hover:scale-105 hover:shadow-2xl hover:shadow-white/30"
            >
              {/* Animated gradient border */}
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                <span className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                <span className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-orange-500 via-purple-500 to-blue-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-100"></span>
                <span className="absolute right-0 bottom-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-100"></span>
              </span>
              
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20"></span>
              
              {/* Button text with icon */}
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover:tracking-wider transition-all duration-300">
                <svg className="w-4 h-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Взять в долг
              </span>
              
              {/* Shine effect */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              </span>
              
              {/* Ripple effect on hover */}
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-orange-500/5 via-purple-500/5 to-blue-500/5"></span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator - адаптивный */}
        <div className="absolute bottom-2 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5 sm:p-2">
            <div className="w-1 h-1.5 sm:w-1 sm:h-2 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section with hover effects */}
      <section className="px-4 py-12 sm:py-16 md:py-24 border-t border-white/5">
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
          <div className="group relative p-8 text-center transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            <div className="relative">
              <div className="mb-4 text-4xl sm:text-5xl md:text-6xl font-extralight text-white transition-all duration-300 group-hover:text-orange-400">10%</div>
              <div className="text-xs tracking-wider text-gray-600 uppercase">Годовая ставка</div>
              <div className="h-px mx-auto mt-4 w-12 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="group relative p-8 text-center transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            <div className="relative">
              <div className="mb-4 text-4xl sm:text-5xl md:text-6xl font-extralight text-white transition-all duration-300 group-hover:text-purple-400">50%</div>
              <div className="text-xs tracking-wider text-gray-600 uppercase">Кредит от депозита</div>
              <div className="h-px mx-auto mt-4 w-12 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="group relative p-8 text-center transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            <div className="relative">
              <div className="mb-4 text-4xl sm:text-5xl md:text-6xl font-extralight text-white transition-all duration-300 group-hover:text-blue-400">0%</div>
              <div className="text-xs tracking-wider text-gray-600 uppercase">Комиссия платформы</div>
              <div className="h-px mx-auto mt-4 w-12 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with cards */}
      <section className="px-4 py-12 sm:py-16 md:py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-extralight text-white">Почему выбирают DragonBTC</h2>
            <div className="h-px mx-auto w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Card 1 */}
            <div className="group relative p-8 transition-all duration-500 border border-white/5 rounded-2xl hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-light text-white">
                  Пассивный доход
                </h3>
                <p className="mb-6 text-gray-400 leading-relaxed">
                  Положите свой Bitcoin в пул ликвидности и получайте стабильный доход. 
                  Ваши средства работают круглосуточно.
                </p>
                <Link href="/lend" className="inline-flex items-center text-sm text-white/60 hover:text-white transition-colors group">
                  Начать зарабатывать 
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-8 transition-all duration-500 border border-white/5 rounded-2xl hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-light text-white">
                  Полный контроль
                </h3>
                <p className="mb-6 text-gray-400 leading-relaxed">
                  Ваши ключи — ваши монеты. Никаких посредников, никакого KYC. 
                  Полная прозрачность на блокчейне.
                </p>
                <div className="inline-flex items-center text-sm text-white/60">
                  Децентрализовано
                  <span className="ml-2 px-2 py-1 text-xs bg-white/5 rounded-full">100%</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 transition-all duration-500 border border-white/5 rounded-2xl hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-light text-white">
                  Не продавайте Bitcoin
                </h3>
                <p className="mb-6 text-gray-400 leading-relaxed">
                  Получите ликвидность под залог Bitcoin. Сохраните потенциал роста 
                  и получите средства прямо сейчас.
                </p>
                <Link href="/borrow" className="inline-flex items-center text-sm text-white/60 hover:text-white transition-colors group">
                  Взять кредит
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative p-8 transition-all duration-500 border border-white/5 rounded-2xl hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/20 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-light text-white">
                  Мгновенные операции
                </h3>
                <p className="mb-6 text-gray-400 leading-relaxed">
                  Подключите кошелек и начните за минуты. Без документов, 
                  без ожидания, без бюрократии.
                </p>
                <div className="inline-flex items-center text-sm text-white/60">
                  Готово за
                  <span className="ml-2 px-2 py-1 text-xs bg-white/5 rounded-full">2 минуты</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - Timeline */}
      <section className="px-4 py-12 sm:py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-extralight text-white">Как это работает</h2>
            <div className="h-px mx-auto w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
            
            <div className="space-y-12">
              {[
                {
                  number: "01",
                  title: "Подключите кошелек",
                  description: "Используйте Leather или любой Stacks-совместимый кошелек. Никакой регистрации или верификации.",
                  delay: "0s"
                },
                {
                  number: "02",
                  title: "Конвертируйте BTC в sBTC",
                  description: "Преобразуйте Bitcoin для использования в смарт-контрактах. Соотношение 1:1, полностью обеспечено.",
                  delay: "0.1s"
                },
                {
                  number: "03",
                  title: "Выберите действие",
                  description: "Дайте в долг для получения пассивного дохода или возьмите кредит под залог своих активов.",
                  delay: "0.2s"
                },
                {
                  number: "04",
                  title: "Получайте результат",
                  description: "Зарабатывайте проценты или используйте полученную ликвидность. Выводите средства в любое время.",
                  delay: "0.3s"
                }
              ].map((step, index) => (
                <div key={index} className="relative flex gap-8 group" style={{ animationDelay: step.delay }}>
                  <div className="relative z-10 flex items-center justify-center flex-shrink-0 w-16 h-16 text-sm font-light text-white transition-all duration-500 border border-white/20 rounded-full bg-black group-hover:border-white/40 group-hover:scale-110">
                    {step.number}
                  </div>
                  <div className="flex-1 pb-12">
                    <h3 className="mb-3 text-xl font-light text-white transition-colors group-hover:text-white/80">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with gradient */}
      <section className="relative px-4 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden text-center border-t border-white/5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/30 via-purple-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-extralight text-white">
            Начните зарабатывать сегодня
          </h2>
          <p className="mb-12 text-lg text-gray-400">
            Присоединяйтесь к децентрализованной экосистеме Bitcoin
          </p>
          <div className="flex justify-center">
            <div className="transform scale-110 sm:scale-125">
              <ConnectWallet
                userSession={userSession}
                userData={localUserData}
                setUserData={setLocalUserData}
              />
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 mt-16 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Безопасно</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Проверено</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span>24/7 Доступно</span>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
