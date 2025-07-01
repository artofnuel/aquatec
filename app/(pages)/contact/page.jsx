import React from "react";
import ContactHero from "./components/ContactHero";
import FrequentlyAsked from "../company/components/FrequentlyAsked";

export const metadata = {
  title: "Contact Us - Aquatec",
  description: "Our friendly team would love to hear from you. - Aquatec",
  metadataBase: new URL("https://www.myaquatec.com/contact"),
  alternates: {
    canonical: "/contact",
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
    title: "Stay Hydrated, Anytime, Anywhere - Aquatec",
    description: `Our friendly team would love to hear from you. - Aquatec`,
    url: "https://www.myaquatec.com/contact",
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

const Contact = () => {
  return (
    <main>
      <ContactHero />
      <FrequentlyAsked />
    </main>
  );
};

export default Contact;
