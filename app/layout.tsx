import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "もりおかガイド",
  description: "もりおかガイド",
  openGraph: {
    title: "もりおかガイド",
    description: "もりおかガイド",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://i.gyazo.com/ceb5ba182e14462acd5c0b2fae1a9a35.jpg"],
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
        <meta
          property="twitter:image"
          content="https://i.gyazo.com/ceb5ba182e14462acd5c0b2fae1a9a35.jpg"
        ></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
      </head>
      <body className={inter.className}>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
