import PersonClientPage from "../components/personClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://morioka.club/person"),
  title: "もりおかクラブ |  人物",
  description: "盛岡を感じる特産品や伝統的なおみやげを紹介します。",
  openGraph: {
    title: "もりおかクラブ | 人物",
    description: "盛岡を感じる特産品や伝統的なおみやげを紹介します。",

    url: "https://morioka.club/person",
    siteName: "もりおかクラブ | 人物",
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
const PersonPage = () => {
  return <PersonClientPage />;
};

export default PersonPage;
