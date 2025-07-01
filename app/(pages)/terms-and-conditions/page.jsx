import Content_Info from "@/app/components/Content_Info";
import React from "react";

export const metadata = {
  title: "Terms and Conditions - Aquatec",
  description: "Our Terms and Conditions - Aquatec",
  metadataBase: new URL("https://www.myaquatec.com/terms-and-conditions"),
  alternates: {
    canonical: "/terms-and-conditions",
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
    title: "Terms and Conditions - Aquatec",
    description: "Our Terms and Conditions - Aquatec",
    url: "https://www.myaquatec.com/privacy",
    siteName: "Aquatec",
    images: [
      {
        url: "../public/logo.png", // Place your image in the public folder
        width: 63.04,
        height: 93.22,
        alt: "Aquatec - Stay Hydrated, Anytime, Anywhere",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const Terms = () => {
  return (
    <main>
      <Content_Info />
    </main>
  );
};

export default Terms;
