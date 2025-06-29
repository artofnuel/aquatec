"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { policyData, termsData } from "../assets";
import { MotionSlideDown } from "./(motion)/MotionFile";

const Content_Info = () => {
  const location = usePathname();
  const termsRoute = location === "/terms-and-conditions";
  const privacyRoute = location === "/privacy";
  return (
    <main className="h-auto w-full">
      <section className="flex h-auto w-full flex-col items-center justify-center gap-10">
        {termsRoute && (
          <div className="bg-primary flex h-[215px] w-full flex-col items-center justify-center gap-5 text-white">
            <h1 className="text-xl font-medium xl:text-4xl">
              Terms & Conditions
            </h1>
            <p className="text-base font-medium">
              Effective Since 7 January, 2025
            </p>
          </div>
        )}
        {privacyRoute && (
          <div className="bg-primary flex h-[215px] w-full flex-col items-center justify-center gap-5 text-white">
            <h1 className="text-xl font-medium xl:text-4xl">Privacy Policy</h1>
            <p className="text-base font-medium">
              Effective Since 7 January, 2025
            </p>
          </div>
        )}
        <div className="mx-auto my-10 w-full max-w-7xl p-4 text-justify text-base">
          <MotionSlideDown speed={1}>
            <section className="w-full">
              {termsRoute ? (
                <ol className="list-decimal space-y-6 pl-6">
                  {termsData.map((term, idx) => {
                    const [heading, ...body] = term.split("\n");
                    return (
                      <li key={idx} className="mb-4">
                        <span className="mb-1 block font-bold">{heading}</span>
                        {body.length > 0 && (
                          <div className="whitespace-pre-line text-gray-700">
                            {body
                              .join("\n")
                              .split(/- /g)
                              .map((line, i) =>
                                i === 0 ? (
                                  <span key={i}>{line.trim()}</span>
                                ) : (
                                  <div key={i} className="pl-4">
                                    • {line.trim()}
                                  </div>
                                ),
                              )}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ol>
              ) : (
                <ol className="list-decimal space-y-6 pl-6">
                  {policyData.map((term, idx) => {
                    const [heading, ...body] = term.split("\n");
                    return (
                      <li key={idx} className="mb-4">
                        <span className="mb-1 block font-bold">{heading}</span>
                        {body.length > 0 && (
                          <div className="whitespace-pre-line text-gray-700">
                            {body
                              .join("\n")
                              .split(/- /g)
                              .map((line, i) =>
                                i === 0 ? (
                                  <span key={i}>{line.trim()}</span>
                                ) : (
                                  <div key={i} className="pl-4">
                                    • {line.trim()}
                                  </div>
                                ),
                              )}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ol>
              )}
            </section>
          </MotionSlideDown>
        </div>
      </section>
    </main>
  );
};

export default Content_Info;
