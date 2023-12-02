"use client";
import React, { useRef, useState, useContext } from "react";
import Editor from "@monaco-editor/react";
import { ThemeContext } from "../contextapi/ThemeContext";

export default function Quiz() {
  const sampleCode = "PARAMPARA PRATISHTA ANUSHASHAN\nNUM1 BOLE TOH INPUT LE LE RE BABA\n\nAGAR NUM1 > 2000 TAB\n\nPRINT BASANTI PRINT \"YES\"\nNHI TOH\nPRINT BASANTI PRINT \"NO\"\n\nBAS ITNA HI\nKHATAM TATA BYE BYE"
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const editorRef = useRef(null);
  const { darkMode } = useContext(ThemeContext);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  async function showValue() {
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
          testcases: [
            {
              input: "2999",
              expected_output: "YES\n",
            },
          ],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to compile code");
      }

      const data = await response.json();
      console.log(data)
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
      className={
        darkMode
          ? "bg-black text-white p-4 px-8 flex"
          : "bg-white text-black p-4 px-8 flex"
      }
    >
      <div className="w-1/2 p-4  overflow-auto h-screen text-lg">
        <h2 className="text-2xl font-bold mb-4">PROBLEM STATEMENT</h2>
        <p>
          Recently, Chef visited his doctor. The doctor advised Chef to drink at
          least 2000 ml of water each day.
        </p>
        <p>
          Chef drank X ml of water today. Determine if Chef followed the
          doctor&apos;s advice or not.
        </p>
        <br />
        <h2 className="text-2xl font-bold mt-4 mb-4">INPUT FORMAT</h2>
        <p>
          The first line contains a single integer T — the number of test cases.
          Then the test cases follow.
        </p>
        <p>
          The first and only line of each test case contains one integer X — the
          amount of water Chef drank today.
        </p>
        <br />
        <h2 className="text-2xl font-bold mt-4 mb-4">OUTPUT FORMAT</h2>
        <p>
          For each test case, output YES if Chef followed the doctor&apos;s
          advice of drinking at least 2000 ml of water. Otherwise, output NO.
        </p>
        <br />
        <h2 className="text-2xl font-bold mt-4 mb-4">CONSTRAINTS</h2>
        <p>1 ≤ T ≤ 2000</p>
        <p>1 ≤ X ≤ 4000</p>
        <br />
        <h2 className="text-2xl font-bold mt-4 mb-4">
          SAMPLE INPUT AND OUTPUT
        </h2>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Input</th>
              <th className="border px-4 py-2">Output</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2999</td>
              <td className="border px-4 py-2">YES</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">1450</td>
              <td className="border px-4 py-2"> NO</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2000</td>
              <td className="border px-4 py-2">YES</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-bold mt-4 mb-4">EXPLANATION</h2>
        <p>
          <span className="font-bold">Test case 1:</span> Chef followed the
          doctor&apos;s advice since he drank 2999 ml of water which is ≥ 2000
          ml.
        </p>
        <p>
          <span className="font-bold">Test case 2:</span> Chef did not follow
          the doctor&apos;s advice since he drank 1450 ml of water which is less
          than 2000 ml.
        </p>
        <p>
          <span className="font-bold">Test case 3:</span> Chef followed the
          doctor&apos;s advice since he drank 2000 ml of water which is ≥ 2000
          ml.
        </p>
      </div>
      <div className="w-1/2 flex flex-col h-screen">
        <section className="py-4 rounded-sm overflow-auto ml-6">
          <Editor
            height="50vh"
            defaultLanguage="rust"
            defaultValue={sampleCode}
            theme={darkMode ? "light" : "vs-dark"}
            onMount={handleEditorDidMount}
          />
        </section>

        <section
          className={
            darkMode
              ? "sticky bottom-0 bg-black ml-6"
              : "sticky bottom-0 bg-white ml-6"
          }
        >
          <h1
            className={
              darkMode
                ? "font-bold text-3xl mb-3 text-white"
                : "font-bold text-3xl mb-3 text-black"
            }
          >
            Output:
          </h1>
          {loading ? (
            <p className={darkMode ? "text-white" : "text-black"}>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div
              className={
                darkMode
                  ? "p-6 bg-black shadow-md shadow-slate-400 rounded-md min-h-[20vh]"
                  : "p-6 bg-white shadow-md shadow-slate-400 rounded-md min-h-[20vh]"
              }
            >
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
          )}
        </section>
      </div>
      <div className="fixed bottom-4 right-4 space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={showValue}
        >
          Run
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={showValue}
        >
          Compile
        </button>
      </div>
    </div>
  );
}
