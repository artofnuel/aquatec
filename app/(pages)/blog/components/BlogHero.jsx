"use client";
import { MotionFadeIn } from "@/app/components/(motion)/MotionFile";
import Link from "next/link";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const BlogHero = () => {
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_NEWSLETTER;
  const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(serviceID, templateID, { email }, userID);
      setSubmitted(true);
    } catch (error) {
      alert("Failed to subscribe.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="text-text2 h-auto w-full overflow-hidden p-4 xl:mt-5 xl:mb-20">
      <MotionFadeIn speed={0.3}>
        <section className="mx-auto flex h-auto w-full max-w-7xl flex-col items-center justify-start gap-5">
          <div className="flex h-auto w-full flex-col items-center justify-center py-5">
            <p className="bg-accent text-primary w-fit rounded-full p-1 px-3">
              Blog
            </p>
            <h2 className="mt-5 text-center text-2xl font-medium lg:text-4xl">
              Stay Informed. Stay Hydrated
            </h2>
            <p className="mt-3 text-center">
              Subscribe to our newsletter to get the latest blog drops straight
              to your inbox!
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex w-full flex-col items-start gap-5 xl:flex-row">
              <input
                className="w-[93vw] rounded-lg border border-[#D0D5DD] p-2 xl:w-[450px]"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
              <button
                className="bg-primary w-[120px] cursor-pointer rounded-xl p-3 text-center text-white"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg
                      className="ml-2 h-5 w-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
            {submitted && <p className="pt-5 text-center">Subscribed!!</p>}
            <p className="mt-5">
              We care about your data in our{" "}
              <Link href="/privacy" className="cursor-pointer underline">
                privacy policy
              </Link>
            </p>
          </form>
        </section>
      </MotionFadeIn>
    </main>
  );
};

export default BlogHero;
