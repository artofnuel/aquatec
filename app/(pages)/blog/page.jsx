import React from "react";
import BlogHero from "./components/BlogHero";
import RecentBlogs from "./components/RecentBlogs";
import AllBlogs from "./components/AllBlogs";
import { client } from "@/app/sanity/client";

export const metadata = {
  title: "Stay Informed. Stay Hydrated - Aquatec",
  description:
    "Subscribe to our newsletter to get the latest blog drops straight to your inbox! - Aquatec",
  metadataBase: new URL("https://www.myaquatec.com/blog"),
  alternates: {
    canonical: "/blog",
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
    title: "Stay Hydrated, Anytime, Anywhere - Aquatec",
    description:
      "Subscribe to our newsletter to get the latest blog drops straight to your inbox! - Aquatec",
    url: "https://www.myaquatec.com/blog",
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

const Blog = async () => {
  const BlogPosts = `*[_type == "blogPost"] | order(publishedAt desc){
    _id, 
    title, 
    description,
    'slug': slug.current,
    'image': image,
    'alt': image.alt,
    author,
    categories,
    publishedAt,
    body
  }`;

  const options = { next: { revalidate: 30 } };
  const blogs = await client.fetch(BlogPosts, {}, options);

  return (
    <main className="overflow-hidden">
      <BlogHero />
      <RecentBlogs blogData={blogs} />
      <AllBlogs blogData={blogs} />
    </main>
  );
};

export default Blog;
