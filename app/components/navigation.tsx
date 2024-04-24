"use client";
import React from "react";
import Link from "next/link";
import { noto_sans_jp } from "../fonts";
import { usePathname } from "next/navigation";
import { IoFastFood, IoGift } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineFormatAlignLeft } from "react-icons/md";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="text-sm">
      <div className="flex overflow-x-auto">
        <Link href="/food">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3 w-max flex  items-center gap-2  ${pathname == "/food" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            <IoFastFood size={22} />
            食べ物
          </div>
        </Link>

        <Link href="/souvenir">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex  items-center gap-2  ${pathname == "/souvenir" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            <IoGift size={22} />
            おみやげ
          </div>
        </Link>
        <Link href="/spot">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-1 py-3  w-max flex  items-center gap-2   ${pathname == "/spot" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            <MdPlace size={22} />
            観光スポット
          </div>
        </Link>
        <Link href="/facility">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex  items-center gap-2  ${pathname == "/facility" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            <FaRegBuilding size={22} />
            商業施設
          </div>
        </Link>
        <Link href="/report">
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex  items-center gap-2 ${pathname == "/report" ? "border-b-2 border-b-lime-600 text-slate-800" : ""} `}
          >
            <GiNotebook size={22} />
            レポート
          </div>
        </Link>
        <Link
          href="https://forms.gle/MaLsb7jxoWMyRQ1V6"
          rel="noopener noreferrer external"
          target="_blank"
        >
          <div
            className={`${noto_sans_jp.className} font-semibold text-slate-500 hover:text-slate-800 px-4 py-3  w-max flex  items-center gap-2  `}
          >
            <MdOutlineFormatAlignLeft size={22} />
            {/* <GiNotebook size={22} /> */}
            問い合わせ
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
