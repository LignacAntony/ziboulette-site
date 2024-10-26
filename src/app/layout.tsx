import { arvo } from "./fonts/fonts";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { headers } from "next/headers";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Récupérer le pathname côté serveur
    const headersList = headers();
    const pathname = headersList.get("x-invoke-path") || "/";

    return (
        <html lang="fr">
            <body className={`${arvo.className}`}>
                <AppRouterCacheProvider>
                    <Navigation pathname={pathname} />
                    <main className="lg:pl-64 md:pl-12 pb-16 md:pb-0">{children}</main>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
