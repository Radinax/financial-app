import { getEvents } from "@/mock/data";
import type { Metadata } from "next";
import type React from "react";
import { ApplicationLayout } from "./application-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Financial App",
    default: "Financial App",
  },
  description: "A demo made for a client",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const events = await getEvents();

  return (
    <html
      lang="en"
      className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
    >
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <ApplicationLayout events={events}>{children}</ApplicationLayout>
      </body>
    </html>
  );
}
