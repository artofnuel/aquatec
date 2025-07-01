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
