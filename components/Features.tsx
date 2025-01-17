"use client";

import { motion } from "framer-motion";
import { Wallet, ArrowUpRight, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function Features() {
  const features = [
    {
      title: "Connect Wallet",
      description: "Set up and connect a digital wallet compatible with Ucchain.",
      src: "/images/icon.svg"
    },
    {
      title: "Purchase UCC",
      description: "Use crypto or fiat to buy UCC tokens.",
      src: "/icon2.svg"
    },
    {
      title: "Hold & Earn",
      description: "Store UCC safely and enjoy potential rewards.",
      src: "/images/icon(2).svg"
    }
  ];

  return (
    <section className="pt-16 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 flex flex-col"
      >
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-3xl font-medium mb-4">
            Participate In UCC Seed Sale
          </h2>
          <p className="text-xl md:text-3xl font-medium">
            And Get <span className="gradient-text">High Returns</span>
          </p>
          <p className="text-gray-400 mt-2">Own UCC in 3 simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
        <Image width={40} height={40} src="/images/connector.svg" alt="" className="w-72  absolute left-[20%] top-10" />
        <Image width={40} height={40} src="/images/connector(1).svg" alt="" className="w-72  absolute right-[20%] top-12" />
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-black/40 p-6 rounded-xl h-full">
                <Image width={40} height={40} src={feature.src} alt="" className="w-20 h-20 mx-auto mb-4 text-yellow-500" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#FFFDF0]/80">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mx-auto"
            >
        <Image width={100} height={100} src="/img1.svg" alt="" className="w-[90%] animate-pulse mx-auto" />
              
        </motion.div>
      </motion.div>
    </section>
  );
}