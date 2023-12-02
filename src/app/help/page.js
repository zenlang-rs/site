"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../contextapi/ThemeContext";

// Define your variables for text and contributors

const pageTitle = "Welcome to Zen Lang";
const pageDescription = `Zen Lang is an open-source programming language designed for simplicity and ease of use. It allows you to express your ideas with clarity and minimal boilerplate code. Whether you're a beginner or an experienced programmer, Zen Lang offers a clean and intuitive syntax that makes coding a breeze.`;

const creditsTitle = "Credits";
const creditsDescription =
  "Zen Lang was developed by a dedicated team of contributors:";

const footerText =
  "If you have any questions or need assistance, please feel free to reach out to the Zen Lang community.";

const contributorsData = [
  {
    name: "rootCircle",
    githubLink: "https://github.com/rootCircle",
    avatarUrl: "https://github.com/rootCircle.png",
  },
  {
    name: "mohit07raghav19",
    githubLink: "https://github.com/mohit07raghav19",
    avatarUrl: "https://github.com/mohit07raghav19.png",
  },
  {
    name: "Harshit-Chordiya",
    githubLink: "https://github.com/Harshit-Chordiya",
    avatarUrl: "https://github.com/Harshit-Chordiya.png",
  },
];

// Define the maximum number of contributors to display
const maxContributorsToShow = 3;

function Help() {
  const [showAllContributors, setShowAllContributors] = useState(false);
  const { darkMode } = useContext(ThemeContext);
  const visibleContributors = showAllContributors
    ? contributorsData
    : contributorsData.slice(0, maxContributorsToShow);

  const logo = {
    src: darkMode ? "/logo-dark.png" : "/logo.png",
    alt: "Zen Logo",
    width: 200,
    height: 200,
  };
  return (
    <main className="text-center p-8">
      <Image
        className="mx-auto"
        alt={logo.alt}
        src={logo.src}
        width={logo.width}
        height={logo.height}
      />
      <h2
        className={
          darkMode
            ? "text-3xl font-bold mt-4 text-white"
            : "text-3xl font-bold mt-4 text-black"
        }
      >
        {pageTitle}
      </h2>
      <p
        className={
          darkMode
            ? "text-white text-lg mt-4 first-letter lg:px-48 py-4"
            : "text-black text-lg mt-4 first-letter lg:px-48 py-4"
        }
      >
        {pageDescription}
      </p>
      <section className="mt-6">
        <h3
          className={
            darkMode
              ? "text-xl font-semibold pt-8 text-white"
              : "text-xl font-semibold pt-8 text-black"
          }
        >
          {creditsTitle}
        </h3>
        <p className={darkMode ? "text-white mt-2" : "text-black-500 mt-2"}>
          {creditsDescription}
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-32 gap-8 text-left lg:px-60 mt-6">
          {visibleContributors.map((contributor, index) => (
            <li
              className={
                darkMode
                  ? "p-4 bg-black shadow-md rounded-lg text-center text-white"
                  : "p-4 bg-white shadow-md rounded-lg text-center text-black"
              }
              key={index}
            >
              {contributor.avatarUrl && (
                <div className="mt-2 text-center">
                  <Image
                    alt={`Avatar of ${contributor.name}`}
                    src={contributor.avatarUrl}
                    width={50}
                    height={50}
                    className="rounded-full mx-auto"
                  />
                </div>
              )}
              <a
                href={contributor.githubLink}
                target="_blank"
                className="text-blue-600 hover:underline font-semibold"
              >
                {contributor.name}
              </a>
            </li>
          ))}
        </ul>
        {contributorsData.length > maxContributorsToShow && (
          <button
            onClick={() => setShowAllContributors(!showAllContributors)}
            className="text-blue-600 hover:text-blue-700 hover:shadow-lg mt-8 shadow-md rounded-md p-3"
          >
            {showAllContributors ? "Show Less" : "Show More"}
          </button>
        )}
      </section>
      <div className={darkMode ? "mt-8 text-white" : "mt-8 text-black"}>
        {footerText}
      </div>
    </main>
  );
}

export default Help;
