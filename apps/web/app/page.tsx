"use client";

import { useState } from "react";

import { Capabilities } from "@/components/home/capabilites";
import { Community } from "@/components/home/community";
import { Hero, type CapabilityKey } from "@/components/home/hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { NextUp } from "@/components/home/next-up";
import { SelectedWork } from "@/components/home/selected-work";
import { SummonHobblitt } from "@/components/home/summon-hobblitt";
import { VideoExplainer } from "@/components/home/video-explainer";
import { WhoIsHobblitt } from "@/components/home/who-is-hobblitt";
import { WhyHobblitt } from "@/components/home/why-hobblitt";

export default function FrontPage() {
  const [activeCapability, setActiveCapability] =
    useState<CapabilityKey>("BUILD");

  return (
    <div className="bg-[#111827] text-[#F8FAFC]">
      <Hero
        activeCapability={activeCapability}
        onSelectCapability={setActiveCapability}
      />

      <VideoExplainer src="/video/hobblitt-explainer.mp4" duration="4:12" />

      <WhoIsHobblitt />
      <WhyHobblitt />
      <Capabilities
        activeCapability={activeCapability}
        onSelectCapability={setActiveCapability}
      />
      <HowWeWork />
      <SelectedWork />
      <Community />
      <SummonHobblitt />
      <NextUp />
    </div>
  );
}
