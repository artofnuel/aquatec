import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export const Assets = {
  logo: require("../assets/logo.svg").default,
  hero_img: require("../assets/hero_img.svg").default,
  hero_img_mobile: require("../assets/hero_img_mobile.svg").default,
  features_img1: require("../assets/features_img1.svg").default,
  features_img2: require("../assets/features_img2.svg").default,
  apple_store: require("../assets/apple_store.svg").default,
  android_store: require("../assets/android_store.svg").default,
  access_icon: require("../assets/access_icon.svg").default,
  flexible_icon: require("../assets/flexible_icon.svg").default,
  timely_icon: require("../assets/timely_icon.svg").default,
  earn_icon: require("../assets/earn_icon.svg").default,
  avatar: require("../assets/avatar.svg").default,
  fill_star_icon: require("../assets/fill_star_icon.svg").default,
  outline_star_icon: require("../assets/outline_star_icon.svg").default,
  download: require("../assets/download.svg").default,
  contact: require("../assets/contact.svg").default,
  pattern: require("../assets/pattern.svg").default,
};

export const FeaturesData = [
  {
    id: 1,
    title: `Buy Instantly`,
    subtitle: `Browse & Pick Your Favourite Water Brands`,
    description: `Discover a wide range of trusted water brands in different bottle sizes and packaging options. Whether you're stocking up for home, the office, or special events, simply choose what you need and enjoy fast, reliable delivery right to your doorstep. Stay refreshed without the hassle.`,
    image: Assets.features_img1,
  },
  {
    id: 2,
    title: `Subscription`,
    subtitle: `Never Run Out of Water Again`,
    description: `Stay stocked with our flexible subscription plans. Perfect for homes, offices, gyms, and events. Choose from daily, twice a week, 3 times a week, weekend only deliveries, etc.—sit back, relax and receive your water purchase.`,
    image: Assets.features_img2,
    apple: Assets.apple_store,
    android: Assets.android_store,
  },
];

export const ExploreData = [
  {
    id: 1,
    title: `Access to Multiple Brands`,
    description: `Choose from a wide selection of trusted water brands, from bottles to dispensers— we've got your thirst covered.`,
    image: Assets.access_icon,
  },
  {
    id: 2,
    title: `Flexible Ordering Options`,
    description: `Buy instantly for one-time needs or subscribe for regular deliveries — daily, weekly, or monthly. You're always in control.`,
    image: Assets.flexible_icon,
  },
  {
    id: 3,
    title: `Timely & Reliable Delivery`,
    description: `Your water, right when you need it. Enjoy same-day or scheduled deliveries to your home, office, or event.`,
    image: Assets.timely_icon,
  },
  {
    id: 4,
    title: `Earn Coins as You Shop`,
    description: `Get rewarded every time you order. Collect coins and redeem them for discounts and exclusive offers.`,
    image: Assets.earn_icon,
  },
];

export const TestimonialsData = [
  {
    id: 1,
    name: "Sarah Musa",
    avatar: Assets.avatar,
    rating: [
      Assets.fill_star_icon,
      Assets.fill_star_icon,
      Assets.fill_star_icon,
      Assets.fill_star_icon,
      Assets.outline_star_icon,
    ],
    review: `Aquatec saves me every week. I Never run out of water anymore! Fast delivery, great service. Highly recommend.`,
  },
  {
    id: 2,
    name: "Sarah Musa",
    avatar: Assets.avatar,
    rating: [
      Assets.fill_star_icon,
      Assets.fill_star_icon,
      Assets.fill_star_icon,
      Assets.fill_star_icon,
      Assets.fill_star_icon,
    ],
    review: `Honestly, this app blew me away. I ordered water late in the afternoon and it still got to me the same day. The app is smooth, and I love that I can choose different brands and sizes depending on my needs.`,
  },
  {
    id: 3,
    name: "Sarah Musa",
    avatar: Assets.avatar,
    rating: [
      Assets.fill_star_icon,
      Assets.fill_star_icon,
      Assets.fill_star_icon,
      Assets.fill_star_icon,
      Assets.outline_star_icon,
    ],
    review: `Aquatec has completely changed how I get water for my home. Before, I'd have to go out, carry heavy bottles, and sometimes wait hours for delivery. Now, I just place an order in the app and it arrives right when I need it. I even subscribed for weekly deliveries so I never run out. It's convenient, fast, and reliable. I pitched the subscription option to my company. My office gets water right on schedule, every week. And then their customer support team is always helpful if we need to make adjustments.👍👍👍`,
  },
  {
    id: 4,
    name: "Sarah Musa",
    avatar: Assets.avatar,
    rating: [
      Assets.fill_star_icon,
      Assets.fill_star_icon,
      Assets.fill_star_icon,
      Assets.fill_star_icon,
      Assets.fill_star_icon,
    ],
    review: `I've recommended Aquatec to all my neighbors. I've saved a lot using the coins I earned from regular purchases.`,
  },
  {
    id: 5,
    name: "Sarah Musa",
    avatar: Assets.avatar,
    rating: [
      Assets.fill_star_icon,
      Assets.fill_star_icon,
      Assets.fill_star_icon,
      Assets.fill_star_icon,
      Assets.outline_star_icon,
    ],
    review: `Nice App, great service, and it's super easy to use. 10/10.
❤️❤️`,
  },
];

export const SocialsData = [
  {
    link: "https://www.linkedin.com",
    icon: <FaLinkedin className="h-6 w-6" />,
  },
  {
    link: "https://www.facebook.com",
    icon: <FaFacebookSquare className="h-6 w-6" />,
  },
  {
    link: "https://www.whatsapp.com",
    icon: <FaSquareWhatsapp className="h-6 w-6" />,
  },
  {
    link: "https://www.twitter.com",
    icon: <FaTwitter className="h-6 w-6" />,
  },
  {
    link: "https://www.instagram.com",
    icon: <FaInstagramSquare className="h-6 w-6" />,
  },
];

export const CompanyLinks = [
  {
    name: "Company",
    links: ["/#features", "/company"],
  },
  {
    name: "Support",
    links: ["/faqs", "/blog", "/contact"],
  },
  {
    name: "Legal",
    links: ["/terms-and-conditions", "/privacy"],
  },
];
