"use client";
import { Assets } from "@/app/assets";
import {
  MotionFadeIn,
  MotionSlideLeft,
  MotionSlideRight,
} from "@/app/components/(motion)/MotionFile";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactHero = () => {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="text-text2 mb-10 h-auto w-full overflow-hidden p-4">
      <MotionFadeIn>
        <section
          className={`mx-auto flex h-auto w-full max-w-7xl ${submitted ? "flex-col-reverse" : "flex-col"} gap-10 xl:mt-10 xl:mb-20 xl:flex-row`}
        >
          <div className="flex h-auto w-full flex-col items-center justify-center xl:w-1/2 xl:justify-end">
            <MotionSlideRight speed={0.3}>
              <Image
                src={
                  Assets.contact.default
                    ? Assets.contact.default
                    : Assets.contact
                }
                alt="Aquatec Contact Image"
                className="h-full w-full"
              />
            </MotionSlideRight>
          </div>
          <div className="mx-auto flex h-auto max-w-[570px] flex-col gap-5 xl:w-1/2">
            {!submitted ? (
              <>
                <h1 className="text-2xl font-bold xl:text-4xl">Contact Us</h1>
                <p className="text-base xl:text-xl">
                  Our friendly team would love to hear from you.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full flex-col gap-4"
                >
                  <div className="flex w-full justify-between gap-5">
                    <label className="flex w-1/2 flex-col gap-2 xl:w-full">
                      First Name
                      <input
                        className="w-full rounded-lg border border-[#D0D5DD] p-2"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        required
                      />
                    </label>
                    <label className="flex w-1/2 flex-col gap-2 xl:w-full">
                      Last Name
                      <input
                        className="w-full rounded-lg border border-[#D0D5DD] p-2"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        required
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-2">
                    Email
                    <input
                      className="rounded-lg border border-[#D0D5DD] p-2"
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    Phone Number
                    <PhoneInput
                      country={"us"}
                      value={phone}
                      onChange={setPhone}
                      inputClass="!rounded-lg !border !border-[#D0D5DD] !bg-white !p-2 !pl-10 !w-full"
                      buttonClass="!bg-white !border-[#D0D5DD] !border-t !border-l !border-b !border-r-0"
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: false,
                      }}
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    Message
                    <textarea
                      className="appearance-none rounded-lg border border-[#D0D5DD] p-2"
                      name="message"
                      required
                    ></textarea>
                  </label>
                  <div className="flex items-center justify-start gap-3">
                    <input
                      type="checkbox"
                      name="privacy"
                      required
                      className="checked:bg-primary size-5 appearance-none rounded-md border border-[#D0D5DD] p-1"
                    />
                    <p>
                      You agree to our friendly{" "}
                      <a
                        className="underline"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        privacy policy.
                      </a>
                    </p>
                  </div>
                  <button className="bg-primary mt-10 cursor-pointer rounded-xl p-3 text-center text-white">
                    Send message
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 py-20">
                <Image
                  src={Assets.contact_sent}
                  alt="Your message was sent!"
                  className="size-[110px]"
                />
                <h2 className="text-text-text2 text-2xl font-medium">
                  Message Sent!
                </h2>
                <p className="w-2/3 text-center text-base xl:w-1/2">
                  Your message has been sent successfully. You will receive a
                  response shortly
                </p>
                <Link
                  href="/"
                  className="bg-primary mt-10 w-full cursor-pointer rounded-xl p-3 text-center font-semibold text-white"
                >
                  Back to Home
                </Link>
              </div>
            )}
          </div>
        </section>
      </MotionFadeIn>
    </main>
  );
};

export default ContactHero;
