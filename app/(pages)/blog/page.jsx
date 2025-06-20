import React from "react";
import BlogHero from "./components/BlogHero";
import RecentBlogs from "./components/RecentBlogs";
import AllBlogs from "./components/AllBlogs";
import { client } from "@/app/sanity/client";

export const metadata = {
  title: "Stay Informed. Stay Hydrated - Aquatec",
  description:
    "Subscribe to our newsletter to get the latest blog drops straight to your inbox! - Aquatec",
  // metadataBase: new URL(""),
  alternates: {
    canonical: "/blog",
    languages: {
      "en-US": "/en-US",
    },
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
