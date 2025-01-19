"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-xl border border-yellow-600/10 bg-yellow-700/10 m-3 rounded-full">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={require("../public/logo.svg")} alt="ucc Logo" className="w-20 h-20 md:w-32 md:h-32" />
              {/* <span className="text-xl font-bold">UCC</span> */}
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="#why-us" className="text-[#A6A9A8] hover:text-white transition-colors">
                About us
              </Link>
              <Link href="#staking" className="text-[#A6A9A8] hover:text-white transition-colors">
                Staking
              </Link>
              <Link href="#tokenomics" className="text-[#A6A9A8] hover:text-white transition-colors">
                Tokenomics
              </Link>
              <Link href="#roadmap" className="text-[#A6A9A8] hover:text-white transition-colors">
                Roadmap
              </Link>
              <Link href="#faqs" className="text-[#A6A9A8] hover:text-white transition-colors">
                FAQs
              </Link>
            </div>
          </div>

          <Button 
            variant="secondary" 
            className=" md:inline-block bg-gradient-to-r from-[#966602] via-[#F9F400] to-[#966602] text-xs md:text-base rounded-full hover:bg-yellow-500 text-black"
          >
            Connect Wallet
          </Button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[#A6A9A8] hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden mt-2"
          >
            <div className="flex flex-col space-y-4">
              <Link href="#why-us" className="text-[#A6A9A8] hover:text-white transition-colors">
                Why us?
              </Link>
              <Link href="#staking" className="text-[#A6A9A8] hover:text-white transition-colors">
                Staking
              </Link>
              <Link href="#tokenomics" className="text-[#A6A9A8] hover:text-white transition-colors">
                Tokenomics
              </Link>
              <Link href="#roadmap" className="text-[#A6A9A8] hover:text-white transition-colors">
                Roadmap
              </Link>
              <Link href="#faqs" className="text-[#A6A9A8] hover:text-white transition-colors">
                FAQs
              </Link>

              <Button 
                variant="secondary" 
                className="bg-gradient-to-r from-[#966602] via-[#F9F400] to-[#966602] rounded-full hover:bg-yellow-500 text-black w-full text-xs md:text-base"
              >
                Connect Wallet
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}