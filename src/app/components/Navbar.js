"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ConnectWallet from "./ConnectWallet";

export default function Navbar({ userSession, userData, setUserData }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'border-b border-white/10 bg-black/80 backdrop-blur-md shadow-lg' 
        : 'border-b border-transparent bg-transparent'
    }`}>
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110">
            <Image 
              src="/logo.svg" 
              alt="DragonBTC Logo" 
              width={32} 
              height={32}
              className="transition-opacity duration-300 group-hover:opacity-80"
            />
          </div>
          <span className="text-lg sm:text-xl font-light tracking-wide text-white transition-colors duration-300 group-hover:text-gray-300">
            DragonBTC
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-light text-gray-400">
          <li>
            <Link href="/" className="transition-colors hover:text-white">
              Главная
            </Link>
          </li>
          <li>
            <Link href="/lend" className="transition-colors hover:text-white">
              Дать в долг
            </Link>
          </li>
          <li>
            <Link href="/borrow" className="transition-colors hover:text-white">
              Взять в долг
            </Link>
          </li>
          <li>
            <Link href="/deposit" className="transition-colors hover:text-white">
              Депозит
            </Link>
          </li>
          <li>
            <Link href="/withdraw" className="transition-colors hover:text-white">
              Вывод
            </Link>
          </li>
        </ul>

        {/* Desktop Connect Wallet Button */}
        <div className="hidden md:block">
          {userData ? (
            <ConnectWallet
              userSession={userSession}
              userData={userData}
              setUserData={setUserData}
            />
          ) : (
            ""
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden border-t border-white/10 bg-black/95 backdrop-blur-lg overflow-hidden transition-all duration-500 ease-in-out ${
        mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <ul className="px-4 py-4 space-y-4 text-sm font-light text-gray-400">
          <li>
            <Link 
              href="/" 
              className="block py-2 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Главная
            </Link>
          </li>
          <li>
            <Link 
              href="/lend" 
              className="block py-2 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Дать в долг
            </Link>
          </li>
          <li>
            <Link 
              href="/borrow" 
              className="block py-2 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Взять в долг
            </Link>
          </li>
          <li>
            <Link 
              href="/deposit" 
              className="block py-2 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Депозит
            </Link>
          </li>
          <li>
            <Link 
              href="/withdraw" 
              className="block py-2 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Вывод
            </Link>
          </li>
          {userData && (
            <li className="pt-4 border-t border-white/10">
              <ConnectWallet
                userSession={userSession}
                userData={userData}
                setUserData={setUserData}
              />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
