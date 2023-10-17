"use client";
import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";

export default function Home() {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const editorRef = useRef(null);

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
      const response = await fetch("YOUR_API_ENDPOINT_HERE", {
        method: "POST",
        body: JSON.stringify({ code }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to compile code");
      }

      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
      setError("Error compiling code. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 px-8">
      <section className="flex justify-between items-center">
        <h1 className="font-bold text-3xl my-3">Write Code here</h1>

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
          defaultValue="// Write code here!"
          theme="vs-dark"
          onMount={handleEditorDidMount}
        />
      </section>
      
      <section className="mt-4">
        <h1 className="font-bold text-3xl mb-3">Output:</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="p-6 bg-white shadow-md shadow-slate-400 rounded-lg min-h-[20vh]">
            <pre className="whitespace-pre-wrap">{output}</pre>
          </div>
        )}
      </section>
    </div>
  );
}
