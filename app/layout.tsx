import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pawspa 宠物洗护",
  description: "专注猫狗洗护、美容、护理与预约到店服务的精品宠物洗护网站。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
