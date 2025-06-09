import { TeamData } from "@/app/assets";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <main className="bg-accent text-text2 h-auto w-full p-4 xl:h-[450px]">
      <section className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-5 py-10 text-center">
        <h3 className="text-xl font-medium xl:text-4xl">Meet the Team</h3>
        <p className="text-base xl:text-xl">
          We are a diverse team of passionate people fostering a culture that
          empowers you to do you best work.
        </p>
        <div className="mt-10 grid h-full w-full grid-cols-2 items-center justify-between gap-10 xl:mt-0 xl:grid-cols-4 xl:gap-5">
          {TeamData.map((member, index) => (
            <div
              className="mx-auto flex max-w-3xl flex-col items-center gap-1"
              key={index}
            >
              <Image
                src={member.image.default ? member.image.default : member.image}
                alt={member.name}
                className="size-[80px]"
              />
              <p className="text-base font-semibold xl:text-lg">
                {member.name}
              </p>
              <p className="text-primary text-base">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Team;
