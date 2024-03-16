import FoodClientPage from "../components/foodClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://morioka.club/food"),
  title: "もりおかクラブ | 食べ物",
  description:
    "盛岡周辺の美味しい食べ物を紹介しています!",
  openGraph: {
    title: "もりおかクラブ | 食べ物",
    description:
    "盛岡周辺の美味しい食べ物を紹介しています!",
    url: "https://morioka.club/food",
    siteName:  "もりおかクラブ | 食べ物" ,
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
const FoodPage = () => {
  return <FoodClientPage/>;
};

export default FoodPage;
