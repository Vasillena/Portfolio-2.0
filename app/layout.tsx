import "./globals.css";

import LockScreen from "@/components/Common/LockScreen";
import { MazzardRegular } from "@/utils/fonts";
import { ModalProvider } from "@/utils/ModalProvider";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Vasilena Yoneva | vasilena.space",
  description: "Personal Portfolio Page",
  keywords: [
    "Василена Йонева",
    "портфолио",
    "програмист",
    "дизайнер",
    "Vasilena Yoneva",
    "portfolio",
    "coder",
    "developer",
    "designer",
  ],
  alternates: {
    canonical: "https://vasilena.space",
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
