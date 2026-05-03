"use client";

import { useState, useContext } from "react";
import {
  DevEnvHelper,
  sbtcWithdrawHelper,
  sbtcWithdrawMessage,
  TESTNET,
  TestnetHelper,
  WALLET_00,
} from "sbtc";
import { bytesToHex, hexToBytes } from "@noble/hashes/utils";
import * as btc from "@scure/btc-signer";
import { openSignatureRequestPopup } from "@stacks/connect";

import { UserContext } from "../UserContext";
import { StacksTestnet, StacksMocknet } from "@stacks/network";

export default function WithdrawForm() {
  const { userData, userSession } = useContext(UserContext);
  const [satoshis, setSatoshis] = useState("");
  const [signature, setSignature] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setSatoshis(event.target.value);
    setError("");
  };

  const signMessage = async (e) => {
    e.preventDefault();
    
    // Валидация
    setError("");
    
    if (!satoshis || parseInt(satoshis) <= 0) {
      setError("Введите корректную сумму");
      return;
    }
    
    if (parseInt(satoshis) < 10000) {
      setError("Минимальная сумма: 10000 сатоши (0.0001 BTC)");
      return;
    }
    
    setLoading(true);

    try {
      const testnet = new DevEnvHelper();
      const bitcoinAccountA = await testnet.getBitcoinAccount(WALLET_00);
      const btcAddress = bitcoinAccountA.wpkh.address;

      const message = sbtcWithdrawMessage({
        amountSats: satoshis,
        bitcoinAddress: btcAddress,
      });
      
      openSignatureRequestPopup({
        message,
        userSession,
        network: new StacksMocknet(),
        onFinish: (data) => {
          setSignature(data.signature);
          setLoading(false);
        },
        onCancel: () => {
          setLoading(false);
        },
      });
    } catch (error) {
      console.error(error);
      setError("Ошибка подписи: " + error.message);
      setLoading(false);
    }
  };

  const buildTransaction = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const testnet = new DevEnvHelper();
      const bitcoinAccountA = await testnet.getBitcoinAccount(WALLET_00);
      const btcAddress = bitcoinAccountA.wpkh.address;
      const btcPublicKey = bitcoinAccountA.publicKey.buffer.toString();

      let utxos = await testnet.fetchUtxos(btcAddress);
      const pegAccount = await testnet.getBitcoinAccount(WALLET_00);
      const pegAddress = pegAccount.tr.address;

      const tx = await sbtcWithdrawHelper({
        pegAddress,
        bitcoinAddress: btcAddress,
        amountSats: satoshis,
        signature,
        feeRate: await testnet.estimateFeeRate("low"),
        fulfillmentFeeSats: 2000,
        utxos,
        bitcoinChangeAddress: btcAddress,
      });
      
      const psbt = tx.toPSBT();
      const requestParams = {
        publicKey: btcPublicKey,
        hex: bytesToHex(psbt),
      };
      const txResponse = await window.btc.request("signPsbt", requestParams);
      const formattedTx = btc.Transaction.fromPSBT(
        hexToBytes(txResponse.result.hex)
      );
      formattedTx.finalize();
      const finalTx = await testnet.broadcastTx(formattedTx);
      
      console.log(finalTx);
      alert("Транзакция отправлена: " + finalTx);
      setSignature("");
      setSatoshis("");
    } catch (error) {
      console.error(error);
      setError("Ошибка: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6">
      <div>
        <label className="block mb-3 text-sm font-light text-gray-500">
          Сумма sBTC (в сатоши)
        </label>
        <input
          type="number"
          placeholder="100000"
          className="w-full px-4 py-3 text-white transition-all duration-200 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-white/40"
          value={satoshis}
          onChange={handleInputChange}
          disabled={loading}
        />
        {error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
      </div>

      <div className="p-4 border border-white/10 rounded-lg bg-white/5">
        <div className="flex justify-between text-sm">
          <span className="font-light text-gray-500">Получите BTC</span>
          <span className="text-white">
            {satoshis ? (parseInt(satoshis) / 100000000).toFixed(8) : "0.00000000"} BTC
          </span>
        </div>
      </div>

      {signature && (
        <div className="p-4 text-sm text-center border border-white/20 rounded-lg bg-white/5 text-gray-400">
          Подписано. Готово к отправке
        </div>
      )}
      
      <button
        className="w-full px-6 py-3 text-sm font-medium text-black transition-all duration-200 bg-white rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={(e) => {
          signature ? buildTransaction(e) : signMessage(e);
        }}
        disabled={loading}
      >
        {loading ? "Обработка..." : signature ? "Отправить" : "Подписать"}
      </button>
    </form>
  );
}
