import type { Metadata } from "next";
import Layout from "@/components/Layout";
import "./globals.css";
import { ShoppingCartContextProvider } from "@/context/ShoppingCartContext";

export const metadata: Metadata = {
  title: "فروشگاه تستی",
  description: "تمرین اولین فروشگاه اینترنتی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ShoppingCartContextProvider>
          <Layout>{children}</Layout>
        </ShoppingCartContextProvider>
      </body>
    </html>
  );
}
