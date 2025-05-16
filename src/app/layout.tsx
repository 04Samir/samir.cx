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
    openGraph: {
        type: 'website',
        url: 'https://samir.cx',
        title: "Samir's Portfolio",
        description: 'A Website to Showcase my Projects & Certifications',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#41E2FF' },
        { media: '(prefers-color-scheme: dark)', color: '#000123' },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="EN">
            <head>
                <meta name="apple-mobile-web-app-title" content="samir.cx" />
            </head>
            <body className={`${rammettoOne.variable} ${outfit.variable}`}>{children}</body>
        </html>
    );
}
