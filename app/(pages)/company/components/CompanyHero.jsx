import React from "react";
import Image from "next/image";
import { Assets, GroupImages } from "../../../assets";
import {
  MotionFadeIn,
  MotionSlideUp,
} from "@/app/components/(motion)/MotionFile";

const CompanyHero = () => {
  const { group_image_mobile } = Assets;

  return (
    <main className="overflow-hidden0 mb-10 h-auto w-full xl:mt-10">
      <MotionFadeIn speed={0.3}>
        <section className="mx-auto flex h-auto w-full max-w-4xl flex-col items-center justify-center gap-5 p-4 text-center">
          <h1 className="text-2xl font-bold xl:text-4xl">
            Refreshing Convenience,
            <br />
            <span className="text-primary">One Delivery at a Time</span>
          </h1>
          <p className="text-base xl:text-xl">
            At Aquatec, we believe access to clean, quality water should be
            easy, reliable, and
            <br className="hidden xl:block" /> stress-free. That's why we
            created a platform that connects you to your favourite
            <br className="hidden xl:block" /> water brands — and brings them
            straight to your door, exactly when you need them.
          </p>
          <p className="text-base xl:text-xl">
            We partner with trusted water suppliers to ensure you always get
            fresh water in the
            <br className="hidden xl:block" /> size and quantity you prefer. And
            with real-time tracking, instant payments, and a
            <br className="hidden xl:block" /> rewards system that gives back,
            Aquatec isn't just convenient — it's smart.
          </p>
          <p className="text-base xl:text-xl">
            Join thousands of satisfied customers who are staying hydrated the
            easy way
          </p>
          <p className="text-primary font-semibold">
            Aquatec — Because hydration should never be complicated.
          </p>
        </section>
      </MotionFadeIn>

      {/* Images */}
      <MotionSlideUp speed={0.6}>
        <section className="mx-auto mt-10 hidden w-full max-w-7xl flex-row items-end justify-center gap-4 overflow-hidden xl:flex">
          {GroupImages.map((imgObj, idx) => (
            <div
              key={idx}
              className={`overflow-hidden rounded-xl ${imgObj.height} w-[200px] flex-shrink-0`}
            >
              <Image
                src={imgObj.image.default ? imgObj.image.default : imgObj.image}
                alt={`Gallery ${idx + 1}`}
                width={200}
                height={320}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </section>
        <section className="block h-auto w-full overflow-hidden xl:hidden">
          <Image
            src={
              group_image_mobile.default
                ? group_image_mobile.default
                : group_image_mobile
            }
            alt="Aquatec group"
            className="h-auto w-full object-cover"
          />
        </section>
      </MotionSlideUp>
    </main>
  );
};

export default CompanyHero;
