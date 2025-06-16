import React from "react";
import BlogHero from "./components/BlogHero";
import RecentBlogs from "./components/RecentBlogs";
import AllBlogs from "./components/AllBlogs";
import { SanityDocument } from "next-sanity";
import { client } from "@/app/sanity/client";

const Blog = async () => {
  const BlogPosts = `*[_type == "blogPost"]{
  _id, 
  title, 
  description,
  'slug': slug.current,
  'image': image.asset->url,
  'alt': image.alt,
  author,
  categories,
  publishedAt,
  body
  }`;

  const options = { next: { revalidate: 30 } };

  const blogs = await client.fetch(BlogPosts, {}, options);

  return (
    <main>
      <BlogHero />
      <RecentBlogs blogData={blogs} />
      <AllBlogs blogData={blogs} />
    </main>
  );
};

export default Blog;
