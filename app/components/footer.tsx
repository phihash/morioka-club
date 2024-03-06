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
    <footer>
      <div className="bg-green-700">
        <div className="w-11/12 mx-auto h-40">
          <Link href="/">
            <div
              data-tab="top"
              // onClick={clickTab}
              className={`${zen_maru_gothic.className}  text-2xl font-bold w-max text-white px-3 py-10 text-center tracking-wider`}
            >
              もりおかクラブ
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
