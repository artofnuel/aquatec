import React from "react";
import { FeaturesData } from "../assets";
import Image from "next/image";

const Features = () => {
  return (
    <main id="features" className="h-auto w-full p-4">
      <section className="mx-auto flex h-auto w-full max-w-7xl flex-col gap-5">
        <div className="flex flex-col items-center justify-center py-5">
          <p className="bg-accent text-primary w-fit rounded-full p-1 px-3">
            Our Features
          </p>
          <h2 className="mt-5 text-center text-2xl font-medium lg:text-4xl">
            Stay Hydrated. We bring the water to your
            <br /> door-step
          </h2>
        </div>

        <div className="flex h-auto w-full flex-col gap-5">
          {FeaturesData.map((feature, index) => (
            <div
              key={index}
              className="group flex h-auto w-full flex-col items-center justify-between xl:h-[630px] xl:flex-row even:xl:flex-row-reverse"
            >
              <div className="flex h-auto w-full group-even:justify-end xl:h-full xl:w-1/2">
                <Image
                  src={feature.image}
                  alt={feature.subtitle}
                  className="h-full w-full"
                />
              </div>
              <div className="flex h-auto w-full flex-col items-start justify-center gap-5 xl:h-full xl:w-1/2 xl:p-6">
                <p className="bg-accent text-primary mt-4 w-fit rounded-full p-1 px-3 xl:mt-0">
                  {feature.title}
                </p>
                <h3 className="text-2xl font-bold xl:text-5xl">
                  {feature.subtitle}
                </h3>
                <p>{feature.description}</p>

                <div className="mt-10 flex gap-5">
                  {feature.apple && (
                    <a href="#" className="flex items-center">
                      <Image
                        src={feature.apple}
                        alt="Apple Store Link"
                        className="w-auto"
                      />
                    </a>
                  )}
                  {feature.android && (
                    <a href="#" className="flex items-center">
                      <Image
                        src={feature.android}
                        alt="Android Store Link"
                        className="w-auto"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Features;
