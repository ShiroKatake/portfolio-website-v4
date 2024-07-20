import type { Metadata } from "next";
import { Eczar, DM_Sans } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "@/styles/GlobalStyles.styled";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const eczar = Eczar({
  subsets: ["latin"],
  variable: "--font-eczar",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${eczar.variable}`}>
      <body>
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
