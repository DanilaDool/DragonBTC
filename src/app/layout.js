"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import React, { useState, useEffect } from "react";
import { AppConfig, UserSession } from "@stacks/connect";

import { UserContext } from "./UserContext";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [userData, setUserData] = useState({});

  const appConfig = new AppConfig();
  const userSession = new UserSession({ appConfig });

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        setUserData(userData);
      });
    } else if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>DragonBTC - Децентрализованное кредитование Bitcoin</title>
        <meta name="description" content="Зарабатывайте на своих Bitcoin или получайте ликвидность без продажи. Прозрачно. Безопасно. Децентрализовано." />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DragonBTC - Децентрализованное кредитование Bitcoin" />
        <meta property="og:description" content="Зарабатывайте на своих Bitcoin или получайте ликвидность без продажи. Прозрачно. Безопасно. Децентрализовано." />
        <meta property="og:image" content="/dragon-logo.svg" />
        <meta property="og:url" content="https://dragonbtc.io" />
        <meta property="og:site_name" content="DragonBTC" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DragonBTC - Децентрализованное кредитование Bitcoin" />
        <meta name="twitter:description" content="Зарабатывайте на своих Bitcoin или получайте ликвидность без продажи. Прозрачно. Безопасно. Децентрализовано." />
        <meta name="twitter:image" content="/dragon-logo.svg" />
        
        {/* Additional Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="Bitcoin, DeFi, кредитование, sBTC, Stacks, децентрализация, криптовалюта" />
        
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </head>
      <body className={inter.className}>
        <div className="relative min-h-screen text-white bg-black">
          {/* Animated background grid */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
            
            {/* Gradient orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: '4s' }}></div>
            
            {/* Stars - Floating particles - Optimized */}
            <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-white/60 rounded-full animate-float shadow-[0_0_8px_rgba(255,255,255,0.8)] will-change-transform"></div>
            <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-white/70 rounded-full animate-float shadow-[0_0_6px_rgba(255,255,255,0.9)] will-change-transform" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/65 rounded-full animate-float shadow-[0_0_8px_rgba(255,255,255,0.8)] will-change-transform" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white/75 rounded-full animate-float shadow-[0_0_6px_rgba(255,255,255,0.9)] will-change-transform" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-1/5 left-1/3 w-1 h-1 bg-white/80 rounded-full animate-float shadow-[0_0_4px_rgba(255,255,255,1)] will-change-transform" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 bg-white/70 rounded-full animate-float shadow-[0_0_6px_rgba(255,255,255,0.9)] will-change-transform" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {userData !== undefined ? (
              <UserContext.Provider value={{ userData, userSession }}>
                <Navbar
                  userSession={userSession}
                  userData={userData}
                  setUserData={setUserData}
                />
                {children}
              </UserContext.Provider>
            ) : (
              ""
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
