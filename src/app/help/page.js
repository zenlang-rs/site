import React from "react";
import Image from "next/image";

// Define variables for text and contributors
const logo = {
  src: "/logo.png",
  alt: "Zen Lang Logo",
  width: 200,
  height: 200,
};

const pageTitle = "Welcome to Zen Lang";
const pageDescription = `Zen Lang is an open-source programming language designed for simplicity and ease of use. It allows you to express your ideas with clarity and minimal boilerplate code. Whether you're a beginner or an experienced programmer, Zen Lang offers a clean and intuitive syntax that makes coding a breeze.`;

const creditsTitle = "Credits";
const creditsDescription =
  "Zen Lang was developed by a dedicated team of contributors:";

const contributors = [
  {
    name: "mohit07raghav19",
    githubLink: "https://github.com/mohit07raghav19",
  },
  {
    name: "rootCircle",
    githubLink: "https://github.com/rootCircle",
  },
  {
    name: "Harshit-Chordiya",
    githubLink: "https://github.com/Harshit-Chordiya",
  },
  {
    name: "mohit07raghav19",
    githubLink: "https://github.com/mohit07raghav19",
  },
  {
    name: "rootCircle",
    githubLink: "https://github.com/rootCircle",
  },
  {
    name: "Harshit-Chordiya",
    githubLink: "https://github.com/Harshit-Chordiya",
  },
  {
    name: "mohit07raghav19",
    githubLink: "https://github.com/mohit07raghav19",
  },
  {
    name: "rootCircle",
    githubLink: "https://github.com/rootCircle",
  },
  {
    name: "Harshit-Chordiya",
    githubLink: "https://github.com/Harshit-Chordiya",
  },
];

const footerText =
  "If you have any questions or need assistance, please feel free to reach out to the Zen Lang community.";

function Help() {
  return (
    <main className="text-center p-8">
      <Image
        className="mx-auto"
        alt={logo.alt}
        src={logo.src}
        width={logo.width}
        height={logo.height}
      />
      <h2 className="text-3xl font-bold mt-4">{pageTitle}</h2>
      <p className="text-black-500 text-lg mt-4">{pageDescription}</p>
      <section className="mt-6">
        <h3 className="text-xl font-semibold">{creditsTitle}</h3>
        <p className="text-black-500 mt-2">{creditsDescription}</p>
        <ul className="flex justify-between text-left ml-8 mt-2">
          {contributors.map((contributor, index) => (
            <li className="mb-2" key={index}>
              <a
                href={contributor.githubLink}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                {contributor.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <div className="mt-8">{footerText}</div>
    </main>
  );
}

export default Help;
