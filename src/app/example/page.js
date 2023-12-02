"use client";
import Head from "next/head";
import { useContext } from "react";
import Editor from "@monaco-editor/react";
import { ThemeContext } from "../contextapi/ThemeContext";

const ExampleCard = ({ title, code, description, height }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5 pb-5">{title}</h2>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg mb-8">
        <Editor
          height={`${height}vh`}
          defaultLanguage="rust"
          defaultValue={code}
          theme={darkMode ?  "light":"vs-dark" }
          options={{
            padding: { top: 12 },
            readOnly: true,
            minimap: { enabled: false },
            automaticLayout: true,
            scrollBeyondLastLine: false,
          }}
        />
      </div>
      <p className={darkMode ? "text-gray-100 pb-5" : "text-gray-600 pb-5"}>
        {description}
      </p>
    </div>
  );
};

const Examples = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <main
      className={
        darkMode
          ? "text-white p-8 mt-8 bg-black"
          : "text-black p-8 mt-8 bg-white"
      }
    >
      <Head>
        <title>Code Examples</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
      </Head>
      <h1 className="text-4xl font-bold mb-8">Code Examples</h1>
      <div className="container mx-auto mt-8 grid gap-12 grid-cols-1 sm:grid-cols-2">
        {/* First column */}
        <div className="grid gap-8 p-5 border-gray-300 border-2  rounded-lg">
          <ExampleCard
            title="Example 1: Print Hello World"
            code={`PARAMPARA PRATISHTA ANUSHASHAN\nPRINT BASANTI PRINT "Hello, Zen!"\nKHATAM TATA BYE BYE`}
            description="This classic 'Hello, Zen!' program simply prints a greeting message to the console."
            height={12}
          />
          <hr
            style={{
              background: "lightgray",
              color: "lightgray",
              borderColor: "lightgray",
              height: "2px",
            }}
          />
          <ExampleCard
            title="Example 2: Simple Addition"
            code={`PARAMPARA PRATISHTA ANUSHASHAN\nA BOLE TOH 5\nB BOLE TOH 10\nC BOLE TOH A + B\nPRINT BASANTI PRINT C\nKHATAM TATA BYE BYE`}
            description="This program initializes two variables A and B, adds them together, stores the result in C, and then prints the value of C."
            height={18}
          />
          <hr
            style={{
              background: "lightgray",
              color: "lightgray",
              borderColor: "lightgray",
              height: "2px",
            }}
          />
          <ExampleCard
            title="Example 3: Print Even Numbers"
            code={`PARAMPARA PRATISHTA ANUSHASHAN\nx BOLE TOH 1\nJAB TAK HAI JAAN x <= 10 TAB TAK\n  AGAR x%2 == 0 TAB\n    PRINT BASANTI PRINT x\n  BAS ITNA HI\n  x BOLE TOH x + 1\nJAHAN\nKHATAM TATA BYE BYE`}
            description="This program uses a JAB TAK HAI JAAN loop to print even numbers from 1 to 10."
            height={25}
          />
          <hr
            style={{
              background: "lightgray",
              color: "lightgray",
              borderColor: "lightgray",
              height: "2px",
            }}
          />
          <ExampleCard
            title="Example 4: Input and Sum"
            code={`PARAMPARA PRATISHTA ANUSHASHAN\nPRINT BASANTI PRINT "Enter a number: "\nnumber BOLE TOH INPUT LE LE RE BABA\nsum BOLE TOH number + 10\nPRINT BASANTI PRINT sum\nKHATAM TATA BYE BYE`}
            description="This program takes input from the user, adds 10 to it, and then prints the result."
            height={20}
          />
          <hr
            style={{
              background: "lightgray",
              color: "lightgray",
              borderColor: "lightgray",
              height: "2px",
            }}
          />
          <ExampleCard
            title="Example 5: Find Maximum of Two Numbers"
            code={`PARAMPARA PRATISHTA ANUSHASHAN\nPRINT BASANTI PRINT "Enter two numbers: "\nNUM1 BOLE TOH INPUT LE LE RE BABA\nNUM2 BOLE TOH INPUT LE LE RE BABA\nAGAR NUM1 > NUM2 TAB\n  MAX BOLE TOH NUM1\nWARNA\n  MAX BOLE TOH NUM2\nBAS ITNA HI\nPRINT BASANTI PRINT " Maximum Is : "\nPRINT BASANTI PRINT MAX\nKHATAM TATA BYE BYE`}
            description="This program takes two numbers as input and prints the maximum of the two."
            height={35}
          />
          <hr
            style={{
              background: "lightgray",
              color: "lightgray",
              borderColor: "lightgray",
              height: "2px",
            }}
          />
          <ExampleCard
            title="Example 6: Factorial Calculation"
            code={`PARAMPARA PRATISHTA ANUSHASHAN\nNum BOLE TOH 5\nfactorial BOLE TOH 1\nJAB TAK HAI JAAN Num > 1 TAB TAK\n  factorial BOLE TOH factorial * Num\n  Num BOLE TOH Num - 1\nJAHAN\nPRINT BASANTI PRINT factorial\nKHATAM TATA BYE BYE`}
            description="This program calculates the factorial of a number."
            height={28}
          />
        </div>

        {/* Second column */}
        <div className="grid gap-8 p-5 border-gray-300 border-2  rounded-lg ">
          {/* Add more ExampleCard components for the second column */}

          <ExampleCard
            title="Example 7: Fibonacci Sequence"
            code={`PARAMPARA PRATISHTA ANUSHASHAN\nN BOLE TOH 10\nA BOLE TOH 0\nB BOLE TOH 1\nPRINT BASANTI PRINT 'Fibonacci Sequence:'\nJAB TAK HAI JAAN N > 0 TAB TAK\n  PRINT BASANTI PRINT A\n  NEXT BOLE TOH A + B\n  A BOLE TOH B\n  B BOLE TOH NEXT\n  N BOLE TOH N - 1\nJAHAN\nKHATAM TATA BYE BYE`}
            description="This program generates the Fibonacci sequence for the first 10 numbers."
            height={34}
          />
          <hr
            style={{
              background: "lightgray",
              color: "lightgray",
              borderColor: "lightgray",
              height: "2px",
            }}
          />
          <ExampleCard
            title="Example 8: Countdown"
            code={`PARAMPARA PRATISHTA ANUSHASHAN\nc BOLE TOH 5\nJAB TAK HAI JAAN c > 0 TAB TAK\n  PRINT BASANTI PRINT c\n  c BOLE TOH c - 1\nJAHAN\nPRINT BASANTI PRINT 'Surprise !!'\nKHATAM TATA BYE BYE`}
            description="This program uses a loop to countdown from 5 to 1 and then prints 'Surprise !!'"
            height={27}
          />
          <hr
            style={{
              background: "lightgray",
              color: "lightgray",
              borderColor: "lightgray",
              height: "2px",
            }}
          />
          <ExampleCard
            title="Example 9: Right-Angled Triangle Pattern"
            code={`PARAMPARA PRATISHTA ANUSHASHAN\nPRINT BASANTI PRINT 'Enter the number of rows:'\nROWS BOLE TOH INPUT LE LE RE BABA\nI BOLE TOH 0\nJ BOLE TOH 0\nJAB TAK HAI JAAN I <= ROWS TAB TAK\n  JAB TAK HAI JAAN J <= I TAB TAK\n    PRINT BASANTI PRINT '* '\n    J BOLE TOH J + 1\n  JAHAN\n  PRINT BASANTI PRINT '' @Move to the next line\n  I BOLE TOH I + 1\nJAHAN\nKHATAM TATA BYE BYE`}
            description="This program prints a right-angled triangle pattern based on user input."
            height={40}
          />
          <hr
            style={{
              background: "lightgray",
              color: "lightgray",
              borderColor: "lightgray",
              height: "2px",
            }}
          />
          <ExampleCard
            title="Example 10: Simple Calculator"
            code={`PARAMPARA PRATISHTA ANUSHASHAN\nPRINT BASANTI PRINT 'Enter two numbers:'\nnum1 BOLE TOH INPUT LE LE RE BABA\nnum2 BOLE TOH INPUT LE LE RE BABA\nPRINT BASANTI PRINT 'Select operation (+, -, *, /):'\nopr BOLE TOH INPUT LE LE RE BABA\nAGAR opr == '+' TAB\n  result BOLE TOH num1 + num2\nWARNA AGAR opr == '-' TAB\n  result BOLE TOH num1 - num2\nWARNA AGAR opr == '*' TAB\n  result BOLE TOH num1 * num2\nWARNA AGAR opr == '/' TAB\n  result BOLE TOH num1 / num2\nNHI TOH\n  PRINT BASANTI PRINT 'Invalid operation!'\nBAS ITNA HI\nPRINT BASANTI PRINT result\nKHATAM TATA BYE BYE`}
            description="This program performs basic arithmetic operations based on user input."
            height={50}
          />
          <hr
            style={{
              background: "lightgray",
              color: "lightgray",
              borderColor: "lightgray",
              height: "2px",
            }}
          />
          <ExampleCard
            title="Example 11: Prime Number Checker"
            code={`PARAMPARA PRATISHTA ANUSHASHAN\nnum BOLE TOH 17\ni BOLE TOH num\nisPrime BOLE TOH true\nJAB TAK HAI JAAN i <= num/2 TAB TAK\n  AGAR num % i == 0 TAB\n    isPrime BOLE TOH false\n  BAS ITNA HI\n  i BOLE TOH i + 1\nJAHAN\nAGAR isPrime TAB\n  PRINT BASANTI PRINT ' A prime number'\nWARNA\n  PRINT BASANTI PRINT 'Not a prime number'\nKHATAM TATA BYE BYE`}
            description="This program checks whether a given number is prime or not."
            height={39}
          />
        </div>
      </div>
    </main>
  );
};

export default Examples;
