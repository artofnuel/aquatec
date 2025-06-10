import { Assets } from "@/app/assets";
import { MotionSlideDown } from "@/app/components/(motion)/MotionFile";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Example blog data
const blogs = [
  {
    image: Assets.dummy,
    title: "Aquatec vs Traditional Water Buying: What You're Missing",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    date: "20 Jan 2025",
    href: "#",
  },
  {
    image: Assets.dummy,
    title: "Top 5 Benefits of Staying Hydrated Daily",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...",
    date: "20 Jan 2025",
    href: "#",
  },
  {
    image: Assets.dummy,
    title: "Eco Tips: 5 Ways to Reuse Your Water Bottles",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    date: "20 Jan 2025",
    href: "#",
  },
];

const RecentBlogs = () => {
  return (
    <main className="text-text2 h-auto w-full overflow-hidden p-4">
      <MotionSlideDown speed={0.3}>
        <section className="mx-auto flex h-auto w-full max-w-7xl flex-col items-start gap-5">
          <h2 className="text-lg font-semibold xl:text-2xl">
            Recent blog posts
          </h2>
          <div className="flex h-auto w-full flex-col gap-8 xl:flex-row">
            {/* Left: Featured Blog */}
            <Link
              href={blogs[0].href}
              className="flex w-full flex-col gap-3 xl:w-1/2"
            >
              <Image
                src={blogs[0].image}
                alt={blogs[0].title}
                className="aspect-video w-full object-cover xl:h-[280px]"
              />
              <p className="mt-2 text-lg font-semibold">{blogs[0].title}</p>
              <p className="line-clamp-3 text-sm text-gray-500">
                {blogs[0].description}
              </p>
              <p className="text-primary mt-1 text-xs">{blogs[0].date}</p>
            </Link>
            {/* Right: List of Blogs */}
            <div className="flex h-full w-full flex-col gap-5 xl:w-1/2">
              {blogs.slice(1).map((blog, idx) => (
                <Link
                  href={blog.href}
                  key={idx}
                  className="flex h-full w-full flex-col gap-4 xl:flex-row"
                >
                  <div className="h-[250px] w-full flex-shrink-0 overflow-hidden xl:h-[215px] xl:w-3/5">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex w-full flex-col justify-start gap-5 py-3 xl:w-2/5">
                    <p className="font-semibold">{blog.title}</p>
                    <p className="line-clamp-3 text-sm text-gray-500">
                      {blog.description}
                    </p>
                    <p className="text-primary mt-1 text-xs">{blog.date}</p>
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
