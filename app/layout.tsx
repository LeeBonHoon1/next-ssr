import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import QueryProvider from "@/providers/query-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "한터블로그",
  description: "한터 | BLOG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="ko">
        <body className={inter.className} suppressHydrationWarning>
          <QueryProvider>
            <main>{children}</main>
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
