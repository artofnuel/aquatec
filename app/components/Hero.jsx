import Image from "next/image";
import React from "react";
import { Assets } from "../assets";
import Link from "next/link";
import {
  MotionFadeIn,
  MotionSlideDown,
  MotionSlideUp,
} from "./(motion)/MotionFile";

const Hero = () => {
  return (
    <main className="h-screen w-full overflow-hidden p-4">
      <MotionFadeIn speed={0.3}>
        <section className="bg-primary relative flex h-full w-full flex-col items-center justify-between gap-5 overflow-hidden rounded-lg text-white">
          <div className="clippy absolute -top-20 z-0 h-full w-full bg-white/20"></div>
          <MotionSlideDown speed={0.6}>
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-5 text-center">
              <h1 className="mt-20 text-center text-4xl font-bold lg:mt-10 lg:text-6xl">
                Stay Hydrated,
                <br /> Anytime, Anywhere
              </h1>
              <p className="text-center text-base font-medium lg:text-xl">
                Order top water brands and get them delivered to your door.
                One-time or on a<br className="hidden lg:block" /> schedule—
                <br className="block lg:hidden" />
                Aquatec has you covered.
              </p>
              <div className="mt-5 flex w-full flex-col items-center justify-center gap-5 lg:mt-0 lg:flex-row">
                <Link href="#">
                  <Image
                    src={Assets.apple_store}
                    alt="Aquatec apple store link"
                    className="h-auto w-[150px]"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={Assets.android_store}
                    alt="Aquatec android store link"
                    className="w-[150px]"
                  />
                </Link>
              </div>
            </div>
          </MotionSlideDown>
          <div className="relative z-10 hidden h-full w-full items-end justify-center xl:flex xl:h-[400px]">
            <MotionSlideUp speed={1}>
              <Image
                src={Assets.hero_img}
                alt="Aquatec hero image"
                className="hidden h-auto w-[1200px] lg:block"
              />
            </MotionSlideUp>
          </div>
          <div className="relative z-10 flex h-full w-full items-end justify-center xl:hidden xl:h-[400px]">
            <MotionSlideUp speed={1}>
              <Image
                src={Assets.hero_img_mobile}
                alt="Aquatec hero image"
                // className="block w-full xl:hidden"
              />
            </MotionSlideUp>
          </div>
        </section>
      </MotionFadeIn>
    </main>
  );
};

export default Hero;
