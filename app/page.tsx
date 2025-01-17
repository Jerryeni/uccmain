import { Navbar } from "@/components/Navbar";
import { SeedSale } from "@/components/SeedSale";
import { Features } from "@/components/Features";
import { WhyUcchain } from "@/components/WhyUcchain";
import { Blockchain } from "@/components/Blockchain";
import { Staking } from "@/components/Staking";
import { Tokenomics } from "@/components/Tokenomics";
import { ReferAndEarn } from "@/components/ReferAndEarn";
import { Roadmap } from "@/components/Roadmap";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { UcchainProjects } from "@/components/UcchainProject";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900">
      <Navbar />
      <SeedSale />
      <Features />
      <WhyUcchain />
      <Blockchain />
      <Staking />
      <Tokenomics />
      <Roadmap />
      <UcchainProjects />
      <ReferAndEarn />
      <FAQ />
      <Footer />
    </main>
  );
}