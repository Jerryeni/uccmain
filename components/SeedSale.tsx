"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CountdownTimer } from "./ui/countdown-timer";
import { TokenProgress } from "./ui/token-progress";

interface PhaseIndicatorProps {
  currentPhase: number;
  totalPhases: number;
}

const PhaseIndicator: React.FC<PhaseIndicatorProps> = ({ currentPhase, totalPhases }) => {
  return (
    <h1 className="relative md:text-4xl text-2xl font-bold mb-2 w-fit mx-auto text-white bg-clip-text text-transparent backdrop-blur-lg shadow-inner">
      <span className="absolute inset-0 shadow-inner bg-white/30 blur-lg"></span>
      <span className="relative z-10">
        UCC SEED SALE PHASE {currentPhase}
        <sup className="text-sm align-super text-gray-400">/{totalPhases}</sup>
      </span>
    </h1>


  );
};

export function SeedSale() {
  const [progress] = useState(65);
  const [timeLeft, setTimeLeft] = useState({
    days: "01",
    hours: "03",
    minutes: "41",
    seconds: "24"
  });

  useEffect(() => {
    const timer = setInterval(() => {
      // Add countdown logic here if needed
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-20 flex mb-10 flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 text-center relative"
      >
        {/* Background Effects */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,185,11,0.15),transparent_70%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F0B90B]/10 rounded-full blur-3xl" /> */}

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 mt-10 text-center">
          <PhaseIndicator currentPhase={1} totalPhases={10} />
          <p className="md:text-md text-xs text-gray-400 mb-12">ENDS IN</p>

          <CountdownTimer targetDate={new Date("2025-02-04")} />
          <Image src={require("../public/images/bg.png")} alt="Seed Sale" className="absolute w-[200%] top-8 " />

          {/* Stats Bar */}
          <div className="w-full mt-20 max-w-4xl mx-auto backdrop-blur-xl bg-secondary/5 rounded-3xl border border-[#F0B90B]/20 overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F0B90B]/10 rounded-full blur-3xl" />

            <div className="grid grid-cols-3 p-6">
              <div className="text-left">
                <div className="text-xs md:text-sm text-gray-400 mb-1">
                  USDT RAISED
                </div>
                <div className="text-xs md:text-lg font-bold text-[#F0B90B]">
                  12345 USDT
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs md:text-sm text-gray-400 mb-">
                  LISTING DATE
                </div>
                <div className="text-xs md:text-xl font-bold">
                  Announced soon
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs md:text-sm text-gray-400 mb-1">
                  HOLDERS
                </div>
                <div className="text-xs md:text-xl font-bold text-[#F0B90B]">
                  9876
                </div>
              </div>
            </div>

            <div className="">
              <TokenProgress
                tokenBNBPrice={1.23}
                tokenUSDTPrice={0.99}
                userInfo={{}}
                userDepositsUSDT={500}
                userDepositsBNB={2.5}
                userEarningsBNB={0.25}
                userEarningsUSDT={100}
                userId={123}
                userTokens={1000}
                progress={(1234567 * 100) / 10000000}
                tokensSold={1234567}
                totalTokens={10000000}
                activitiesLength={0}
              />
              { }
            </div>
          </div>
        </div>
      </motion.div>
    </section>

    // <section className="pt-24 pb-16">
    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     className="max-w-4xl mx-auto px-4 text-center relative"
    //   >
    //     <h1 className="text-5xl font-bold mb-8">UCC SEED SALE</h1>
    //     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 relative">
    //       {Object.entries(timeLeft).map(([unit, value], i) => (
    //         <div key={unit} className="bg-black/40 p-4 rounded-lg backdrop-blur-sm">
    //           <div className="text-3xl font-bold">{value}</div>
    //           <div className="text-sm text-gray-400">
    //             {unit.toUpperCase()}
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //       <Image src={require("../public/images/bg.png")} alt="Seed Sale"  className="absolute w-full top-6 "/>
    //       <div className="w-full mt-24 max-w-4xl mx-auto backdrop-blur-xl bg-black/40 rounded-3xl border border-[#F0B90B]/20 overflow-hidden">
    //       <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F0B90B]/10 rounded-full blur-3xl" />

    //       <div className="grid grid-cols-3 p-6">
    //         <div className="text-left">
    //           <div className="text-xs md:text-sm text-gray-400 mb-1">
    //            323 USDT RAISED
    //           </div>
    //           <div className="text-xs md:text-lg font-bold text-[#F0B90B]">
    //              USDT
    //           </div>
    //           <div className="text-xs md:text-sm text-gray-400 mb-1">
    //             BNB RAISED
    //           </div>
    //           <div className="text-xs md:text-lg font-bold text-[#F0B90B]">
    //             233 BNB
    //           </div>
    //         </div>
    //         <div className="text-center">
    //           <div className="text-xs md:text-sm text-gray-400 mb-">
    //             LISTING DATE
    //           </div>
    //           <div className="text-xs md:text-xl font-bold">
    //             Announced soon
    //           </div>
    //         </div>
    //         <div className="text-right">
    //           <div className="text-xs md:text-sm text-gray-400 mb-1">
    //             HOLDERS
    //           </div>
    //           <div className="text-xs md:text-xl font-bold text-[#F0B90B]">
    //             32
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className="">
    //         <TokenProgress
    //           tokenBNBPrice={uccInfo.priceBNB}
    //           tokenUSDTPrice={uccInfo.priceUSDT}
    //           userInfo={userUCCInfo.usersInfo}
    //           userDepositsUSDT={userUCCInfo.usersInfo?.[3] ?? 0}
    //           userDepositsBNB={userUCCInfo.usersInfo?.[4] ?? 0}
    //           userEarningsBNB={userUCCInfo.usersInfo?.[6] ?? 0}
    //           userEarningsUSDT={userUCCInfo.usersInfo?.[5] ?? 0}
    //           userId={userUCCInfo.userId}
    //           userTokens={userUCCInfo.usersInfo?.[7] ?? 0}
    //           progress={
    //             uccInfo.totalTokensToBEDistributed &&
    //             (uccInfo.totalTokensToBEDistributed * 100) / 10000000
    //           }
    //           tokensSold={uccInfo.totalTokensToBEDistributed}
    //           totalTokens={10000000}
    //           activities={userUCCInfo.recentActivities}
    //           activitiesLength={userUCCInfo.activityLength}
    //         />
    //         {}
    //       </div> */}
    //     </div>
    //   </motion.div>
    // </section>
  );
}