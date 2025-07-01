import Content_Info from "@/app/components/Content_Info";
import React from "react";

export const metadata = {
  title: "Privacy Policy - Aquatec",
  description: "Welcome to our Privacy Policy - Aquatec",
  metadataBase: new URL("https://www.myaquatec.com/privacy"),
  alternates: {
    canonical: "/privacy",
    languages: {
      "en-US": "/en-US",
    },
  },
  icons: {
    icon: "/logo.png", // or "/favicon.ico" if you prefer
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Privacy Policy - Aquatec",
    description: `Welcome to our Privacy Policy - Aquatec`,
    url: "https://www.myaquatec.com/privacy",
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

const Privacy = () => {
  return (
    <main>
      <Content_Info />
    </main>
  );
};

export default Privacy;
