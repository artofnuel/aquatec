import React from "react";
import { TestimonialsData } from "../assets";
import Image from "next/image";
import { MotionSlideDown } from "./(motion)/MotionFile";

const Testimonial = () => {
  return (
    <main className="h-auto w-full p-4">
      <MotionSlideDown speed={0.3}>
        <section className="mx-auto h-auto w-full max-w-7xl xl:h-[555px]">
          <div className="flex flex-col items-center justify-center py-5">
            <p className="bg-accent text-primary w-fit rounded-full p-1 px-3">
              Testimonials
            </p>
            <h2 className="mt-5 text-center text-2xl font-medium lg:text-4xl">
              Our Satisfied Customers
            </h2>
          </div>
          <section className="grid h-auto w-full grid-cols-1 gap-5 md:grid-cols-2 xl:h-[420px] xl:grid-cols-4 xl:grid-rows-2">
            {TestimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className={
                  index === 0
                    ? "flex h-auto flex-col gap-2 rounded-lg bg-[#F6F6F6] p-2 xl:col-span-1 xl:h-[200px]"
                    : index === 1
                      ? "flex h-auto flex-col gap-2 rounded-lg bg-[#F6F6F6] p-2 xl:col-span-2 xl:h-[200px]"
                      : index === 2
                        ? "flex h-auto flex-col gap-2 rounded-lg bg-[#F6F6F6] p-2 xl:col-span-1 xl:row-span-2"
                        : index === 3
                          ? "flex h-auto flex-col gap-2 rounded-lg bg-[#F6F6F6] p-2 xl:col-span-2 xl:h-[200px]"
                          : "flex h-auto flex-col gap-2 rounded-lg bg-[#F6F6F6] p-2 xl:h-[200px]"
                }
              >
                <div className="flex items-center justify-start gap-2">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <p>{testimonial.name}</p>
                    <div className="flex items-center gap-1">
                      {testimonial.rating.map((star, idx) => (
                        <Image
                          key={idx}
                          src={star}
                          alt={`Star ${idx + 1}`}
                          className="inline-block h-4 w-4"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p>{testimonial.review}</p>
              </div>
            ))}
          </section>
        </section>
      </MotionSlideDown>
    </main>
  );
};

export default Testimonial;
