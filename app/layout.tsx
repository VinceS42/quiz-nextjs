import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const raleway = Raleway({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
    title: "Demo d'un quizz",
    description: "Voici un petit quizz pour tester vos connaissances",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={raleway.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
