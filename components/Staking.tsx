"use client";

import { motion } from "framer-motion";
import { Wallet, Lock, TrendingUp, Shield } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function Staking() {
  const stakingSteps = [
    { icon: Wallet, title: "Deposit Your $UCC" },
    { icon: Lock, title: "Funds Locked" },
    { icon: TrendingUp, title: "Earn Staking Rewards" },
    { icon: Shield, title: "Network security" }
  ];

  const tiers = [
    { tier: "Tier 1", stake: "100-500 $UCC", period: "30 days", apy: "2.5%" },
    { tier: "Tier 2", stake: "500-900 $UCC", period: "90 days", apy: "2.5%" },
    { tier: "Tier 3", stake: "1000 $UCC", period: "180 days", apy: "2.5%" }
  ];

  return (
    <section id="staking" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
             <span className="gradient-text"> Stake & Earn </span> Additional Rewards
          </h2>
          <p className="text-muted/80 max-w-lg mx-auto">
          The Ucchain ecosystem is designed to reward participants, encouraging active engagement through staking opportunities. By staking FNX coins, users can earn additional rewards while supporting the stability of the Ucchain blockchain.
          </p>
        </motion.div>

        <div className="relative">
          <Image width={40} height={40} src="/blockchain.svg" alt="" className="w-[80%] mx-auto mt-10" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8 -mt-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-xl text-center glass-card"
            >
              <div className="flex gap-3 justify-between ">
              <div className="gradient-text mb-4 rounded-full px-3 py-1 border">{tier.apy}</div>
              <h3 className="font-bold mb-2">{tier.tier}</h3>
              </div>
              
              <div className="text-muted/80 flex pb-4 justify-between">
                <p>Stake:</p>
                <p>{tier.stake}</p>
              </div>
              <div className="text-muted/80 flex justify-between">
                <p>Period: </p>
                <p>{tier.period}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button className="gradient-btn rounded-full hover:bg-yellow-500 text-black">
            Stake Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}