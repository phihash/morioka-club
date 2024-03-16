"use client";
import React from "react";
import Link from "next/link";
import { noto_sans_jp } from "../fonts";
import { usePathname } from "next/navigation";
import { IoFastFood ,IoGift } from "react-icons/io5";
import { MdPlace ,MdLightMode  } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="text-sm">
      <div className="flex overflow-x-auto">
        <Link href="/food">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3 w-max flex  items-center gap-2  ${pathname == "/food" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            <IoFastFood />
            食べ物
          </div>
        </Link>

        <Link href="/souvenir">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex  items-center gap-2  ${pathname == "/souvenir" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            <IoGift/>
            おみやげ
          </div>
        </Link>
        <Link href="/spot">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-3 py-3  w-max flex  items-center gap-2   ${pathname == "/spot" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            <MdPlace/>
            観光スポット
          </div>
        </Link>
        <Link href="/event">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-3 py-3  w-max flex  items-center gap-2  ${pathname == "/event" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            <MdLightMode/>
            イベント
          </div>
        </Link>
        <Link href="/facility">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex  items-center gap-2  ${pathname == "/facility" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            <FaRegBuilding />
            商業施設
          </div>
        </Link>
        <Link href="/diary">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex  items-center gap-2 ${pathname == "/diary" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            <GiNotebook/>
            体験記
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
