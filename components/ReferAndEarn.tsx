"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import Image from "next/image";

export function ReferAndEarn() {
    return (
        <section className="py-20 relative">
            <Image src={require("../public/images/bg.png")} alt="refer" className="absolute w-[200%] -top-[67%] " />

            <div className="max-w-6xl mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="gradient-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
                >

                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-xl md:text-3xl font-bold mb-6">
                            <span className="gradient-text">Refer & Earn:</span> Join the Ucchain<br />
                            Community Affiliate Program
                        </h2>
                        <p className="text-sm mb-6">
                            Get 25% in Rewards for every successful referral
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex text-sm items-center space-x-2">
                                <span className="text-yellow-500">•</span>
                                <span>12.5% in USDT: Instant, stable, and secure</span>
                            </li>
                            <li className="flex text-sm items-center space-x-2">
                                <span className="text-yellow-500">•</span>
                                <span>12.5% in UCC Coins: Grow with the value of Ucchain's native coin</span>
                            </li>
                        </ul>
                        <Button
                            className="gradient-btn rounded-full hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold px-8"
                        >
                            Join Us
                        </Button>
                    </div>

                    {/* Decorative Elements */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="absolute top-0 right-0 w-1/2 h-full"
                    >
                        {/* Megaphone */}
                        <div className="absolute right-12 top-1/2 -translate-y-1/2 w-48 h-48 transform rotate-12">
                            <div className="w-full h-full bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 rounded-full" />
                        </div>
                        <div className="relative">
                            <Image width={40} height={40} src="/object.svg" alt="" className="w-[60%] animate-pulse mx-auto mt-10" />

                        </div>

                        {/* Floating Coins */}
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{
                                    y: [20, -20, 20],
                                    opacity: 1
                                }}
                                transition={{
                                    y: {
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3
                                    },
                                    opacity: {
                                        duration: 0.5,
                                        delay: i * 0.2
                                    }
                                }}
                                className="absolute"
                                style={{
                                    right: `${20 + i * 15}%`,
                                    top: `${20 + i * 15}%`
                                }}
                            >
                                <div className="w-8 h-8 rounded-full bg-yellow-500/30 flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full bg-yellow-500/50" />
                                </div>
                            </motion.div>
                        ))}

                        {/* Stars */}
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={`star-${i}`}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0.8, 1, 0.8]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.5
                                }}
                                className="absolute w-2 h-2 text-yellow-500"
                                style={{
                                    right: `${10 + i * 20}%`,
                                    top: `${15 + i * 15}%`
                                }}
                            >
                                ★
                            </motion.div>
                        ))}

                        
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}