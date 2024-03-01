"use client";
import React from "react";
import Link from "next/link";
import { noto_sans_jp } from "../fonts";

const Navigation: React.FC<NavigationProps> = ({ activeTab, clickTab }) => {
  return (
    <nav className="text-sm">
      <div className="flex overflow-x-auto">
        <Link href="/food">
          <div
            data-tab="food"
            onClick={clickTab}
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3 w-max flex-none  ${activeTab == "food" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            食べ物
          </div>
        </Link>
        <Link href="/tour">
          <div
            data-tab="tour"
            onClick={clickTab}
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex-none  ${activeTab == "tour" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            観光
          </div>
        </Link>
        <Link href="/souvenir">
          <div
            data-tab="souvenir"
            onClick={clickTab}
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex-none  ${activeTab == "souvenir" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            おみやげ
          </div>
        </Link>
        <Link href="/culture">
          <div
            data-tab="culture"
            onClick={clickTab}
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex-none ${activeTab == "culture" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            文化
          </div>
        </Link>
        <Link href="/transportation">
          <div
            data-tab="transportation"
            onClick={clickTab}
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex-none ${activeTab == "transportation" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            交通
          </div>
        </Link>
        <Link href="/toilet">
          <div
            data-tab="toilet"
            onClick={clickTab}
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex-none ${activeTab == "toilet" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            トイレ
          </div>
        </Link>
        <Link href="/diary">
          <div
            data-tab="diary"
            onClick={clickTab}
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex-none ${activeTab == "diary" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            体験記
          </div>
        </Link>
      </div>
    </nav>
  );
};

interface NavigationProps {
  clickTab: (e: React.MouseEvent<HTMLDivElement>) => void;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default Navigation;
