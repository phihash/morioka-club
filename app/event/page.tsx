import React from "react";
import { noto_sans_jp } from "../fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://morioka.club/event"),
  title: "もりおかクラブ | イベント",
  description: "盛岡のイベントについて紹介します!",
  openGraph: {
    title: "もりおかクラブ | イベント",
    description:  "盛岡のイベントについて紹介します!",
    url: "https://morioka.club/event",
    siteName: "もりおかクラブ | イベント",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://i.gyazo.com/b4c3584ba891e4b97f635f64e5636bed.png", // Must be an absolute URL
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://i.gyazo.com/b4c3584ba891e4b97f635f64e5636bed.png"],
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/public/icon.png",
    },
  ],
};

const EventPage = () => {
  return (
    <div className="bg-green-700">
      <div className="bg-white rounded-b-3xl  pb-24">
        {/* pb-24でした */}
        <div className="py-24">
          <p
            className={`text-6xl font-semibold ${noto_sans_jp.className} w-max mx-auto mb-6`}
          >
            ☀️
          </p>
          <h1
            className={`md:text-4xl text-3xl font-semibold ${noto_sans_jp.className} w-max mx-auto `}
          >
            イベント
          </h1>
        </div>

        <div
          className={`md:w-3/4 w-10/12 mx-auto ${noto_sans_jp.className} font-semibold`}
        >
          このページは、現在編集中です。
        </div>
      </div>
    </div>
  );
};

export default EventPage;
