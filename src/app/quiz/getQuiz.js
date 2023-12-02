export const quizData = {
  P1: {
    sampleCode: `PARAMPARA PRATISHTA ANUSHASHAN\nNUM1 BOLE TOH INPUT LE LE RE BABA\n\nAGAR NUM1 > 2000 TAB\n\nPRINT BASANTI PRINT "YES"\nNHI TOH\nPRINT BASANTI PRINT "NO"\n\nBAS ITNA HI\nKHATAM TATA BYE BYE`,
    output: "",
    constraints: {
      T: { min: 1, max: 2000 },
      X: { min: 1, max: 4000 },
    },
    testCases: [
      { input: "2999", expected_output: "YES" },
      { input: "1450", expected_output: "NO" },
      { input: "2000", expected_output: "YES" },
    ],
    problemStatement: {
      title: "PROBLEM STATEMENT",
      content: [
        "Recently, Chef visited his doctor. The doctor advised Chef to drink at least 2000 ml of water each day.",
        "Chef drank X ml of water today. Determine if Chef followed the doctor's advice or not.",
      ],
    },
    inputFormat: {
      title: "INPUT FORMAT",
      content: [
        "The first line contains a single integer T — the number of test cases. Then the test cases follow.",
        "The first and only line of each test case contains one integer X — the amount of water Chef drank today.",
      ],
    },
    outputFormat: {
      title: "OUTPUT FORMAT",
      content: [
        "For each test case, output YES if Chef followed the doctor's advice of drinking at least 2000 ml of water. Otherwise, output NO.",
      ],
    },
    constraints: {
      title: "CONSTRAINTS",
      content: ["1 ≤ T ≤ 2000", "1 ≤ X ≤ 4000"],
    },
    sampleInputOutput: {
      title: "SAMPLE INPUT AND OUTPUT",
      table: {
        headers: ["Input", "Output"],
        rows: [
          { input: "3", output: "" },
          { input: "2999", output: "YES" },
          { input: "1450", output: "NO" },
          { input: "2000", output: "YES" },
        ],
      },
    },
    explanation: {
      title: "EXPLANATION",
      content: [
        "Test case 1: Chef followed the doctor's advice since he drank 2999 ml of water which is ≥ 2000 ml.",
        "Test case 2: Chef did not follow the doctor's advice since he drank 1450 ml of water which is less than 2000 ml.",
        "Test case 3: Chef followed the doctor's advice since he drank 2000 ml of water which is ≥ 2000 ml.",
      ],
    },
  },
};

export const defaultQuiz = {
    sampleCode: "",
    output: "",
    constraints: {
      T: { min: 0, max: 0 },
      X: { min: 0, max: 0 },
    },
    testCases: [],
    problemStatement: {
      title: "",
      content: [],
    },
    inputFormat: {
      title: "",
      content: [],
    },
    outputFormat: {
      title: "",
      content: [],
    },
    constraints: {
      title: "",
      content: [],
    },
    sampleInputOutput: {
      title: "",
      table: {
        headers: [],
        rows: [],
      },
    },
    explanation: {
      title: "",
      content: [],
    },
  };
