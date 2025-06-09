"use client";
import React from "react";
import { FaqsData } from "../assets";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useFaqStore } from "../store/useStore";

const Faqs = () => {
  const { openIndex, setOpenIndex } = useFaqStore();

  return (
    <main id="faqs" className="h-auto w-full p-4">
      <section className="mx-auto flex h-auto w-full max-w-7xl items-start justify-start">
        <div className="flex h-auto w-full flex-col items-start justify-start gap-5 xl:w-1/3">
          <p className="bg-accent text-primary w-fit rounded-full p-1 px-3">
            FAQS
          </p>
          <h4 className="text-left text-2xl font-medium lg:text-4xl">
            Frequently Asked
            <br /> Questions.
          </h4>
          <p>
            Need some help with our app? Here are our most
            <br /> frequently asked questions.
          </p>
        </div>

        {/* faqs */}
        <div className="flex h-auto w-full flex-col gap-5 xl:w-2/3">
          {FaqsData.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#E4E7EC] bg-white shadow-sm transition-all"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                onClick={() => setOpenIndex(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-content-${idx}`}
              >
                <span className="text-base font-medium text-[#232323] md:text-lg">
                  {faq.question}
                </span>
                <span className="bg-bkg2 p-5 text-2xl">
                  {openIndex === idx ? <IoIosRemove /> : <IoIosAdd />}
                </span>
              </button>
              {openIndex === idx && (
                <div
                  id={`faq-content-${idx}`}
                  className="px-6 pb-5 text-sm text-[#667185] md:text-base"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Faqs;
