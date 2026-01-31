import "./globals.css";

import LockScreen from "@/components/Common/LockScreen";
import { MazzardRegular } from "@/utils/fonts";
import { ModalProvider } from "@/utils/ModalProvider";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Vasilena Yoneva | vasilena.space",
  description:
    "Frontend developer & designer focused on clean UI, thoughtful UX and modern web technologies.",
  keywords: [
    "Vasilena Yoneva",
    "Василена Йонева",
    "frontend developer",
    "web developer",
    "UI designer",
    "React",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Vasilena Yoneva", url: "https://vasilena.space" }],
  creator: "Vasilena Yoneva",
  applicationName: "Vasilena Yoneva Portfolio",
  category: "technology",
  alternates: {
    canonical: "https://vasilena.space",
  },
  openGraph: {
    title: "Vasilena Yoneva | vasilena.space",
    description: "Personal Portfolio",
    url: "https://vasilena.space",
    siteName: "vasilena.space",
    images: [
      {
        url: "https://vasilena.space/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Vasilena Yoneva Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasilena Yoneva | Portfolio",
    description: "Personal Portfolio",
    images: ["https://vasilena.space/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${MazzardRegular.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            <LockScreen />
            {children}
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
