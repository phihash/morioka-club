import FacilityClientPage from "../components/facilityClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://morioka.club/facility"),
  title: "もりおかクラブ | 商業施設",
  description:
  "盛岡周辺の主な商業施設を紹介しています!",
  openGraph: {
    title: "もりおかクラブ | 商業施設",
    description:
    "盛岡周辺の主な商業施設を紹介しています!",
    url: "https://morioka.club/facility",
    siteName:  "もりおかクラブ | 商業施設" ,
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


// eslint-disable-next-line react/display-name
const FacilityPage = () => {
  return <FacilityClientPage/>;
};

export default FacilityPage;
