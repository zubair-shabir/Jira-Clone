import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";



export const metadata = {
  title: "Zcrum",
  description: "Project Management App",
};

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} `}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* Header */}
          <main className="min-h-screen">

            {children}
          </main>
          <footer className="bg-gray-900 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p > Made With ❤️ By Zubair Shabir</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
