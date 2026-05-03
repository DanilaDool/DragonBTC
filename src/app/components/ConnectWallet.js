import { showConnect } from "@stacks/connect";
import { StacksMocknet, StacksTestnet } from "@stacks/network";
import { useState } from "react";

export default function ConnectWallet({ userSession, userData, setUserData }) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(null);

  const connectWallet = () => {
    setIsConnecting(true);
    setError(null);
    
    try {
      showConnect({
        userSession,
        network: StacksTestnet,
        appDetails: {
          name: "DragonBTC",
          icon: window.location.origin + "/logo.svg",
        },
        onFinish: () => {
          setIsConnecting(false);
          window.location.reload();
        },
        onCancel: () => {
          setIsConnecting(false);
          // Не показываем сообщение при отмене
        },
      });
    } catch (err) {
      setIsConnecting(false);
      setError("Ошибка подключения кошелька");
      console.error("Wallet connection error:", err);
      setTimeout(() => setError(null), 3000);
    }
  };

  const disconnectWallet = () => {
    try {
      userSession.signUserOut(window.location.origin);
      setUserData({});
      setError(null);
    } catch (err) {
      setError("Ошибка отключения кошелька");
      console.error("Wallet disconnection error:", err);
      setTimeout(() => setError(null), 3000);
    }
  };
  
  return (
    <>
      <button
        className="group relative px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-medium text-black overflow-hidden transition-all duration-300 bg-white rounded-lg hover:bg-gray-100 hover:scale-105 hover:shadow-lg hover:shadow-white/20 active:scale-95 w-full sm:w-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => {
          userData.profile ? disconnectWallet() : connectWallet();
        }}
        disabled={isConnecting}
      >
      {/* Animated border on hover */}
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
        <span className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
        <span className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-orange-500 via-purple-500 to-blue-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></span>
        <span className="absolute right-0 bottom-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></span>
      </span>
      
      {/* Glow effect on hover */}
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-orange-500/30 via-purple-500/30 to-blue-500/30 pointer-events-none"></span>
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {userData.profile ? (
          <>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:rotate-180 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="whitespace-nowrap">Отключить</span>
          </>
        ) : (
          <>
            {isConnecting ? (
              <>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="whitespace-nowrap">Подключение...</span>
              </>
            ) : (
              <>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="whitespace-nowrap group-hover:tracking-wider transition-all duration-300">Подключить</span>
              </>
            )}
          </>
        )}
      </span>
      
      {/* Shine effect on hover */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
      </span>
      
      {/* Ripple effect on click */}
      <span className="absolute inset-0 rounded-lg opacity-0 group-active:opacity-100 transition-opacity duration-150 bg-white/20 pointer-events-none"></span>
    </button>
    
    {/* Error message */}
    {error && (
      <div className="mt-2 text-xs text-red-400 text-center">
        {error}
      </div>
    )}
  </>
  );
}
