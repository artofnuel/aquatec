import React from "react";
import BlogHero from "./components/BlogHero";
import RecentBlogs from "./components/RecentBlogs";
import AllBlogs from "./components/AllBlogs";

const Blog = () => {
  return (
    <main>
      <BlogHero />
      <RecentBlogs />
      <AllBlogs />
    </main>
  );
};

export default Blog;
