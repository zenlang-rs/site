"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeProvider, useTheme } from "next-themes";
import { hasAuthenticated, logout } from "@/utils/auth";
import { redirect } from "next/navigation";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    setDarkMode(currentTheme === "dark");
  }, [systemTheme, theme]);

  const toggleDarkMode = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const logo = {
    src: darkMode ? "/logo-dark.png" : "/logo.png",
    alt: "Zen Logo",
    width: 30,
    height: 30,
  };
  const links = [
    { name: "Code Playground", href: "/" },
    { name: "Docs", href: "/docs" },
    { name: "Example", href: "/example" },
    { name: "Help", href: "/help" },
  ];

  const logoutAccount = () => {
    logout();
    setRightLinks(nonAuthRightLinks);
    redirect("/");
  };

  const nonAuthRightLinks = [
    {
      name: "Login / Register",
      href: "/login",
      isRoute: true,
      method: undefined,
    },
    // { name: "Signup", href: "/signup" },
    { name: "Quiz", href: "/quiz", isRoute: true, method: undefined },
  ];

  const authRightLinks = [
    { name: "Logout", isRoute: false, href: null, method: logoutAccount },
    { name: "Quiz", href: "/quiz", isRoute: true, method: undefined },
  ];

  let [rightLinks, setRightLinks] = useState([]);

  const sideLinks = { name: "GitHub", href: "https://github.com/zenlang-rs" };

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (hasAuthenticated()) {
      setRightLinks(authRightLinks);
    } else {
      setRightLinks(nonAuthRightLinks);
    }
  }, [usePathname()]);

  return (
    <>
      <nav
        className={
          darkMode ? "bg-black p-4" : "bg-white shadow-md shadow-slate-500 p-4"
        }
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex text-black">
            <Image
              className="flex flex-row"
              width={logo.width}
              height={logo.height}
              src={logo.src}
              alt={logo.alt}
            />
            <span
              className={
                darkMode
                  ? "flex flex-row items-center text-xl font-bold text-white"
                  : "flex flex-row items-center text-xl font-bold text-black"
              }
            >
              Zen Lang
            </span>
          </div>

          {/* Hamburger Menu (Mobile View) */}
          <div className="md:hidden flex space-x-2">
            <div>
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  className="w-6 h-6 cursor-pointer"
                  onClick={toggleDarkMode}
                >
                  {/* Moon SVG for dark mode */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="w-6 h-6 cursor-pointer"
                  onClick={toggleDarkMode}
                >
                  {/* Sun SVG for light mode */}
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <button
              onClick={toggleMenu}
              className={
                darkMode
                  ? "block text-white hover:text-gray-500 focus:text-gray-500 focus:outline-none"
                  : "block text-black hover:text-gray-800 focus:text-gray-800 focus:outline-none"
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Main Links (Desktop View) */}
          <div className="hidden md:flex space-x-6">
            {links.map((link, index) => {
              return (
                <Link key={index} href={link.href}>
                  <span
                    className={
                      darkMode
                        ? "text-white hover:text-gray-500"
                        : "text-black hover:text-gray-800"
                    }
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Theme Changer in Desktop View */}
          <div className="hidden md:flex items-center">
            {/* Login, Signup, Quiz in Desktop View */}
            <div className="hidden md:flex space-x-6">
              {rightLinks.map((link, index) => {
                if (link.isRoute) {
                  return (
                    <Link key={index} href={link.href}>
                      <span
                        className={
                          darkMode
                            ? "text-white hover:text-gray-500"
                            : "text-black hover:text-gray-800"
                        }
                      >
                        {link.name}
                      </span>
                    </Link>
                  );
                } else {
                  return (
                    <button key={index} onClick={link.method}>
                      <span
                        className={
                          darkMode
                            ? "text-white hover:text-gray-500"
                            : "text-black hover:text-gray-800"
                        }
                      >
                        {link.name}
                      </span>
                    </button>
                  );
                }
              })}
            </div>

            <div className="px-4">
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  className="w-6 h-6 cursor-pointer"
                  onClick={toggleDarkMode}
                >
                  {/* Moon SVG for dark mode */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="w-6 h-6 cursor-pointer"
                  onClick={toggleDarkMode}
                >
                  {/* Sun SVG for light mode */}
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <a
              className={
                darkMode
                  ? "block text-white hover:text-gray-500"
                  : "block text-gray-600 hover:text-black"
              }
              target="_blank"
              onClick={toggleMenu}
              href={sideLinks.href}
            >
              {sideLinks.name}
              <span className="ml-1 text-lg">↗</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu (Conditional Rendering) */}
        {isMenuOpen && (
          <div className="md:hidden mt-3">
            <ul className="space-y-2">
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <Link href={link.href} onClick={toggleMenu}>
                      <span
                        className={
                          darkMode ? "block text-white" : "block text-black"
                        }
                      >
                        {link.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
              <hr className="my-2 w-[95%] border-none h-[2px] rounded-md bg-gray-200" />
              {/* Login, Signup, Quiz in Mobile Menu */}
              {rightLinks.map((link, index) => {
                if (link.isRoute) {
                  return (
                    <li key={index}>
                      <Link key={index} href={link.href} onClick={toggleMenu}>
                        <span
                          className={
                            darkMode
                              ? "text-white hover:text-gray-500"
                              : "text-black hover:text-gray-800"
                          }
                        >
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <button
                        key={index}
                        onClick={() => {
                          toggleMenu();
                          link.method();
                        }}
                      >
                        <span
                          className={
                            darkMode
                              ? "text-white hover:text-gray-500"
                              : "text-black hover:text-gray-800"
                          }
                        >
                          {link.name}
                        </span>
                      </button>
                    </li>
                  );
                }
              })}
            </ul>
            <hr className="my-2 w-[95%] border-none h-[2px] rounded-md bg-gray-200" />
            <a
              className={
                darkMode
                  ? "block mt-3 text-white hover:text-gray-500"
                  : "block mt-3 text-gray-600 hover:text-black"
              }
              target="_blank"
              onClick={toggleMenu}
              href={sideLinks.href}
            >
              {sideLinks.name}
              <span className="ml-1 text-lg">↗</span>
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
