import Image from "next/image";
import React from "react";
import { Assets } from "../assets";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="h-screen w-full p-4">
      <section className="bg-primary relative flex h-full w-full flex-col items-center justify-between gap-5 overflow-hidden rounded-lg text-white">
        <div className="clippy absolute -top-20 z-0 h-full w-full bg-white/20"></div>

        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-5 text-center">
          <h1 className="mt-20 text-center text-4xl font-bold lg:mt-10 lg:text-6xl">
            Stay Hydrated,
            <br /> Anytime, Anywhere
          </h1>
          <p className="text-center text-base font-medium lg:text-xl">
            Order top water brands and get them delivered to your door. One-time
            or on a<br className="hidden lg:block" /> schedule—
            <br className="block lg:hidden" />
            Aquatec has you covered.
          </p>
          <div className="mt-5 flex w-full flex-col items-center justify-center gap-5 lg:mt-0 lg:flex-row">
            <Link href="#">
              <Image
                src={Assets.apple_store}
                alt="Aquatec apple store link"
                className="w-[150px]"
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
        <div className="relative z-10 flex h-full w-full items-end justify-center">
          <Image
            src={Assets.hero_img}
            alt="Aquatec hero image"
            className="hidden h-[400px] w-full lg:block"
          />
          <Image
            src={Assets.hero_img_mobile}
            alt="Aquatec hero image"
            className="lock w-full lg:hidden"
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
