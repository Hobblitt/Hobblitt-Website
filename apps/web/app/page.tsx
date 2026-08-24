"use client";

import { useState } from "react";



import { Community } from "@/components/home/community";
import { Hero, type CapabilityKey } from "@/components/home/hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { SelectedWork } from "@/components/home/selected-work";
import { SummonHobblitt } from "@/components/home/summon-hobblitt";
import { WhoIsHobblitt } from "@/components/home/who-is-hobblitt";
import { WhyHobblitt } from "@/components/home/why-hobblitt";
import { Capabilities } from "@/components/home/capabilites";
import { NextUp } from "@/components/home/next-up";

export default function FrontPage() {
  const [activeCapability, setActiveCapability] = useState<CapabilityKey>("BUILD");

  return (
    <div className="bg-[#111827] text-[#F8FAFC]">
      <Hero activeCapability={activeCapability} onSelectCapability={setActiveCapability} />
      <WhoIsHobblitt />
      <WhyHobblitt />
      <Capabilities activeCapability={activeCapability} onSelectCapability={setActiveCapability} />
      <HowWeWork />
      <SelectedWork />
      <Community />
      <SummonHobblitt />
      <NextUp />
    </div>
  );
}