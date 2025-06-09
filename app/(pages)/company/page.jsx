import React from "react";
import CompanyHero from "./components/CompanyHero";
import CoreValues from "./components/CoreValues";
import Team from "./components/Team";
import FrequentlyAsked from "./components/FrequentlyAsked";
import Download from "@/app/components/Download";

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
