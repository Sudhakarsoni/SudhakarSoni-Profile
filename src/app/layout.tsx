import type { Metadata } from "next";
import { Providers } from "./providers";
import { Navbar, ErrorBoundary } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sudhakar Soni | DevOps Engineer & SRE",
  description:
    "Portfolio of Sudhakar Soni - DevOps Engineer with 3+ years of experience in infrastructure automation, Kubernetes, AWS, CI/CD, and cloud platforms.",
  keywords: [
    "DevOps",
    "SRE",
    "Linux",
    "Kubernetes",
    "AWS",
    "Terraform",
    "Docker",
    "CI/CD",
    "Infrastructure",
  ],
  authors: [{ name: "Sudhakar Soni" }],
  openGraph: {
    title: "Sudhakar Soni | DevOps Engineer",
    description: "Premium portfolio showcasing DevOps expertise and projects",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        <ErrorBoundary>
          <Providers>
            <Navbar />
            <main>{children}</main>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
