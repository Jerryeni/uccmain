"use client";

import { motion } from "framer-motion";
import { Users, LineChart, Shield, Coins } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function WhyUcchain() {
  const features = [
    {
      title: "Layer-2 Compatibility",
      description: "Ucchain supports Layer-2 solutions, enabling seamless integration with third-party applications.This compatibility allows developers to deploy decentralized applications (dApps), NFTs, and other projects on the Ucchain Chain, leveraging its scalability and low transaction fees. Similar to Other Chains, Ucchain fosters an ecosystem where multiple projects can thrive while relying on the UCC Coin for transaction fees and utility.",
      src: "/images/bg2.png"
    },
    {
      title: "Scalability and Speed",
      description: "Ucchain processes transactions in near real-time, supporting high transaction volumes without delays or bottlenecks. The blockchain’s architecture ensures consistent performance, even during peak network activity, making it ideal for high-volume use cases like gaming, NFTs, and financial applications.",
      src: "/images/img1.png"
    },
    {
      title: "Proof of Authority (PoA) Mechanism",
      description: "Ucchain leverages the Proof of Authority (PoA) mechanism, replacing traditional consensus methods like Proof of Work (PoW) and Proof of Stake (PoS). In PoA, pre-assigned validators verify transactions, ensuring faster and more energy-efficient operations. This mechanism eliminates the need for extensive computational power while maintaining network security and reliability.",
      src: "/img2.svg"
    },
    {
      title: "UCC Coin: The Native Currency",
      description: "At the core of the Ucchain ecosystem lies UCC Coin, the native cryptocurrency that powers all operations on the blockchain. ",
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
            About <span className="gradient-text">Ucchain</span>
          </h2>
          <p className="text-muted/80 max-w-3xl mx-auto text-sm">
          Ucchain is a next-generation blockchain platform designed to overcome the limitations of traditional systems by offering unmatched speed, scalability, and efficiency. Built on the revolutionary Proof of Authority (PoA) mechanism, Ucchain ensures secure and eco-friendly transaction validation while addressing the needs of decentralized finance, NFTs, gaming, and enterprise solutions.
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
              <h3 className="text text-[#FFFDF0]/80 p-6 font-semibold mb-2">{feature.title}</h3>
              <p className="text-white p-6 text-xs">{feature.description}</p>
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