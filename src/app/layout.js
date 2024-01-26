import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

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
      </body>
    </html>
  );
}
