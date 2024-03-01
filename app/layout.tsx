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
    description: "盛岡簡単ガイドLINE",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    images: ['https://i.gyazo.com/ceb5ba182e14462acd5c0b2fae1a9a35.jpg'],
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
        <meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site:id" content="1467726470533754880" />
<meta name="twitter:creator" content="@nextjs" />
<meta name="twitter:creator:id" content="1467726470533754880" />
<meta name="twitter:title" content="Next.js" />
<meta name="twitter:description" content="The React Framework for the Web" />
<meta name="twitter:image" content="https://nextjs.org/og.png" />

      </head>
      <body className={inter.className}>
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  );
}
