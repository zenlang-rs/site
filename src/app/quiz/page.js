"use client";
import { useState, useEffect, useContext } from "react";
import { useTheme } from "next-themes";
import { quizData } from "@/app/quiz/getQuiz";
import Link from "next/link";
const QuizPage = () => {

  const [darkMode, setDarkMode] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    setDarkMode(currentTheme === "dark");
  }, [systemTheme, theme]);
    
  return (
    <div
      className={`h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.keys(quizData).map((quiz, index) => (
          <Link
            href={`/quiz/${quiz}`}
            key={index}
            className={
              darkMode
                ? "bg-black border-2 rounded-md"
                : "bg-white shadow-lg rounded-md shadow-slate-400"
            }
          >
            {/* <a className="bg-white dark:bg-gray-200 overflow-hidden shadow rounded-lg"> */}
            <div className="p-4">
              <h3 className={`text-lg leading-6 ${darkMode ? "text-white" : "text-black"} font-bold`}>
                {quiz}
              </h3>
              <p className={`mt-2 text-base ${darkMode ? "text-white" : "text-black"}`}>
                {quizData[quiz].problemStatement.content[0]}
              </p>
            </div>
            {/* </a> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
