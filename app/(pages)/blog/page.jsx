import React from "react";
import BlogHero from "./components/BlogHero";
import RecentBlogs from "./components/RecentBlogs";
import AllBlogs from "./components/AllBlogs";
import { client } from "@/app/sanity/client";

export const metadata = {
  title: "Stay Informed. Stay Hydrated - Aquatec",
  description:
    "Subscribe to our newsletter to get the latest blog drops straight to your inbox! - Aquatec",
  metadataBase: new URL("www.myaquatec.com/blog"),
  alternates: {
    canonical: "/blog",
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
