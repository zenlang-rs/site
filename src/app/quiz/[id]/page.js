"use client";
import React, { useRef, useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { quizData, defaultQuiz } from "@/app/quiz/getQuiz";
import OutputDataVisualization from "@/components/OutputDataVisualization";
import { hasAuthenticated } from "@/utils/auth";
import { handleEditorDidMount } from "@/utils/editor";
import { useRouter } from "next/navigation";

export default function Quiz({ params }) {
  const router = useRouter();
  useEffect(() => {
    if (!hasAuthenticated()) {
      setTimeout(() => {
        router.replace("/login?message=Please Login to Access Quiz");
      }, 0);
    }
  }, []);
  
  function getQuizById(id) {
    return quizData[id] || defaultQuiz;
  }

  const defaultQuizID = "P1";

  const quiz = getQuizById(params.id || defaultQuizID);
  const [output, setOutput] = useState(quiz.output);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const editorRef = useRef(null);

  const [darkMode, setDarkMode] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    setDarkMode(currentTheme === "dark");
  }, [systemTheme, theme]);

  function runActualTest() {
    showValue(quiz.testCases.real);
  }

  function runSampleTest() {
    showValue(quiz.testCases.sample);
  }

  async function showValue(testcases) {
    const code = editorRef.current.getValue();
    setOutput("");
    setLoading(true);
    setError(null);

    try {
      const server_host =
        process.env.SERVER_HOSTNAME || "http://localhost:8000";

      const response = await fetch(server_host.concat("/api/quiz"), {
        method: "POST",
        body: JSON.stringify({
          code: code,
          testcases: testcases,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to compile code");
      }

      const data = await response.json();
      if (!data.output_match) {
        throw new Error("Failed to compile code");
      }

      setOutput(JSON.stringify(data.output_match));
    } catch (error) {
      setError("Error compiling code. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={`flex flex-col ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } p-4 px-8 md:flex-row`}
    >
      <div className="w-full md:w-1/2 p-4 overflow-auto md:h-[90vh] text-lg">
        {renderContent(quiz.problemStatement)}
        {renderContent(quiz.inputFormat)}
        {renderContent(quiz.outputFormat)}
        {renderContent(quiz.constraints)}
        {renderTable(quiz.sampleInputOutput)}
        {renderContent(quiz.explanation)}
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:h-[90vh]">
        <section className="py-4 rounded-sm overflow-auto md:ml-6 md:order-first">
          <Editor
            height="50vh"
            defaultLanguage="zenlang"
            defaultValue={quiz.sampleCode}
            onMount={(editor, monaco) => {
              handleEditorDidMount(editor, monaco, editorRef);
            }}
          />
        </section>
        <div className="p-4 space-x-4 text-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={runSampleTest}
          >
            Run
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={runActualTest}
          >
            Submit
          </button>
        </div>
        <section
          className={`bottom-0 ${darkMode ? "bg-black" : "bg-white"} md:ml-6`}
        >
          <h1
            className={`font-bold text-3xl mb-3 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Result:
          </h1>
          {loading ? (
            <p className={darkMode ? "text-white" : "text-black"}>Loading...</p>
          ) : error ? (
            <p className="whitespace-pre-wrap text-red-500">{error}</p>
          ) : (
            <OutputDataVisualization data={output} darkMode={darkMode} />
          )}
        </section>
      </div>
    </div>
  );
}

function renderContent(section) {
  return (
    <div key={"render" + section.title}>
      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
      {section.content.map((paragraph, index) => (
        <p key={section.title + index}>{paragraph}</p>
      ))}
      <br />
    </div>
  );
}

function renderTable(section) {
  return (
    <div key={"table" + section.title}>
      <h2 className="text-2xl font-bold mt-4 mb-4">{section.title}</h2>
      <table className="table-auto">
        <thead>
          <tr>
            {section.table.headers.map((header, index) => (
              <th
                key={section.title + "input" + index}
                className="border px-4 py-2"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {section.table.rows.map((row, rowIndex) => (
            <tr key={section.title + "row" + rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <td
                  key={section.title + "output" + cellIndex}
                  className="border px-4 py-2"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
}
