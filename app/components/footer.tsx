"use client";
import Link from "next/link";
import { zen_maru_gothic, lexend } from "../fonts";
import { usePathname } from "next/navigation";

// import { useState } from "react";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer>
      <div className="bg-green-700">
        <div className="w-11/12 mx-auto pb-16">
          <Link href="/">
            <div
              className={`${zen_maru_gothic.className}  text-3xl font-bold w-max text-white px-4 pt-14 pb-10 tracking-wider`}
            >
              もりおかクラブ
            </div>
          </Link>
          <div className="md:flex">
            <Link href="/food">
              <div
                className={`${zen_maru_gothic.className} text-xl text-white  font-bold w-max mx-4 my-6 tracking-wider ${pathname == "/food" ? "border-b-4 border-white pb-2" : ""}`}
              >
                食べ物
              </div>
            </Link>
            <Link href="/souvenir">
              <div
                className={`${zen_maru_gothic.className} text-xl text-white  font-bold w-max mx-4 my-6 tracking-wider ${pathname == "/souvenir" ? "border-b-4 border-white pb-2" : ""}`}
              >
                おみやげ
              </div>
            </Link>
            <Link href="/spot">
              <div
                className={`${zen_maru_gothic.className} text-xl text-white  font-bold w-max mx-4 my-6 tracking-wider ${pathname == "/spot" ? "border-b-4 border-white pb-2" : ""}`}
              >
                観光スポット
              </div>
            </Link>
            <Link href="/event">
              <div
                className={`${zen_maru_gothic.className} text-xl text-white  font-bold w-max mx-4 my-6 tracking-wider ${pathname == "/event" ? "border-b-4 border-white pb-2" : ""}`}
              >
                イベント
              </div>
            </Link>
            <Link href="/facility">
              <div
                className={`${zen_maru_gothic.className} text-xl text-white  font-bold w-max mx-4 my-6 tracking-wider ${pathname == "/facility" ? "border-b-4 border-white pb-2" : ""}`}
              >
                商業施設
              </div>
            </Link>
            <Link href="/diary">
              <div
                className={`${zen_maru_gothic.className} text-xl text-white  font-bold w-max mx-4 my-6 tracking-wider ${pathname == "/diary" ? "border-b-4 border-white pb-2" : ""}`}
              >
                体験記
              </div>
            </Link>
          </div>
          {/* <hr className="h-px my-6 bg-white border-0 dark:bg-white" /> */}
          <p
            className={`${lexend.className} text-center text-gray-900 pt-20 text-lg font-bold`}
          >
            © 2024 phihash
          </p>
        </div>
      </div>
    </footer>
  );
}
