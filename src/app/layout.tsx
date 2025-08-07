import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});

const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: "Don't Worry Be Happy",
    description: '당신의 걱정을 덜어드립니다',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
