import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Bharat RateWatch - Daily Prices for Gold, Silver, Fuel & More',
  description:
    'Get real-time daily prices for gold, silver, petrol, diesel, LPG, and vegetables in India. Your one-stop destination for daily rate checks.',
  keywords: 'gold rate, silver rate, petrol price, diesel price, lpg price, india, daily prices',
  other: {
    "google-adsense-account": "ca-pub-8056938512195354"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8056938512195354"
           crossorigin="anonymous"></script>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
