"use client";
import React, { useState } from "react";
import { FaqsData } from "@/app/assets";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const containerVariants = {
  hidden: {
    opacity: 0,
    translateY: -50,
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 1.2,
    },
  },
};

const faqsVariants = {
  hidden: {
    opacity: 0,
    translateX: -50,
  },
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 1,
    },
  },
};

const FrequentlyAsked = () => {
  const location = usePathname();

  const [activeIndex, setActiveIndex] = useState(null);

  const handleActive = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`h-auto w-full p-4 ${location === "/contact" ? "bg-primary text-white" : "text-text2 bg-white"}`}
      id="faqs"
    >
      <section className="mx-auto my-10 flex h-auto w-full max-w-7xl flex-col gap-4 xl:my-20 xl:flex-row">
        <div className="flex w-full flex-col gap-4 xl:w-1/3">
          <p className="bg-accent text-primary w-fit rounded-full p-1 px-3">
            FAQS
          </p>
          <h2 className="text-2xl font-medium lg:text-4xl">
            Frequently Asked
            <br /> Questions
          </h2>
          <p className="xl:mt-5">
            Need some help with our app? Here are our most
            <br className="hidden xl:block" /> frequently asked questions.
          </p>
        </div>

        <div className="mt-5 flex h-full w-full flex-col gap-5 xl:mt-0 xl:w-2/3">
          <AnimatePresence initial={false}>
            {FaqsData.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={faqsVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => handleActive(idx)}
                className={
                  activeIndex === idx
                    ? "flex w-full cursor-pointer flex-row-reverse gap-4 rounded-xl border border-[#E4E7EC] bg-white p-5 shadow transition-all"
                    : "flex w-full cursor-pointer flex-row-reverse gap-4 rounded-xl border border-[#E4E7EC] bg-white p-5 text-[#232323] shadow transition-all"
                }
              >
                <motion.div className="flex items-start justify-center">
                  {activeIndex === idx ? (
                    <IoIosRemove
                      size={28}
                      className="bg-bkg2 rounded-full text-xl transition-all duration-300"
                    />
                  ) : (
                    <IoIosAdd
                      size={28}
                      className="bg-bkg2 rounded-full text-xl transition-all duration-300"
                    />
                  )}
                </motion.div>
                <div className="text-text2 flex w-full flex-col items-start justify-start gap-2">
                  <h4 className="text-left text-base md:text-lg">
                    {faq.question}
                  </h4>
                  <AnimatePresence>
                    {activeIndex === idx && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-full overflow-hidden"
                      >
                        <p className="py-2 text-left text-sm leading-6 font-normal md:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </motion.main>
  );
};

export default FrequentlyAsked;
