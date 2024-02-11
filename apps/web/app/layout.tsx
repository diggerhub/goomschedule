import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import HydrationZustand from "./HydrationZustand";
import React from "react";
import ApplicationFrame from "@repo/ui/ApplicationFrame";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "GoomSchedule",
  description: "Generate streaming schedules with time zone and discord support",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return <html lang="en">
  <body className={inter.className}>
  <HydrationZustand>
    <ApplicationFrame>
      {children}
    </ApplicationFrame>
  </HydrationZustand>
  </body>
  </html>
}

export default RootLayout
