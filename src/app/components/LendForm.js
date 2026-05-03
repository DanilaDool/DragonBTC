"use client";

import React, { useState } from "react";
import { uintCV, PostConditionMode } from "@stacks/transactions";
import { openContractCall } from "@stacks/connect";
import { StacksMocknet, StacksTestnet } from "@stacks/network";

export default function LendForm() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDeposit = async () => {
    // Валидация
    setError("");
    
    if (!amount || parseFloat(amount) <= 0) {
      setError("Введите корректную сумму");
      return;
    }
    
    if (parseFloat(amount) < 0.001) {
      setError("Минимальная сумма: 0.001 sBTC");
      return;
    }
    
    setLoading(true);
    
    try {
      const functionArgs = [
        uintCV(Math.floor(parseFloat(amount) * 100000000)), // Convert to satoshis
      ];

      const contractAddress = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM";
      const contractName = "lagoon";
      const functionName = "deposit";

      const options = {
        contractAddress,
        contractName,
        functionName,
        functionArgs,
        network: new StacksMocknet(),
        postConditionMode: PostConditionMode.Allow,
        appDetails: {
          name: "Lagoon",
          icon: "https://freesvg.org/img/bitcoin.png",
        },
        onFinish: (data) => {
          console.log(data);
          alert("Транзакция отправлена успешно!");
          setAmount("");
          setLoading(false);
        },
        onCancel: () => {
          setLoading(false);
        },
      };

      await openContractCall(options);
    } catch (error) {
      console.error(error);
      setError("Ошибка: " + error.message);
      setLoading(false);
    }
  };

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        handleDeposit();
      }}
    >
      <div>
        <label className="block mb-3 text-sm font-light text-gray-500">
          Сумма sBTC
        </label>
        <input
          type="number"
          step="0.00000001"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-3 text-white transition-all duration-200 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-white/40"
          disabled={loading}
        />
        {error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
      </div>
      
      <button
        type="submit"
        className="w-full px-6 py-3 text-sm font-medium text-black transition-all duration-200 bg-white rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? "Обработка..." : "Внести в пул"}
      </button>
    </form>
  );
}
