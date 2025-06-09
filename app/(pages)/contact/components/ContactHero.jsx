"use client";
import { Assets } from "@/app/assets";
import Image from "next/image";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactHero = () => {
  const [phone, setPhone] = useState("");

  return (
    <main className="text-text2 mb-10 h-auto w-full p-4">
      <section className="mx-auto flex h-auto w-full max-w-7xl flex-col gap-10 xl:my-20 xl:flex-row">
        <div className="flex h-auto w-full flex-col items-center justify-center xl:w-1/2 xl:justify-end">
          <Image
            src={
              Assets.contact.default ? Assets.contact.default : Assets.contact
            }
            alt="Aquatec Contact Image"
            className="h-full w-full"
          />
        </div>
        <div className="mx-auto flex h-auto max-w-[570px] flex-col gap-5 xl:w-1/2">
          <h1 className="text-2xl font-bold xl:text-4xl">Contact Us</h1>
          <p className="text-base xl:text-xl">
            Our friendly team would love to hear from you.
          </p>
          <form action="#" className="flex w-full flex-col gap-4">
            <div className="flex w-full justify-between gap-5">
              <label htmlFor="" className="flex w-1/2 flex-col gap-2 xl:w-full">
                First Name
                <input
                  className="w-full rounded-lg border border-[#D0D5DD] p-2"
                  type="text"
                  placeholder="First Name"
                  name=""
                  id=""
                />
              </label>
              <label htmlFor="" className="flex w-1/2 flex-col gap-2 xl:w-full">
                Last Name
                <input
                  className="w-full rounded-lg border border-[#D0D5DD] p-2"
                  type="text"
                  placeholder="Last Name"
                  name=""
                  id=""
                />
              </label>
            </div>
            <label htmlFor="" className="flex flex-col gap-2">
              Email
              <input
                className="rounded-lg border border-[#D0D5DD] p-2"
                type="email"
                placeholder="Email"
                name=""
                id=""
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
            <label htmlFor="" className="flex flex-col gap-2">
              Message
              <textarea
                className="appearance-none rounded-lg border border-[#D0D5DD] p-2"
                name=""
                id=""
              ></textarea>
            </label>
            <div className="flex items-center justify-start gap-3">
              <input
                type="checkbox"
                name=""
                id=""
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
        </div>
      </section>
    </main>
  );
};

export default ContactHero;
