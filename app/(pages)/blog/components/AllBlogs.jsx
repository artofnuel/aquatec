import { Assets } from "@/app/assets";
import { MotionSlideDown } from "@/app/components/(motion)/MotionFile";
import Image from "next/image";
import React from "react";
import { GoArrowDown } from "react-icons/go";

const AllBlogs = () => {
  return (
    <main className="my-10 h-auto w-full overflow-hidden p-4">
      <MotionSlideDown speed={0.6}>
        <section className="mx-auto h-auto w-full max-w-7xl">
          <h3 className="text-2xl font-bold">All Blogs Posts</h3>
          <section className="my-5 grid h-auto w-full grid-cols-1 gap-10 xl:grid-cols-3">
            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="flex h-[530px] w-full flex-col gap-10 p-4 shadow-md"
              >
                <div className="h-[240px] w-full">
                  <Image
                    src={Assets.dummy}
                    alt="Blog Title"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <p className="mt-2 text-lg font-medium xl:text-xl">
                    Aquatec vs Traditional Water Buying: What You're Missing
                  </p>
                  <p className="text-base font-normal">
                    Explore how Aquatec is making life easier with smarter,
                    stress-free delivery options.
                  </p>
                  <p>20 Jan 2025</p>
                </div>
              </div>
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
