"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Assets } from "../assets";
import Link from "next/link";
import useNavStore from "../store/useStore"; // <-- Add this import
import { AnimatePresence } from "framer-motion";
import { MotionSlideDown } from "./(motion)/MotionFile";

const Header = () => {
  const navLinks = [
    { name: "Features", href: "/#features" }, // <-- update this line
    { name: "Company", href: "/company" },
    { name: "Faqs", href: "/company#faqs" },
    { name: "Blog", href: "/blog" },
  ];

  const { isNavOpen, toggleNav } = useNavStore();

  // Lock scroll when mobile nav is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  return (
    <header className="mx-auto h-[90px] w-full max-w-7xl p-4 lg:p-0">
      <nav className="relative flex h-full w-full items-center justify-between">
        <MotionSlideDown speed={0.3}>
          <Link href="/">
            <Image
              src={Assets.logo}
              alt="Aquatec Logo"
              width={140}
              height={42}
            />
          </Link>
        </MotionSlideDown>

        {/* desktop menu */}
        <MotionSlideDown speed={0.3} className="hidden lg:flex">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="hover:text-primary text-text2 p-4 text-lg font-medium transition-all duration-300 ease-in-out"
            >
              {link.name}
            </Link>
          ))}
        </MotionSlideDown>
        <MotionSlideDown speed={0.3} className="hidden lg:flex">
          <Link
            href="/contact"
            className="bg-primary hover:text-primary border-primary flex h-[50px] w-[195px] items-center justify-center rounded-lg border text-white transition-all duration-300 ease-in-out hover:bg-white"
          >
            Contact
          </Link>
        </MotionSlideDown>

        {/* nav menu */}
        <div className="block lg:hidden">
          <button
            onClick={toggleNav}
            className="bg-primary size-10 rounded-md p-2"
          >
            {!isNavOpen ? (
              <IoMenu className="rounded-md text-2xl text-white" />
            ) : (
              <IoClose className="rounded-md text-2xl text-white" />
            )}
          </button>
        </div>

        {/* Mobile nav, only show if isNavOpen */}
        <AnimatePresence>
          {isNavOpen && (
            <MotionSlideDown
              speed={0.3}
              key="mobile-nav"
              className="text-text fixed top-[90px] left-0 z-50 flex h-[calc(100vh-90px)] w-full flex-col items-center justify-start gap-2 divide-y divide-[#ECE8FF]/40 border-t border-t-[#ECE8FF] bg-white pt-10 lg:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="hover:text-primary text-text2 w-full p-4 text-center text-lg font-medium transition-all duration-300 ease-in-out"
                  onClick={toggleNav}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-primary mt-20 flex h-[50px] w-[195px] items-center justify-center rounded-lg text-white"
              >
                Contact
              </Link>
            </MotionSlideDown>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
