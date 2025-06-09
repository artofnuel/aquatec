import { ValuesData } from "@/app/assets";
import { MotionFadeIn } from "@/app/components/(motion)/MotionFile";
import Image from "next/image";
import React from "react";

const CoreValues = () => {
  return (
    <main className="h-auto w-full p-4 py-10">
      <MotionFadeIn speed={0.3}>
        <section className="mx-auto h-full w-full max-w-7xl">
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            <p className="bg-accent text-primary w-fit rounded-full p-1 px-3">
              Core Values
            </p>
            <h2 className="mt-5 text-2xl font-medium lg:text-4xl">
              Our shared values that keeps us
              <br /> connected
            </h2>
          </div>
          <section className="mt-10 grid h-fit w-full grid-cols-1 gap-5 xl:grid-cols-3 xl:gap-12">
            {ValuesData.map((value, index) => (
              <div
                key={index}
                className="flex h-full w-full flex-col items-center justify-center gap-5"
              >
                <Image
                  src={value.icon}
                  alt={value.title}
                  className="w-h-12 h-12 object-contain"
                />
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-center">{value.description}</p>
              </div>
            ))}
          </section>
        </section>
      </MotionFadeIn>
    </main>
  );
};

export default CoreValues;
