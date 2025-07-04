import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/EudoxusSans-Regular.woff2", // from /public
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/EudoxusSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/EudoxusSans-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/EudoxusSans-ExtraBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/EudoxusSans-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/EudoxusSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Stay Hydrated, Anytime, Anywhere - Aquatec",
  description: `Order top water brands and get them delivered to your door. One-time or on a
schedule—Aquatec has you covered. - Aquatec`,
  metadataBase: new URL("https://www.myaquatec.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Stay Hydrated, Anytime, Anywhere - Aquatec",
    description: `Order top water brands and get them delivered to your door. One-time or on a
schedule—Aquatec has you covered. - Aquatec`,
    url: "https://www.myaquatec.com",
    siteName: "Aquatec",
    images: [
      {
        url: "https://myaquatec.com/logo.png", // Your logo/preview image
        width: 1200,
        height: 630,
        alt: "Aquatec - Stay Hydrated, Anytime, Anywhere",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stay Hydrated, Anytime, Anywhere - Aquatec",
    description: `Order top water brands and get them delivered to your door. One-time or on a
schedule—Aquatec has you covered. - Aquatec`,
    images: ["https://myaquatec.com/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${myFont.className} text-pretty antialiased`}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
