import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p className="mb-4">Made by shlok</p>
                <div className="flex justify-center space-x-6">
                  <a href="https://www.linkedin.com/in/shlok-majmundar-988851252/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="https://github.com/SHlok06majmundar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2V10c0-.8-.2-1.4-.5-2a2.68 2.68 0 0 0-.7-2.7c-.3-.3-.6-.6-1.1-.7a3.14 3.14 0 0 0-1.8 0c-.5.1-.9.4-1.1.7a2.68 2.68 0 0 0-.7 2.7c-.3.6-.5 1.2-.5 2v4.8c0 1.1-.2 2.2-.6 3.2A4.85 4.85 0 0 0 9 18v4m6 0v-3.5c0-.8 0-1.5-.2-2.2a3.55 3.55 0 0 0-.7-2c-.4-.6-.8-1.1-1.4-1.4A5 5 0 0 0 12 10a5 5 0 0 0-2.7.8c-.6.3-1 .8-1.4 1.4a3.55 3.55 0 0 0-.7 2.2c-.2.7-.2 1.4-.2 2.2V22M5 22h14"/><circle cx="12" cy="5" r="1"/></svg>
                  </a>
                   <a href="https://www.instagram.com/shlok.majmundar" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37a4 4 0 1 1-7.29 2.32 4 4 0 0 1 7.29-2.32z"/><circle cx="18.5" cy="5.5" r=".5"/></svg>
                   </a>
                </div>
                <p className="mt-4">&copy; {new Date().getFullYear()} Carrernova. All rights reserved.</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
