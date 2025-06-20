"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const BlogNewsletter = () => {
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
    <form
      onSubmit={handleSubmit}
      className="mx-auto h-auto w-full flex-col xl:w-2/3"
    >
      <div className="mx-auto flex h-auto w-full flex-col gap-5 xl:flex-row">
        <input
          type="email"
          name=""
          id=""
          placeholder={
            submitted ? "Thank you for subscribing" : "you@email.com"
          }
          className="w-full rounded-lg border border-[#D0D5DD] bg-white p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          required
        />
        <button type="submit" className="bg-primary rounded-lg p-3 text-white">
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
    </form>
  );
};

export default BlogNewsletter;
