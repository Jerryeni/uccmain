"use client";

import { motion } from "framer-motion";
import { Lock, Coins, Users } from "lucide-react";
import Image from "next/image";

const PieChart = () => {
  const data = [
    { name: "Seed sales", value: 40, color: "var(--chart-1)" },
    { name: "Staking rewards", value: 30, color: "var(--chart-2)" },
    { name: "Ecosystem development", value: 20, color: "var(--chart-3)" },
    { name: "Partnerships", value: 10, color: "var(--chart-4)" }
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
      {data.map((item, i) => {
        const angle = (item.value / total) * 360;
        const x1 = 50 + 40 * Math.cos((currentAngle * Math.PI) / 180);
        const y1 = 50 + 40 * Math.sin((currentAngle * Math.PI) / 180);
        const x2 = 50 + 40 * Math.cos(((currentAngle + angle) * Math.PI) / 180);
        const y2 = 50 + 40 * Math.sin(((currentAngle + angle) * Math.PI) / 180);
        const largeArcFlag = angle > 180 ? 1 : 0;
        const pathData = `
          M 50 50
          L ${x1} ${y1}
          A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}
          Z
        `;
        currentAngle += angle;

        return (
          <path
            key={item.name}
            d={pathData}
            fill={item.color}
            className="transition-all duration-300 hover:opacity-90"
          >
            <title>{`${item.name}: ${item.value}%`}</title>
          </path>
        );
      })}
      <circle cx="50" cy="50" r="25" fill="black" />
    </svg>
  );
};

const features = [
  {
    icon: Lock,
    title: "Limited supply",
    description: "A limited supply model enhances scarcity, boosting its long-term value."
  },
  {
    icon: Coins,
    title: "Sustainability",
    description: "Ucchain boasts a limited supply of 20 million FNX Coins, ensuring scarcity and sustainable growth!"
  },
  {
    icon: Users,
    title: "Strategic allocation",
    description: "Allocation is strategically divided among seed sales, staking rewards, ecosystem development, and partnerships to ensure balanced growth."
  }
];

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Ucchain <span className="gradient-text">Tokenomics</span>
          </h2>
          <p className="text-muted/80 max-w-lg mx-auto">
            Ucchain has designed its tokenomics to ensure sustainable growth
            and value appreciation for UCC Coin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square flex flex-col py-5 max-w-md glass-card rounded-xl mx-auto"
          >
            <div className="flex items-center justify-center z-10">
              <div className="text-center">
                <div className="text-2xl font-bold">30 Million</div>
                <div className="text-sm text-gray-400">Total Supply</div>
              </div>
            </div>
            {/* <PieChart /> */}
            <div className="relative">
              <Image width={40} height={40} src="/images/staking2.svg" alt="" className="w-[60%] mx-auto mt-10" />
            </div>
          </motion.div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-black/40 p-6 rounded-xl glass-card backdrop-blur-sm"
              >
                {/* <feature.icon className="w-8 h-8 text-yellow-500 mb-4" /> */}
                <h3 className="text-sm font-medium mb-2">{feature.title}</h3>
                <p className="text-muted/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}