"use client";
import { useState } from "react";
import { FiCopy } from "react-icons/fi";

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <button
      className={`${copied ? "bg-primary text-white" : ""} flex cursor-pointer items-center justify-center gap-3 rounded-lg border border-[#D0D5DD] p-2 px-4 transition-all duration-500 ease-in-out`}
      onClick={handleCopy}
    >
      <FiCopy />
      {copied ? "Link copied" : "Copy link"}
    </button>
  );
}
