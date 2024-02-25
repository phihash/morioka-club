import type { Metadata } from "next";
import { inter } from './fonts'
import "./globals.css";
import Header from "./components/header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "盛岡かんたんガイド",
  description: "盛岡かんたんガイド",
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/public/icon.png',
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
      <body className={inter.className}>
        <Header></Header>
        <main>
         {children}
        </main>
      </body>
    </html>
  );
}
