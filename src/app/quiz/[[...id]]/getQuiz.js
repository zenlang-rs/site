export const quizData = {
  P1: {
    sampleCode: `PARAMPARA PRATISHTA ANUSHASHAN\nNUM1 BOLE TOH INPUT LE LE RE BABA\n\nAGAR NUM1 > 2000 TAB\n\nPRINT BASANTI PRINT "YES"\nNHI TOH\nPRINT BASANTI PRINT "NO"\n\nBAS ITNA HI\nKHATAM TATA BYE BYE`,
    output: "",
    constraints: {
      T: { min: 1, max: 2000 },
      X: { min: 1, max: 4000 },
    },
    testCases: {
      sample: [
        { input: "299", expected_output: "YES" },
        { input: "1450", expected_output: "NO" },
        { input: "2000", expected_output: "YES" },
      ],
      real: [
        { input: "2999", expected_output: "YES" },
        { input: "1450", expected_output: "NO" },
        { input: "2000", expected_output: "YES" },
      ]
    },
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
          { input: "3", output: "NO" },
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
  P2: {
    sampleCode: `PARAMPARA PRATISHTA ANUSHASHAN\nNUM1 BOLE TOH INPUT LE LE RE BABA\n\nAGAR NUM1 % 2 == 0 TAB\n\nPRINT BASANTI PRINT "EVEN"\nNHI TOH\nPRINT BASANTI PRINT "ODD"\n\nBAS ITNA HI\nKHATAM TATA BYE BYE`,
    output: "",
    constraints: {
      T: { min: 1, max: 100 },
      N: { min: 1, max: 10^9 },
    },
    testCases: {
      sample: [
        { input: "5", expected_output: "ODD" },
        { input: "10", expected_output: "EVEN" },
        { input: "15", expected_output: "ODD" },
      ],
      real: [
        { input: "7", expected_output: "ODD" },
        { input: "4", expected_output: "EVEN" },
        { input: "21", expected_output: "ODD" },
      ],
    },
    problemStatement: {
      title: "PROBLEM STATEMENT",
      content: [
        "Chef loves playing with numbers. Help Chef determine if a given number is even or odd.",
        "Write a program that takes an integer N as input and prints 'EVEN' if N is even and 'ODD' otherwise.",
      ],
    },
    inputFormat: {
      title: "INPUT FORMAT",
      content: [
        "The first line contains a single integer T — the number of test cases. Then the test cases follow.",
        "The first and only line of each test case contains one integer N — the number Chef wants to check.",
      ],
    },
    outputFormat: {
      title: "OUTPUT FORMAT",
      content: [
        "For each test case, output 'EVEN' if the given number is even. Otherwise, output 'ODD'.",
      ],
    },
    constraints: {
      title: "CONSTRAINTS",
      content: ["1 ≤ T ≤ 100", "1 ≤ N ≤ 10^9"],
    },
    sampleInputOutput: {
      title: "SAMPLE INPUT AND OUTPUT",
      table: {
        headers: ["Input", "Output"],
        rows: [
          { input: "3", output: "ODD" },
          { input: "5", output: "ODD" },
          { input: "10", output: "EVEN" },
          { input: "15", output: "ODD" },
        ],
      },
    },
    explanation: {
      title: "EXPLANATION",
      content: [
        "Test case 1: The number 5 is odd, so the output is 'ODD'.",
        "Test case 2: The number 10 is even, so the output is 'EVEN'.",
        "Test case 3: The number 15 is odd, so the output is 'ODD'.",
      ],
    },
  },
  P3: {
    sampleCode: `PARAMPARA PRATISHTA ANUSHASHAN\nNUM1 BOLE TOH INPUT LE LE RE BABA\n\nAGAR NUM1 == 0 TAB\n\nPRINT BASANTI PRINT "ZERO"\nNHI TOH\nPRINT BASANTI PRINT "NON-ZERO"\n\nBAS ITNA HI\nKHATAM TATA BYE BYE`,
    output: "",
    constraints: {
      T: { min: 1, max: 100 },
      N: { min: -10^9, max: 10^9 },
    },
    testCases: {
      sample: [
        { input: "5", expected_output: "NON-ZERO" },
        { input: "0", expected_output: "ZERO" },
        { input: "-3", expected_output: "NON-ZERO" },
      ],
      real: [
        { input: "2", expected_output: "NON-ZERO" },
        { input: "-7", expected_output: "NON-ZERO" },
        { input: "0", expected_output: "ZERO" },
      ],
    },
    problemStatement: {
      title: "PROBLEM STATEMENT",
      content: [
        "Chef is curious about numbers and their properties. Help Chef determine if a given number is zero or non-zero.",
        "Write a program that takes an integer N as input and prints 'ZERO' if N is zero and 'NON-ZERO' otherwise.",
      ],
    },
    inputFormat: {
      title: "INPUT FORMAT",
      content: [
        "The first line contains a single integer T — the number of test cases. Then the test cases follow.",
        "The first and only line of each test case contains one integer N — the number Chef wants to check.",
      ],
    },
    outputFormat: {
      title: "OUTPUT FORMAT",
      content: [
        "For each test case, output 'ZERO' if the given number is zero. Otherwise, output 'NON-ZERO'.",
      ],
    },
    constraints: {
      title: "CONSTRAINTS",
      content: ["1 ≤ T ≤ 100", "-10^9 ≤ N ≤ 10^9"],
    },
    sampleInputOutput: {
      title: "SAMPLE INPUT AND OUTPUT",
      table: {
        headers: ["Input", "Output"],
        rows: [
          { input: "3", output: "NON-ZERO" },
          { input: "5", output: "NON-ZERO" },
          { input: "0", output: "ZERO" },
          { input: "-3", output: "NON-ZERO" },
        ],
      },
    },
    explanation: {
      title: "EXPLANATION",
      content: [
        "Test case 1: The number 5 is non-zero, so the output is 'NON-ZERO'.",
        "Test case 2: The number 0 is zero, so the output is 'ZERO'.",
        "Test case 3: The number -3 is non-zero, so the output is 'NON-ZERO'.",
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
    testCases: {
      sample: [],
      real: []
    },
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
