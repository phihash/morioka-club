"use client";
import React from "react";
import Link from "next/link";
import { noto_sans_jp } from "../fonts";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="text-sm">
      <div className="flex overflow-x-auto">
        <Link href="/food">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3 w-max flex-none  ${pathname == "/food" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            食べ物
          </div>
        </Link>

        <Link href="/souvenir">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex-none  ${pathname == "/souvenir" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            おみやげ
          </div>
        </Link>
        <Link href="/spot">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex-none  ${pathname == "/spot" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            観光スポット
          </div>
        </Link>
        <Link href="/event">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex-none  ${pathname == "/event" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            イベント
          </div>
        </Link>
        <Link href="/facility">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex-none ${pathname == "/facility" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            商業施設
          </div>
        </Link>
        <Link href="/diary">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex-none ${pathname == "/diary" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            体験記
          </div>
        </Link>
      </div>
    </nav>
  );
};


export default Navigation;
