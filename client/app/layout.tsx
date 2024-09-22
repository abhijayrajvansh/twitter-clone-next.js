import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
          <GoogleOAuthProvider clientId="992040320194-urrqthmim8n5h52oaceesljhuefkjiff.apps.googleusercontent.com">
            {children}
          </GoogleOAuthProvider>
      </body>
    </html>
  );
}
