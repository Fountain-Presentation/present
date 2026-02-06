import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DebugProvider } from "@/components/debug/DebugProvider";

const generalSans = localFont({
  src: [
    {
      path: "../fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Variable.woff2",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Growth Strategy Brief",
  description: "A lifecycle marketing framework for turning individual franchise operators into enterprise contracts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={generalSans.variable}
      >
        <DebugProvider>
          {children}
        </DebugProvider>
      </body>
    </html>
  );
}
