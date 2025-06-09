import Image from "next/image";
import React from "react";
import { Assets } from "../assets";
import {
  MotionFadeIn,
  MotionSlideDown,
  MotionSlideUp,
} from "./(motion)/MotionFile";

const Download = () => {
  return (
    <main className="mx-auto my-10 mb-24 flex h-screen w-full flex-col items-center justify-center p-4 xl:mt-32 xl:mb-0 xl:flex-row xl:p-0">
      <MotionFadeIn speed={0.3}>
        <section className="bg-primary relative mx-auto flex h-[90vh] w-full max-w-7xl flex-col items-center justify-center rounded-[50px] xl:h-[530px] xl:flex-row">
          <div className="absolute z-10 h-full w-full overflow-hidden">
            <Image
              src={Assets.pattern}
              alt="pattern"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-10 flex h-full w-full flex-col items-start justify-center gap-5 overflow-hidden p-4 xl:w-1/2">
            <p className="text-4xl font-bold text-white lg:text-6xl xl:ml-20">
              Download Our
              <br className="hidden xl:block" /> App Now
            </p>
            <p className="text-base font-medium text-white lg:text-xl xl:ml-20">
              Join thousands of Users to buy fresh water Instantly,
              <br className="hidden xl:block" /> subscribe and manage orders in
              seconds.
            </p>
            <div className="flex gap-5 xl:ml-20">
              <a href="#" className="flex items-center">
                <Image
                  src={Assets.apple_store}
                  alt="Apple Store Link"
                  className="w-auto"
                />
              </a>
              <a href="#" className="flex items-center">
                <Image
                  src={Assets.android_store}
                  alt="Android Store Link"
                  className="w-auto"
                />
              </a>
            </div>
          </div>
          <div className="relative flex h-full w-full items-center justify-center xl:w-1/2">
            <div className="absolute mt-28 xl:mt-5">
              <MotionSlideUp speed={0.6}>
                <Image
                  src={Assets.download}
                  alt="Download the Aquatec App"
                  className="h-full w-full"
                />
              </MotionSlideUp>
            </div>
          </div>
        </section>
      </MotionFadeIn>
    </main>
  );
};

export default Download;
