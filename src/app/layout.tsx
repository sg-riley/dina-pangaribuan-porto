import type { Metadata } from "next";
import { Plus_Jakarta_Sans as PlusJakarta, Poppins } from "next/font/google";
import "./globals.css";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { MainNavbar } from "@/components/main-navbar";

const plusJakartaFont = PlusJakarta({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dina Pangaribuan",
  description: "Generated by create next app",
  icons: {
    icon: "/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaFont.variable} ${poppinsFont.variable} antialiased bg-radial-[at_50%_85%] from-deep-blue via-midnight to-black to-100% `}
      >
        <MainNavbar />

        {children}
        <ShootingStars
          minSpeed={20}
          minDelay={1000}
          maxDelay={3000}
          starWidth={16}
          starHeight={2}
        />
        <StarsBackground starDensity={0.00025} />
      </body>
    </html>
  );
}
