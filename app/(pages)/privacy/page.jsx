import Content_Info from "@/app/components/Content_Info";
import React from "react";

export const metadata = {
  title: "Stay Informed. Stay Hydrated - Aquatec",
  description:
    "Subscribe to our newsletter to get the latest blog drops straight to your inbox! - Aquatec",
  metadataBase: new URL("www.myaquatec.com/privacy"),
  alternates: {
    canonical: "/privacy",
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

const Privacy = () => {
  return (
    <main>
      <Content_Info />
    </main>
  );
};

export default Privacy;
