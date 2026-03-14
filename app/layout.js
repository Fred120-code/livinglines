import { Bricolage_Grotesque, Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { Suspense } from "react";

import Analytics from "../app/Component/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weights: ["100", "400", "700", "900"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weights: ["300", "400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import Analytics from "../app/Component/Analytics";

export const metadata = {
  title: "Livinglines",
  description: "Livingline Properties Listings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N4WMNS4G');
          `}
        </script>
        <script
          src="https://www.googletagmanager.com/gtag/js?id=G-LFHBE5WMRY"
          strategy="afterInteractive"
        />
        <script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LFHBE5WMRY');
          `}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} ${bricolage.variable} `}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N4WMNS4G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
