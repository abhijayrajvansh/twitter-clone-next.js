import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { GoogleOAuthProvider } from '@react-oauth/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter Clone by Abhijay",
  description: "Developed by Abhijay Rajvansh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleOAuthProvider clientId="228978916738-brkf54ujo2bbme53uhnl3v5jtvk8d8at.apps.googleusercontent.com">
        {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
