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
    icon: "/icon.svg", // or "/favicon.ico" if you prefer
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
