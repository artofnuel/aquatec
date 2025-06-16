import { Assets } from "@/app/assets";
import { MotionSlideDown } from "@/app/components/(motion)/MotionFile";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowDown } from "react-icons/go";

const AllBlogs = ({ blogData = [] }) => {
  return (
    <main className="my-10 h-auto w-full overflow-hidden p-4">
      <MotionSlideDown speed={0.6}>
        <section className="mx-auto h-auto w-full max-w-7xl">
          <h3 className="text-2xl font-bold">All Blogs Posts</h3>
          <section className="my-5 grid h-auto w-full grid-cols-1 gap-10 xl:grid-cols-3">
            {blogData.map((item, index) => (
              <Link
                key={index}
                href={item.slug}
                className="flex h-[520px] w-full flex-col gap-10 p-4 shadow-md"
              >
                <div className="h-auto w-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1000}
                    height={1000}
                    className="h-[250px] w-full object-cover"
                  />
                </div>
                <div className="flex h-full w-full flex-col justify-between gap-5">
                  <div className="space-y-5">
                    <p className="line-clamp-2 h-[65px] text-xl font-semibold">
                      {item.title}
                    </p>
                    <p className="line-clamp-3 text-base font-normal">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-primary mt-1 text-xs">
                    {new Date(item.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </section>
          <div className="my-5 mt-16 flex h-auto w-full items-center justify-center">
            <button className="bg-primary flex cursor-pointer items-center justify-center gap-2 rounded-xl p-3 px-5 text-center text-white">
              <GoArrowDown />
              Load More
            </button>
          </div>
        </section>
      </MotionSlideDown>
    </main>
  );
};

export default AllBlogs;
