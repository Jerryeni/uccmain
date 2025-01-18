"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Usdt3DAnimation from "./usdtAnimation/threeJs"; 

export function Features() {
  const features = [
    {
      title: "Connect Wallet",
      description: "Set up and connect a digital wallet compatible with Ucchain.",
      src: "/images/icon.svg",
    },
    {
      title: "Purchase UCC",
      description: "Use crypto or fiat to buy UCC tokens.",
      src: "/icon2.svg",
    },
    {
      title: "Hold & Earn",
      description: "Store UCC safely and enjoy potential rewards.",
      src: "/images/icon(2).svg",
    },
  ];

  return (
    <section className="relative pt-16">
      {/* 3D Animation Background */}
      {/* <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Usdt3DAnimation />
      </div> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 flex flex-col relative z-10"
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

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-black/40 p-6 rounded-xl h-full">
                <Image
                  width={40}
                  height={40}
                  src={feature.src}
                  alt={feature.title}
                  className="w-20 h-20 mx-auto mb-4"
                />
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
          className="text-center mx-auto absolute -bottom-32 left-32 "
        >
          <Image
            width={100}
            height={100}
            src="/img1.svg"
            alt="Promo Image"
            className="w-[90%] animate-pulse mx-auto opacity-10"
          />
        </motion.div>
        {/* 3D Animation Background */}
      {/* <div className="absolutex inset-0 bottom-0 w-full h-full pointer-events-none"> */}
        <Usdt3DAnimation />
      {/* </div> */}
      </motion.div>
    </section>
  );
}
