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
  metadataBase: new URL("https://www.myaquatec.com/company"),
  alternates: {
    canonical: "/company",
    languages: {
      "en-US": "/en-US",
    },
  },
  icons: {
    icon: "/icon.svg", // or "/favicon.ico" if you prefer
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Refreshing Convenience, One Delivery at a Time - Aquatec",
    description: `At Aquatec, we believe access to clean, quality water should be easy, reliable, and stress-free. - Aquatec`,
    url: "https://www.myaquatec.com/company",
    siteName: "Aquatec",
    images: [
      {
        url: "/logo.png", // Place your image in the public folder
        width: 63.04,
        height: 93.22,
        alt: "Aquatec - Stay Hydrated, Anytime, Anywhere",
      },
    ],
    locale: "en_US",
    type: "website",
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
