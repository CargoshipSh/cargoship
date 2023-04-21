import { PosthogClient } from "./PosthogClient";
import "./globals.css";

export const metadata = {
  title: "Formbricks",
  description: "In-Product Survey Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col bg-slate-50">
        <PosthogClient />
        {children}
      </body>
    </html>
  );
}
