import React from "react";
import CompanyHero from "./components/CompanyHero";
import CoreValues from "./components/CoreValues";
import Team from "./components/Team";
import FrequentlyAsked from "./components/FrequentlyAsked";
import Download from "@/app/components/Download";

export const metadata = {
  title: "Refreshing Convenience, One Delivery at a Time - Aquatec",
  description:
    "At Aquatec, we believe access to clean, quality water should be easy, reliable, and stress-free. - Aquatec",
  // metadataBase: new URL(""),
  alternates: {
    canonical: "/company",
    languages: {
      "en-US": "/en-US",
    },
  },
};

const Company = () => {
  return (
    <main className="text-text2">
      <CompanyHero />
      <CoreValues />
      <Team />
      <FrequentlyAsked />
      <Download />
    </main>
  );
};

export default Company;
