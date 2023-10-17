"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const logo = { src: "/logo.png", alt: "Zen Logo", width: 30, height: 30 };
  const links = [
    { name: "Code Playground", href: "/" },
    { name: "Docs", href: "/docs" },
    { name: "Example", href: "/example" },
    { name: "Help", href: "/help" },
  ];

  const sideLinks = { name: "GitHub", href: "https://github.com/zenlang-rs" };
  
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-md p-4">
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
            <span className="flex flex-row align-middle text-xl font-bold">Zen Lang</span>
          </div>

          {/* Hamburger Menu (Mobile View) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="block text-gray-600 hover:text-black focus:text-black focus:outline-none"
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
                  <span className="text-black hover:text-gray-800">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Side Links (Desktop View) */}
          <div className="hidden md:block">
            <a
              className="text-gray-600 hover:text-black"
              target="_blank"
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
                    <Link href={link.href}>
                      <span className="block text-black hover:text-gray-800">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <a
              className="block mt-3 text-gray-600 hover:text-black"
              target="_blank"
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
