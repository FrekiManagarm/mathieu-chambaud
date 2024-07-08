import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import Providers from "./providers";
import { cn } from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mathieu Chambaud',
  description: 'Mathieu Chambaud',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <Providers>
          <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
            <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
              {children}
            </div>
          </div>
        </Providers>
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
}
