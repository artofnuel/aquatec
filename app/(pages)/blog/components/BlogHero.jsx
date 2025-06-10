import { MotionFadeIn } from "@/app/components/(motion)/MotionFile";
import Link from "next/link";
import React from "react";

const BlogHero = () => {
  return (
    <main className="text-text2 h-auto w-full overflow-hidden p-4 xl:my-20">
      <MotionFadeIn speed={0.3}>
        <section className="mx-auto flex h-auto w-full max-w-7xl flex-col items-center justify-start gap-5">
          <div className="flex h-auto w-full flex-col items-center justify-center py-5">
            <p className="bg-accent text-primary w-fit rounded-full p-1 px-3">
              Blog
            </p>
            <h2 className="mt-5 text-center text-2xl font-medium lg:text-4xl">
              Stay Informed. Stay Hydrated
            </h2>
            <p className="mt-3 text-center">
              Subscribe to our newsletter to get the latest blog drops straight
              to your inbox!
            </p>
          </div>
          <form action="w-full h-auto flex-col">
            <div className="flex w-full flex-col items-start gap-5 xl:flex-row">
              <input
                className="w-[93vw] rounded-lg border border-[#D0D5DD] p-2 xl:w-[450px]"
                type="email"
                placeholder="Enter your email"
                name="email"
                required
              />
              <button
                className="bg-primary w-[120px] cursor-pointer rounded-xl p-3 text-center text-white"
                type="submit"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-5">
              We care about your data in our{" "}
              <Link href="/privacy" className="cursor-pointer underline">
                privacy policy
              </Link>
            </p>
          </form>
        </section>
      </MotionFadeIn>
    </main>
  );
};

export default BlogHero;
