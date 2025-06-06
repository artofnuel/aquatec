import React from "react";
import { ExploreData } from "../assets";
import Image from "next/image";

const Explore = () => {
  return (
    <main className="my-20 h-auto w-full p-4">
      <section className="mx-auto flex h-auto w-full max-w-7xl flex-col items-center justify-center gap-10 xl:h-[430px] xl:flex-row xl:gap-16">
        <div className="flex h-full w-full flex-col items-start justify-center gap-3 xl:w-2/5">
          <p className="bg-accent text-primary w-fit rounded-full p-1 px-3">
            Why Aquatec?
          </p>
          <h4 className="mb-5 text-left text-2xl font-medium lg:text-4xl">
            Explore our Standout Features
          </h4>
          <p>
            Aquatec brings hydration to your doorstep, whenever you need it.
            Experience fast delivery, fresh water, and flexible ordering—all
            from the brands you love.
          </p>
        </div>
        <div className="grid h-full w-full grid-cols-1 gap-10 xl:w-3/5 xl:grid-cols-2">
          {ExploreData.map((item, index) => (
            <div key={index} className="flex h-full w-full flex-col gap-2">
              <div className="h-[50px] w-[50px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full"
                />
              </div>
              <p className="text-xl font-bold lg:text-2xl">{item.title}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Explore;
