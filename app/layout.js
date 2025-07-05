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
        url: "https://my-general-web-bucket.s3.us-east-1.amazonaws.com/My%20Aquatec/logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA42HZCB53MV2Q5HFF%2F20250705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250705T145649Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLWVhc3QtMSJHMEUCIQDOvIA3bwWPwB1Oi%2BAcSV0pYkQ229iRs5gVfqBijnEPzQIgICrzjmCCrKG0Iw7PrGeL91svE%2FS6Ai5is9d%2BqcmLE80q1gIISBAAGgw4ODA5OTA2MjE1NTgiDNIpkA0Yecu8j%2F5GLSqzAreCvSYE6xH2dYB%2Fqn3IwXSRhwicDRnAxjca1c2VFq3e%2FaOXJ8MNZxqZLTzuPsASxlpgfJzXnlcbl5g6Im5BCcjAXf%2B8zt19tyeHyq3%2FmnP2FO0TtHlWE7BFDK0ME9MEJucQ9fVM%2Bwnpi129LlXu%2BgmRs22qH8Hui7h8g8%2BjQcf2hVLdLOI3hqOt8iONqtO2SqOri47Es5WqQZ7DO36g7kmwCgdztxWBJBSzmhfGWj7n3qTeSVVnnPrV2%2B7H8UaPX2qKM6FLPac4wylJrUVr1XRiW1DmmJ%2FYW1vFQvf%2BcOGzKAepClTwCDxEwEKqEb9hQK8hSsshov56CodB6%2Fgmj6c5LMlS2O7KKUN4b5L2HX81g5JMgjxzOhAuPI3bCABrxqwGqZa1Dk7zdba53qojLSQbCIgwqfOkwwY6rQJ8ftFT2qo9TliH1%2B450AJ%2BSaJ4AcGo2Db%2FGuxyNST6FO2Os7%2Fc3CqYgSCfpyXzJXWQzXFNLmdabtQP7M%2B%2FRzEjB1vXwEx1gLY6n7mKl3FkxDehtbiJyrilj78Cg%2FZg2NCAwJggTJUanKd%2BeMTmXfqPXNQLsu1ljfkc1lNk8y3tPzKxkvipjPY10UULrerBaIyOmYi92bEtLn4tZSA4Aee0NnVHBrFZWoYa%2FXsUWEcOcUIB8xDBw6DpYqXduxocHdzEynIlX5gjjkGCuDeoF8z2pRgZ43YV9j8wA29I9XzaUczXoWAxxCRqSIWPcwP1j2%2Bm1E4vGGef5mUdE0N0c3RGBhDrdjipgLYc%2B3XjkVRtnOD0hMIk9ZZuEErvqXXySyTweFcLHE%2F2TY5sOpTc&X-Amz-Signature=55c336e6f0528c2bae147d0edefdebbc53e7442915fda7d87ce28cc1920ba776&X-Amz-SignedHeaders=host&response-content-disposition=inline", // Your logo/preview image
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
