import Hero from "@/components/sections/Hero";
import Context from "@/components/sections/Context";
import Framework from "@/components/sections/Framework";
import Scenario from "@/components/sections/Scenario";
import Metrics from "@/components/sections/Metrics";
import AIZone from "@/components/sections/AIZone";
import Closer from "@/components/sections/Closer";
import SectionNav from "@/components/SectionNav";

export default function Home() {
  return (
    <main className="overflow-x-clip max-w-full">
      <Hero />
      <Context />
      <Framework />
      <Scenario />
      <Metrics />
      <AIZone />
      <Closer />
      <SectionNav />
    </main>
  );
}
