import Image from "next/image";
import React from "react";
import { Assets, CompanyLinks, SocialsData } from "../assets";

const Footer = () => {
  return (
    <footer className="h-auto w-full border-t border-[#DBDCDE] py-10 text-[#667185] xl:h-[250px]">
      <nav className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center xl:flex-row xl:items-start xl:justify-between">
        <div className="flex w-full flex-col items-center justify-center gap-5 xl:items-start xl:justify-start">
          <div>
            <Image
              src={Assets.logo}
              alt="Aquatec Logo"
              className="h-10 w-auto"
            />
          </div>
          <p className="text-xs xl:text-base">
            ©️2025 AQUATEC LTD. All rights reserved.
          </p>
          <div className="flex items-start justify-center gap-2">
            {SocialsData.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-5 flex w-full flex-col items-center justify-center gap-3 xl:mt-5 xl:flex-row xl:items-start xl:justify-between">
          {CompanyLinks.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 xl:items-start"
            >
              <h3 className="text-text2 text-lg font-bold">{section.name}</h3>
              <ul className="flex flex-col items-center justify-center gap-2 xl:items-start xl:gap-1">
                {section.links.map((link, linkIndex) => {
                  // Remove "/#" for display, but keep href as is
                  let displayText = link.startsWith("/#")
                    ? link.replace("/#", "").replace("-", " ")
                    : link.replace("/", "").replace("-", " ");
                  displayText =
                    displayText.charAt(0).toUpperCase() + displayText.slice(1);

                  return (
                    <li key={linkIndex}>
                      <a
                        href={link}
                        className="hover:text-primary text-sm font-medium transition-colors xl:text-base"
                      >
                        {displayText}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
