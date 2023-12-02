"use client";
import React, { useRef, useState, useContext } from "react";
import Editor from "@monaco-editor/react";
import { ThemeContext } from "../app/contextapi/ThemeContext";

export default function Home() {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const editorRef = useRef(null);
  const { darkMode } = useContext(ThemeContext);

  const sampleCode = "PARAMPARA PRATISHTA ANUSHASHAN\nPRINT BASANTI PRINT \"Hello, Zen!\"\nKHATAM TATA BYE BYE";


  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

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
        body: JSON.stringify({ code: code }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to compile code");
      }

      const data = await response.json();
      if (!data.output || !data.output.Ok) {
        if (data.output.Err) {
          console.log(data.output.Err)
          throw new Error(data.output.Err)
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
          defaultLanguage="rust"
          defaultValue={sampleCode}
          theme={darkMode ? "vs" : "vs-dark"}
          onMount={handleEditorDidMount}
        />
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
          <pre className="text-red-500">{error}</pre>
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
