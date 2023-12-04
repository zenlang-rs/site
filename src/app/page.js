"use client";
import React, { useRef, useState, useContext } from "react";
import Editor from "@monaco-editor/react";
import { ThemeContext } from "../components/contextapi/ThemeContext";
import { handleEditorDidMount } from "@/utils/editor";

export default function Home() {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isInputCheckboxChecked, setIsInputCheckboxChecked] = useState(false);
  const [textareaContent, setTextareaContent] = useState("");
  const editorRef = useRef(null);
  const { darkMode } = useContext(ThemeContext);

  const sampleCode =
    'PARAMPARA PRATISHTA ANUSHASHAN\nPRINT BASANTI PRINT "Hello, Zen!"\nKHATAM TATA BYE BYE';

  async function showValue() {
    const code = editorRef.current.getValue();
    setOutput("");
    setLoading(true);
    setError(null);

    try {
      // Make an API call to compile the code
      // @TODO

      const server_host =
        process.env.SERVER_HOSTNAME || "http://localhost:8000";

      const response = await fetch(server_host.concat("/api/compile"), {
        method: "POST",
        body: JSON.stringify({ code: code, input: textareaContent }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to compile code");
      }

      const data = await response.json();
      if (!data.output || (!data.output.Ok && data.output.Ok !== "")) {
        if (data.output.Err) {
          throw new Error(data.output.Err);
        }
        throw new Error("Error compiling code. Please try again.");
      }

      setOutput(data.output.Ok);
    } catch (error) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={
        darkMode
          ? "bg-black text-white p-4 px-8"
          : "bg-white text-black p-4 px-8"
      }
    >
      <section className="flex justify-between items-center">
        <h1
          className={
            darkMode
              ? "font-bold text-3xl my-3 text-white"
              : "font-bold text-3xl my-3 text-black"
          }
        >
          Write Code here
        </h1>

        <button
          onClick={showValue}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg h-fit"
          disabled={loading}
        >
          {loading ? "Compiling..." : "Compile"}
        </button>
      </section>

      <section className="py-4 rounded-sm">
        <Editor
          height="40vh"
          defaultLanguage="zenlang"
          defaultValue={sampleCode}
          onMount={(editor, monaco) => {handleEditorDidMount(editor, monaco, editorRef)}}
          options={{
            padding: { top: 12 },
            minimap: { enabled: false },
            automaticLayout: true,
            scrollBeyondLastLine: false,
          }}
        />
      </section>

      <section
        className={`mt-4 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div
          className={`p-8 ${
            darkMode ? "border border-gray-700" : "border border-gray-300"
          }`}
        >
          <label
            className={`flex items-center ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <input
              type="checkbox"
              className={`mr-2 ${
                darkMode ? "text-gray-200" : "text-black"
              } font-bold`}
              checked={isInputCheckboxChecked}
              onChange={() =>
                setIsInputCheckboxChecked(!isInputCheckboxChecked)
              }
            />
            Give Input
          </label>

          {isInputCheckboxChecked && (
            <div
              className={`mt-4 p-4 border rounded-lg shadow-md ${
                darkMode ? "bg-black" : "bg-white"
              }`}
            >
              <textarea
                className={`w-full h-32 border p-2 rounded text-black `}
                placeholder="Enter your input here..."
                onChange={(e) => setTextareaContent(e.target.value)}
              ></textarea>
            </div>
          )}
        </div>
      </section>

      <section className="mt-4">
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
          <p>Loading...</p>
        ) : error ? (
          <pre className="whitespace-pre-wrap text-red-500">{error}</pre>
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
  );
}
