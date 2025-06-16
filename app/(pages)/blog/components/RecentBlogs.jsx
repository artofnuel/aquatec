"use client";
import { Assets } from "@/app/assets";
import { MotionSlideDown } from "@/app/components/(motion)/MotionFile";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/app/sanity/client";

const RecentBlogs = ({ blogData = [] }) => {
  console.log(blogData[0].image);
  console.log(blogData[0].alt);

  // const { projectId, dataset } = client.config();
  // const urlFor = (source) => {
  //   projectId && dataset
  //     ? imageUrlBuilder({ projectId, dataset }).image(source)
  //     : null;
  // };

  return (
    <main className="text-text2 h-auto w-full overflow-hidden p-4">
      <MotionSlideDown speed={0.3}>
        <section className="mx-auto flex h-auto w-full max-w-7xl flex-col items-start gap-5">
          <h2 className="text-2xl font-semibold">Recent blog posts</h2>
          <div className="mb-5 flex h-auto w-full flex-col gap-8 xl:flex-row">
            {/* Left: Featured Blog */}
            <Link
              href={blogData[0].slug}
              className="flex w-full flex-col gap-3 xl:w-1/2"
            >
              <Image
                src={blogData[0].image}
                alt={blogData[0].alt}
                width={1000}
                height={1000}
                className="aspect-video w-full object-cover xl:h-[280px]"
              />
              <p className="mt-2 text-xl font-semibold">{blogData[0].title}</p>
              <p className="line-clamp-3 text-base text-gray-500">
                {blogData[0].description}
              </p>
              <p className="text-primary mt-1 text-xs">
                {new Date(blogData[0].publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </Link>
            {/* Right: List of blogData */}
            <div className="flex h-full w-full flex-col gap-5 xl:w-1/2">
              {blogData.slice(1).map((blog, idx) => (
                <Link
                  href={blog.slug}
                  key={idx}
                  className="flex h-full w-full flex-col gap-4 xl:flex-row"
                >
                  <div className="h-[250px] w-full flex-shrink-0 overflow-hidden xl:h-[215px] xl:w-3/5">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex w-full flex-col justify-start gap-5 py-3 xl:w-2/5">
                    <p className="line-clamp-2 text-xl font-semibold">
                      {blog.title}
                    </p>
                    <p className="line-clamp-3 text-base text-gray-500">
                      {blog.description}
                    </p>
                    <p className="text-primary mt-1 text-xs">
                      {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </MotionSlideDown>
    </main>
  );
};

export default RecentBlogs;
