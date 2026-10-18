let wasmInitPromise = null;

/**
 * Initializes the Zen WebAssembly module.
 * Cached so that initialization only happens once.
 */
export async function initZenWasm() {
  if (typeof window === "undefined") {
    return null;
  }

  if (!wasmInitPromise) {
    wasmInitPromise = (async () => {
      const wasmModule = await import("../../public/wasm/zen.js");
      await wasmModule.default({ module_or_path: "/wasm/zen_bg.wasm" });
      return wasmModule;
    })();
  }

  return wasmInitPromise;
}

/**
 * Runs Zen code directly in the browser using WebAssembly.
 *
 * @param {string} code - The Zen source code
 * @param {string} [input=""] - Input passed to the program
 * @returns {Promise<string>} The output from the code execution
 */
export async function executeZenCode(code, input = "") {
  const wasm = await initZenWasm();
  if (!wasm) {
    throw new Error("Zen WebAssembly runtime is only available in the browser.");
  }
  return wasm.run_zen_code(code, input);
}

/**
 * Evaluates Zen code against a set of quiz test cases in WebAssembly.
 *
 * @param {string} code - The Zen source code
 * @param {Array<{input: string, expected_output: string}>} testcases
 * @returns {Promise<Array<{Ok: boolean} | {Err: string}>>}
 */
export async function executeZenQuiz(code, testcases = []) {
  const wasm = await initZenWasm();
  if (!wasm) {
    throw new Error("Zen WebAssembly runtime is only available in the browser.");
  }

  return testcases.map((testcase) => {
    try {
      const actualOutput = wasm.run_zen_code(code, testcase.input || "");
      const isMatch = actualOutput.trimEnd() === testcase.expected_output;
      return { Ok: isMatch };
    } catch (err) {
      return { Err: err?.toString() || "Execution error" };
    }
  });
}
