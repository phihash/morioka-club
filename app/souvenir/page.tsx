import SouvenirClientPage from "../components/souvenirClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://morioka.club/souvenir"),
  title: "もりおかクラブ | おみやげ",
  description:
    "盛岡のおみやげを紹介しています!",
  openGraph: {
    title: "もりおかクラブ | おみやげ",
    description:
    "盛岡のおみやげを紹介しています!",
    url: "https://morioka.club/souvenir",
    siteName:  "もりおかクラブ | おみやげ" ,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://i.gyazo.com/cd22300a3db30a141b2ba1e80c6294ef.jpg", // Must be an absolute URL
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://i.gyazo.com/cd22300a3db30a141b2ba1e80c6294ef.jpg"],
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
const SouvenirPage = () => {
  return <SouvenirClientPage/>;
};

export default SouvenirPage;
