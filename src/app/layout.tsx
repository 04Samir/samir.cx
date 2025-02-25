import type { Metadata, Viewport } from 'next';
import { Outfit, Rammetto_One } from 'next/font/google';

import './globals.css';

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

const rammettoOne = Rammetto_One({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-rammetto-one',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'samir.cx',
    description: 'Personal Portfolio Website',
    icons: [],
    manifest: '',
    openGraph: {
        type: 'website',
        url: 'https://samir.cx',
        title: "Samir's Portfolio",
        description: 'A Website to Showcase my Projects & Certifications',
        images: [
            {
                url: 'https://samir.cx/logo.png',
                width: 769,
                height: 769,
                alt: 'logo',
            },
        ],
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#41E2FF',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="EN">
            <body className={`${rammettoOne.variable} ${outfit.variable}`}>{children}</body>
        </html>
    );
}
