"use client";

import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  const [output, setOutput] = useState("");
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    setOutput(editorRef.current.getValue());
  }

  return (
    <>
    
      <button onClick={showValue}>Compile</button>
      <section className="py-4">
        <Editor
          height="40vh"
          defaultLanguage="rust"
          defaultValue="@ Start Coding Here"
          theme="vs-dark"
          onMount={handleEditorDidMount}
        />
      </section>
      <section>
      <h1 className="font-bold text-3xl">Output : </h1>
        <pre>{output}</pre>
      </section>
    </>
  );
}
