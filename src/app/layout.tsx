import type { Metadata } from "next";
import { arvo } from "./fonts/fonts";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";
import BottomNavBar from "@/components/BottomNavBar";
import HeaderAppBar from "@/components/HeaderAppBar";


export const metadata: Metadata = {
    title: "Ziboulette",
    description: "Comprendre l'actualité de façon ludique et accessible",
    keywords:
        "Ziboulette, actu ludique, articles divertissants, nouvelles décalées, boulettes amusantes, ZIB, Ziboulettes Incroyablement Bizarres, partage de boulettes, VDM"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr">
          <body className={`${arvo.className}`}>
              <AppRouterCacheProvider>
				<HeaderAppBar />
                  {children}
				  <BottomNavBar />
              </AppRouterCacheProvider>
          </body>
      </html>
  );
}
