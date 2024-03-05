"use client";
import Link from "next/link";
import { zen_maru_gothic } from "../fonts";
import { useState } from "react";

export default function Footer() {
  // const [activeTab, setActiveTab] = useState<string>("top");
  // const clickTab = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const targetTab = e.currentTarget.dataset.tab;
  //   if (targetTab) {
  //     setActiveTab(targetTab);
  //   }
  // };
  return (
    <header>
      <div className="w-11/12 mx-auto">
        <Link href="/">
          <div
            data-tab="top"
            // onClick={clickTab}
            className={`${zen_maru_gothic.className} my-6 text-2xl font-bold w-max text-green-700  px-3 py-2 text-center tracking-wider`}
          >
            もりおかガイド
          </div>
        </Link>
      </div>
    </header>
  );
}
