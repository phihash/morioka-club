"use client";
import Link from "next/link";
import { zen_maru_gothic } from "../fonts";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header>
      <div className="w-11/12 mx-auto">
        <Link href="/">
          <div
            className={`${zen_maru_gothic.className}  text-2xl font-bold w-max text-green-700  px-3 py-8 rounded-lg w-32 text-center tracking-wider`}
          >
            もりおかクラブ
          </div>
        </Link>

        <Navigation></Navigation>
      </div>
    </header>
  );
}
