"use client";

import { motion } from "framer-motion";
import { Users, LineChart, Shield, Coins } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function WhyUcchain() {
  const features = [
    {
      title: "Community-driven Decision-making",
      description: "Ucchain places its community at the heart of its ecosystem, fostering collaboration and empowering users through transparent governance.",
      src: "/images/bg2.png"
    },
    {
      title: "Secure & Transparent Ledger",
      description: "The Ucchain blockchain uses an immutable ledger, ensuring that all transactions are verifiable and transparent.",
      src: "/images/img1.png"
    },
    {
      title: "Potential high returns",
      description: "Significant growth potential with the listing at $1",
      src: "/img2.svg"
    },
    {
      title: "Low gas fee",
      description: "Transactions on Ucchain are cost-efficient, with customizable gas fees that remain affordable regardless of network activity.",
      src: "/images/bg2.png"
    }
  ];

  return (
    <section id="why-us" className="py-20 ">
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="">
          <Image width={40} height={40} src="/images/bg.png" alt="" className="w-full absolute animate-pulsex -mt-32 -z-5 mx-auto top-0" />

        </div>
          <h2 className="text-4xl font-bold mb-4">
            Why <span className="gradient-text">Invest</span> In Ucchain?
          </h2>
          <p className="text-gray-400">
            Ucchain is built on a robust and innovative architecture designed to address the inefficiencies of
            traditional blockchains, offering a platform that is scalable, secure, and efficient.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 relative">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="gradient-card  rounded-xl relative"
            >
              <h3 className="text-sm text-[#FFFDF0]/80 p-6 font-semibold mb-2">{feature.title}</h3>
              <p className="text-white p-6">{feature.description}</p>
              <div className="">
                <Image width={40} height={40} src={feature.src} alt="" className="w-[80%] mx-auto mt-10" />

              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button className="gradient-btn rounded-full xbg-yellow-500/90 hover:bg-yellow-500 text-black">
            Connect Wallet
          </Button>
        </motion.div>
      </div>
    </section>
  );
}