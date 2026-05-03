"use client";

import React, { useState } from "react";
import { uintCV, PostConditionMode } from "@stacks/transactions";
import { openContractCall } from "@stacks/connect";
import { StacksMocknet, StacksTestnet } from "@stacks/network";

export default function BorrowForm() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBorrow = async () => {
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
      const functionName = "borrow";

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
          alert("Кредит успешно получен!");
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
        handleBorrow();
      }}
    >
      <div>
        <label className="block mb-3 text-sm font-light text-gray-500">
          Сумма для займа
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

      <div className="p-4 border border-white/10 rounded-lg bg-white/5">
        <div className="flex justify-between mb-2 text-sm">
          <span className="font-light text-gray-500">Процентная ставка</span>
          <span className="text-white">10% годовых</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-light text-gray-500">Платеж в месяц</span>
          <span className="text-white">
            {amount ? (parseFloat(amount) * 0.1 / 12).toFixed(8) : "0.00000000"} sBTC
          </span>
        </div>
      </div>
      
      <button
        type="submit"
        className="w-full px-6 py-3 text-sm font-medium text-black transition-all duration-200 bg-white rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? "Обработка..." : "Взять в долг"}
      </button>
    </form>
  );
}
