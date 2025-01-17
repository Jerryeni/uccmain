"use client";

import { Progress } from "@/components/ui/progress";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SUPPORTED_TOKENS } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import { AmountInput } from "./amount-input";

const demoActivities = [
  { id: 1, description: "Purchased 100 Ucchain", date: "2025-01-01" },
  { id: 2, description: "Referred a new user", date: "2025-01-02" },
];

interface TokenProgressProps {
  tokenUSDTPrice: number;
  tokenBNBPrice: number;
  tokensSold: number;
  totalTokens: number;
  userInfo: any;
  userId: number;
  userDepositsUSDT: number;
  userDepositsBNB: number;
  userEarningsBNB: number;
  userEarningsUSDT: number;
  userTokens: number;
  activitiesLength: number;
  progress: number;
}

export function TokenProgress(props: TokenProgressProps) {
  const {
    tokenUSDTPrice,
    tokenBNBPrice,
    tokensSold,
    totalTokens,
    userId,
    userDepositsUSDT,
    userDepositsBNB,
    userEarningsBNB,
    userEarningsUSDT,
    userTokens,
    activitiesLength,
    progress,
  } = props;

  const activities = demoActivities;
  const [selectedToken, setSelectedToken] = useState("USDT");
  const [amount, setAmount] = useState("");
  const [showActivities, setShowActivities] = useState(false);

  const handleAmountChange = (value: string) => {
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const calculateTokenAmount = useCallback(
    (inputAmount: string) => {
      const numAmount = parseFloat(inputAmount) || 0;
      return formatCurrency(
        numAmount / (selectedToken === "USDT" ? tokenUSDTPrice : tokenBNBPrice)
      );
    },
    [selectedToken, tokenUSDTPrice, tokenBNBPrice]
  );

  const handlePurchase = () => {
    console.log(`Purchasing ${amount} with ${selectedToken}`);
  };

  return (
    <div className="space-y-6 backdrop-blur-xl gradient-card glass-cardx rounded-3xl p-6 md:p-8 overflow-x-auto">
      <div className="flex md:flex-row justify-between md:justify-between items-centers md:items-center gap-4">
        <div className="flex items-start gap-2 flex-col">
          <span className="py-1 px-3 text-[8px] md:text-sm glass-card">Current price</span>
          <div className="flex items-center justify-center gap-1">
            <Image
              src="/coin.svg"
              alt="Ucchain-logo"
              width={12}
              height={12}
              className="md:w-5 md:h-5 w-3 h-3"
            />
            <span className="text-gray-200 md:text-sm text-[8px]">1 Ucchain =</span>
            <div className="flex items-center gap-2">
              <img
                src="/images/tether.svg"
                alt="USDT"
                className="w-5 h-5"
              />
              <span className="text-[#F0B90B] md:text-sm text-[8px] font-semibold">
                {formatCurrency(tokenUSDTPrice, 3)} USDT
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-end gap-2 flex-col">
          <span className="py-1 px-3 glass-card text-[8px] md:text-sm">Next price</span>
          <div className="flex items-center justify-center gap-1">
            <Image
              src="/coin.svg"
              alt="Ucchain-logo"
              width={12}
              height={12}
              className="md:w-5 md:h-5 w-3 h-3"
            />
            <span className="text-gray-200 md:text-sm text-[8px]">1 Ucchain =</span>
            <div className="flex items-center gap-2">
              <img
                src="/images/tether.svg"
                alt="USDT"
                className="w-3 h-3 md:w-5 md:h-5"
              />
              <span className="text-[#F0B90B] md:text-sm text-[8px] font-semibold ">
                0.125 USDT
              </span>
            </div>
          </div>
        </div>
      </div>

      <Progress
        value={progress}
        tokensSold={tokensSold}
        totalTokens={totalTokens}
        className="h-4 rounded-xl bg-secondary"
        indicatorClassName="bg-gradient-to-r from-[#F0B90B] to-[#FCD435]"
      />

      <div className="mt-20 p-1 md:p-8">
        <h2 className="text-sm md:text-xl mb-8 text-white ">Step 1 - <span className=" text-gray-400">
          Select the Payment Method (BEP20)
        </span> </h2>

        <div className="flex w-full md:w-[40%] mx-auto items-center justify-center p-1 bg-card glass-card gap-4 mb-8">
          {Object.entries(SUPPORTED_TOKENS).map(([symbol, details]) => (
            <Button
              key={symbol}
              variant={selectedToken === symbol ? "secondary" : "ghost"}
              onClick={() => setSelectedToken(symbol)}
              className="flex items-center gap-1 w-full"
            >
              <img src={details.icon} alt={symbol} className="w-6 h-6" />
              {symbol}
            </Button>
          ))}
        </div>

        <h2 className="text-sm md:text-xl mb-8 text-white ">Step 2 - <span className=" text-gray-400">
          Enter the Amount of Token You Would Like to Purchase
        </span> </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
          {selectedToken === "BNB" ? (
            <div className="col-span-2 mb-8 rounded-full p-3 glass-card w-fit mx-auto text-center text-gray-400 text-lg md:text-xl font-semibold">
              Coming Soon
            </div>
          ) : (
            <>
              <AmountInput
                value={amount}
                onChange={handleAmountChange}
                token={selectedToken}
                tokenIcon={SUPPORTED_TOKENS[selectedToken].icon}
              />
              <AmountInput
                value={amount ? calculateTokenAmount(amount) : ''}
                onChange={() => { }}
                token="Ucchain"
                tokenIcon="/images/icon.png"
                readOnly
              />
            </>
          )}
        </div>

        {/* <Button
          onClick={handlePurchase}
          disabled={!amount || parseFloat(amount) <= 0}
          className="w-full gradient-btn  text-whitex rounded py-2 px-4 "
        >
          Purchase
        </Button> */}
        <Button 
            onClick={handlePurchase}
            disabled={!amount || parseFloat(amount) <= 0}
            variant="secondary" 
            className="bg-gradient-to-r from-[#966602] via-[#F9F400]  to-[#966602] w-full rounded-full hover:bg-yellow-500 text-black"
          >
            Buy UCC
          </Button>
      </div>
    </div>
  );
}
