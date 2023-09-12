import { type Metadata } from "next";
import Script from "next/script";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Saeed Bidrang",
    default:
      "Saeed Bidrang | Senior Software Developer, Solutions Architect, Startup Founder",
  },
  description:
    "Explore the world of Saeed Bidrang, a seasoned Senior Software Developer, Solutions Architect, and Startup Founder. Discover insights on software engineering, startup challenges, and innovative projects.",
  // alternates: {
  //   types: {
  //     'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
  //   },
  //},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7NQ3EESMLM" />
        <Script id="google-analytics">
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-7NQ3EESMLM');
        `}
        </Script>
      </body>
    </html>
  );
}
