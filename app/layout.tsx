import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import Header from "./components/header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "盛岡かんたんガイド",
  description: "盛岡かんたんガイド",
  openGraph: {
    title: "盛岡かんたんガイド",
    description:"盛岡簡単ガイドLINE",
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "盛岡かんたんガイドtwitter",
    description:"Twiiter説明",
    site: '@hogehoge',
    creator: '@hogehoge',
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/public/icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <meta property="og:image" content="<generated>" />
<meta property="og:image:type" content="<generated>" />
<meta property="og:image:width" content="<generated>" />
<meta property="og:image:height" content="<generated>" />
      </head>
      <body className={inter.className}>
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  );
}
