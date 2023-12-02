"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { useState } from "react";
import { ThemeContext } from "../app/contextapi/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Zen Playground",
  description: "Playground to test and run zen language on the go!",
};

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <html lang="en">
        <body
          className={`${inter.className} ${
            darkMode ? "bg-black" : "bg-white"
          } min-h-screen`}
        >
          <div>
            <Navbar />
          </div>
          {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
