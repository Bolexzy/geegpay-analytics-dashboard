import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Analytics Dashboard",
  description:
    "Analytics Dashboard for the 21st Century - Powered by Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[#fafafa] dark:bg-black dark:text-[#fafafa] w-full m-0 text-[#26282c] box-border ${inter.className}`}
      >
        <Sidebar>{children}</Sidebar>
        <Script id="themeswitcher" strategy="beforeInteractive">
          {`

            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
            `}
        </Script>
      </body>
    </html>
  );
}
