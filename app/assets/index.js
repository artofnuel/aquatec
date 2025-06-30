import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export const Assets = {
  logo: require("../assets/logo.svg").default,
  hero_img: require("../assets/hero_img.png").default,
  hero_img_mobile: require("../assets/hero_img_mobile.png").default,
  features_img1: require("../assets/features_img1.png").default,
  features_img2: require("../assets/features_img2.png").default,
  apple_store: require("../assets/apple_store.png").default,
  android_store: require("../assets/android_store.png").default,
  access_icon: require("../assets/access_icon.svg").default,
  flexible_icon: require("../assets/flexible_icon.svg").default,
  timely_icon: require("../assets/timely_icon.svg").default,
  earn_icon: require("../assets/earn_icon.svg").default,
  avatar: require("../assets/avatar.svg").default,
  jane: require("../assets/jane.jpg").default,
  brian: require("../assets/brian.jpg").default,
  paul: require("../assets/paul.jpg").default,
  jason: require("../assets/jason.jpg").default,
  christy: require("../assets/christy.jpg").default,
  ceo: require("../assets/ceo.jpg").default,
  emmanuel: require("../assets/emmanuel.jpg").default,
  salome: require("../assets/salome.jpg").default,
  judith: require("../assets/judith.jpg").default,
  faceless: require("../assets/faceless.jpg").default,
  fill_star_icon: require("../assets/fill_star_icon.svg").default,
  outline_star_icon: require("../assets/outline_star_icon.svg").default,
  download: require("../assets/download.png").default,
  contact: require("../assets/contact.png").default,
  contact_sent: require("../assets/contact_sent.svg").default,
  pattern: require("../assets/pattern.svg").default,
  reliability: require("../assets/reliability.svg").default,
  innovation: require("../assets/innovation.svg").default,
  customer: require("../assets/customer.svg").default,
  logistics: require("../assets/logistics.svg").default,
  quality: require("../assets/quality.svg").default,
  sustainable: require("../assets/sustainable.svg").default,
  dummy: require("../assets/dummy.png").default,
  group_image1: require("../assets/group_image1.png").default,
  group_image2: require("../assets/group_image2.png").default,
  group_image3: require("../assets/group_image3.png").default,
  group_image4: require("../assets/group_image4.png").default,
  group_image5: require("../assets/group_image5.png").default,
  group_image6: require("../assets/group_image6.png").default,
  group_image_mobile: require("../assets/group_image_mobile.png").default,
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
    name: "Jane Ndiamaka",
    avatar: Assets.jane,
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
    name: "Brian Okeke",
    avatar: Assets.brian,
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
    name: "C.",
    avatar: Assets.faceless,
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
    name: "Jason Okafor",
    avatar: Assets.jason,
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
    name: "P.",
    avatar: Assets.faceless,
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
    links: [
      { name: "Features", href: "/#features" },
      { name: "Company", href: "/company" },
    ],
  },
  {
    name: "Support",
    links: [
      { name: "FAQS", href: "/company/#faqs" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    name: "Legal",
    links: [
      { name: "Terms and Conditions", href: "/terms-and-conditions" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export const GroupImages = [
  { image: Assets.group_image1, height: "h-[450px]" },
  { image: Assets.group_image2, height: "h-[370px]" },
  { image: Assets.group_image3, height: "h-[280px]" },
  { image: Assets.group_image4, height: "h-[280px]" },
  { image: Assets.group_image5, height: "h-[370px]" },
  { image: Assets.group_image6, height: "h-[450px]" },
];

export const ValuesData = [
  {
    title: "Reliability",
    description: `We deliver on our promises — every order, every time. Our customers can always count on us for prompt, dependable service.`,
    icon: Assets.reliability,
  },
  {
    title: "Innovation",
    description: `We embrace technology to improve the way people access water, making delivery smarter, faster, and more efficient.`,
    icon: Assets.innovation,
  },
  {
    title: "Customer-Centricity",
    description: `Your satisfaction drives everything we do. We listen, we adapt, and we're always improving to meet your needs.`,
    icon: Assets.customer,
  },
  {
    title: "Convenience",
    description: `From flexible ordering to doorstep delivery, we prioritize ease at every step. Hydration should be hassle-free.`,
    icon: Assets.logistics,
  },
  {
    title: "Quality",
    description: `We work only with trusted water brands and suppliers to ensure every drop meets the highest standards of safety and purity.`,
    icon: Assets.quality,
  },
  {
    title: "Sustainability",
    description: `We're committed to responsible sourcing and eco-conscious practices that help protect our environment and future.`,
    icon: Assets.sustainable,
  },
];

export const TeamData = [
  {
    name: "Simeon Best",
    role: "Founder & CEO",
    image: Assets.ceo,
  },
  {
    name: "Judith Uduimoh",
    role: "Product Manager",
    image: Assets.judith,
  },
  {
    name: "Emmanuel Inua",
    role: "Frontend Developer",
    image: Assets.emmanuel,
  },
  {
    name: "Salome Osha",
    role: "Product Designer",
    image: Assets.salome,
  },
];

export const FaqsData = [
  {
    question: "How do I place an order on Aquatec?",
    answer: `Simply download the Aquatec app, browse available water brands, select your preferred size and quantity, and choose either "Buy Now" or "Subscribe" for recurring deliveries. Complete your order with a few taps.`,
  },
  {
    question: "Can I schedule my deliveries?",
    answer: `Yes! You can choose to have your water delivered on a one-time basis or set up a subscription for regular deliveries.`,
  },
  {
    question: "What types of water are available?",
    answer: `Aquatec offers a wide range of trusted water brands in bottles and dispensers. You can filter by size, type, and brand to find exactly what you need.`,
  },
  {
    question: "How does subscription work?",
    answer: `Subscriptions allow you to receive water deliveries on a recurring basis. You can set the frequency (daily, weekly, or monthly).`,
  },
  {
    question: "Is there a delivery fee?",
    answer: `Delivery fees may vary based on your location.`,
  },
  {
    question: "Can l track my order?",
    answer: `Yes, you'll receive real-time updates on your order status, and you can track your delivery from the moment it leaves the supplier to when it arrives at your door.`,
  },
  {
    question: "How do l earn and use my Coins?",
    answer: `You earn coins with every order and referral. These coins can be redeemed for discounts when purchasing.`,
  },
  {
    question: "What if I have a problem with my order?",
    answer: `Our customer support team is here to help. You can reach out via the app or our website for assistance with any issues.`,
  },
];

export const termsData = [
  ` Acceptance of Terms
By accessing and using the Aquatec website and services, you agree to comply with these Terms and Conditions. If you do not agree, please do not use our services.`,

  ` Services
Aquatec provides water delivery services through various subscription plans. We reserve the right to modify or discontinue any service without prior notice.`,

  ` Subscription Plans
- Flexible Options : Monthly, mid-year, or annual subscriptions.
- Non-Refundable Payments: Payments are processed automatically and are non-refundable.
- Easy Cancellation : Cancel your subscription anytime through your account settings.`,

  ` App Requirement
💧 To use our services, you must have the Aquatec app. Complaints and support requests will only be attended to through the app.`,

  ` Delivery
- Timely Delivery :Delivery times may vary based on location and availability.
- Accurate Information: You must provide accurate delivery details. Aquatec is not responsible for delays due to incorrect addresses.
- Re-Delivery Charges: If you're not available to receive your order, a charge will apply for the second delivery attempt. We provide tracking details for easy follow-up.`,

  ` Non-Refundable Policy
Once your order has been processed, it is subject to a non-refundable policy.`,

  ` User Accounts
Each Aquatec user is allowed only one account Duplicate accounts may be suspended or terminated.`,

  `Pricing
- Dynamic Pricing:Prices are subject to change. We will notify you of any changes before they take effect.
- Taxes and Fees: All prices exclude taxes and fees, which will be added at checkout.`,

  ` Rewards Program
💦 Aquatec coins earned through purchases can be redeemed for future orders or subscription renewals. Coins have no cash value and cannot be transferred.`,

  ` User Responsibilities
- You agree to use our services for lawful purposes only
- Do not engage in any activities that could harm our services, website, or users.`,

  ` Limitation of Liability
Aquatec is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services.`,

  ` Changes to Terms
We may update these Terms and Conditions periodically. Significant changes will be communicated via email or through our website.`,

  ` Governing Law
These Terms and Conditions are governed by the laws of Nigeria. Any disputes will be resolved in the appropriate courts.
For questions or concerns regarding these Terms and Conditions, please contact us at support@myaquatec.com`,
];

export const policyData = [
  ` Introduction
At Aquatec, we prioritize your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you access our services.`,

  ` We may collect the following types of information:
- Personal Information : When you create an account or place an order, we collect your name, email address, phone number, and delivery address.
- Usage Data : We gather information about how you interact with our app and website, including your IP address, browser type, and pages visited.`,

  ` We use cookies and similar technologies to enhance your experience and collect data. 
Cookies are small files stored on your device that help us understand how you use our website and improve our services. You can manage cookie settings through your browser.`,

  ` How We Use Your Information
Aquatec uses your information for several purposes, including:
- To provide, maintain, and improve our services.
- To process your orders and manage your subscriptions.
- To communicate with you regarding your account, orders, and promotional offers.
- To analyze usage patterns and enhance user experience.`,

  ` Lawful Basis for Processing Data
We process your personal data based on the following lawful bases:
- Consent : When you provide explicit consent for us to process your data.
- Contractual Necessity : To fulfill our obligations under a contract with you, such as processing your orders.
- Legal Compliance : To comply with legal obligations or respond to lawful requests for information.
- Legitimate Interests : To pursue our legitimate interests in providing and improving our services, as long as your rights do not override those interests.`,

  ` Sharing Your Information
We do not sell or rent your personal information to third parties. However, we may share your data with:
- Service Providers : Trusted third-party companies that assist us in delivering our services.
- Legal Compliance : When required by law or to protect our rights and the rights of others.`,

  ` Data Security
We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. While we strive to protect your data, please be aware that no method of transmission over the internet is completely secure.`,

  ` Core Values: Transparency
We believe in transparency regarding how we handle your data. We are committed to providing clear information about our data practices and your rights.`,

  ` Your Rights
You have certain rights regarding your personal information, including:
- The right to access the personal information we hold about you.
- The right to request corrections to your data if it is inaccurate or incomplete.
- The right to request the deletion of your personal information, subject to legal obligations.`,

  ` Changes to This Privacy Policy
We may update this Privacy Policy periodically. We will notify you of any significant changes via email or through our website. Your continued use of our services after such changes constitutes your acceptance of the revised policy.`,

  ` Contact Us
If you have any questions or concerns regarding this Privacy Policy, please contact us at support@myaquatec.com.`,
];
