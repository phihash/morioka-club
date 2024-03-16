import SpotClientPage from "../components/spotClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://morioka.club/spot"),
  title: "もりおかクラブ | 観光スポット",
  description:
  "盛岡周辺の主な観光スポットを紹介しています!",
  openGraph: {
    title: "もりおかクラブ | 観光スポット",
    description:
    "盛岡周辺の主な観光スポットを紹介しています!",
    url: "https://morioka.club/spot",
    siteName:  "もりおかクラブ | 観光スポット" ,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://i.gyazo.com/1289e174dc6da810734d8ab12281f1d3.jpg", // Must be an absolute URL
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://i.gyazo.com/1289e174dc6da810734d8ab12281f1d3.jpg"],
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/public/icon.png",
    },
  ],
};


// eslint-disable-next-line react/display-name
const SpotPage = () => {
  return <SpotClientPage/>;
};

export default SpotPage;
