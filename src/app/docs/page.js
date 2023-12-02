"use client";
import { useContext } from "react";
import React from "react";
import Editor from "@monaco-editor/react";
import { ThemeContext } from "../contextapi/ThemeContext";

function Docs() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <main
      className={
        darkMode
          ? "text-white p-8 mt-8 bg-black"
          : "text-black p-8 mt-8 bg-white"
      }
    >
      <div className="min-h-screen">
        <div className="container mx-auto p-8">
          {/* Introduction Section */}
          <section className="mb-12">
            <h1 className="text-4xl font-bold mb-6"># Welcome to ZenDocs</h1>
            <p className="text-lg leading-relaxed">
              Welcome to the{" "}
              <bold className="font-semibold text-red-600">
                Zen programming universe
              </bold>{" "}
              — a place where coding is simple, fun, and totally stress-free! 🌟
              In Zen, we&apos;ve ditched the complicated stuff like delimiters
              and indentation. Why? Because we believe coding should be a breeze
              for beginners, letting you focus on the exciting world of
              algorithms without the hassle of tricky syntax.
            </p>
            <p className="text-lg mt-4 leading-relaxed">
              Whether you&apos;re taking your first coding steps or just want a
              laid-back space to express your creativity, Zen is here for you.
              So, kick back, relax, and let&apos;s make coding a joyful
              experience together! 🚀
            </p>
          </section>
          {/* Hello, Zen Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold">Hello, Zen !!</h2>

            <Editor
              className="mb-4 mt-4"
              height={`20vh`}
              defaultLanguage="rust"
              defaultValue={`PARAMPARA PRATISHTA ANUSHASHAN
PRINT BASANTI PRINT "Hello, Zen!"
KHATAM TATA BYE BYE`}
              theme={darkMode ? "light" : "vs-dark"}
              options={{
                padding: { top: 12 },
                readOnly: true,
                minimap: { enabled: false },
                automaticLayout: true,
                scrollBeyondLastLine: false,
              }}
            />
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What&apos;s Inside Zen?</h2>
            <p className="text-lg leading-relaxed">
              Zen is made up of simple words and phrases that guide the computer
              in a friendly way. Here are a few friends you&apos;ll meet often:
            </p>
          </section>
          <section className="mb-12">
            {/* PARAMPARA PRATISHTA ANUSHASHAN */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                PARAMPARA PRATISHTA ANUSHASHAN
              </h3>

              <p className="text-lg leading-relaxed">
                Think of this as the magic words that begin your journey into
                the world of Zen. It tells the computer that a Zen program is
                about to begin.
              </p>
            </div>
          </section>
          <section className="mb-12">
            {/* KHATAM TATA BYE BYE */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">KHATAM TATA BYE BYE</h3>
              <p className="text-lg leading-relaxed">
                And this is how Zen gracefully concludes its conversation with
                the computer, saying &quot;Goodbye for now!&quot;
              </p>
            </div>
          </section>
          <section className="mb-12">
            {/* BOLE TOH */}
            <div>
              <h3 className="text-xl font-bold mb-2">BOLE TOH</h3>
              <p className="text-lg leading-relaxed">
                Introduce Zen to a new friend (variable) and provide them with a
                starting value.
              </p>

              <Editor
                className="mb-4 mt-4"
                height={`20vh`}
                defaultLanguage="rust"
                defaultValue={`PARAMPARA PRATISHTA ANUSHASHAN
A BOLE TOH 10
KHATAM TATA BYE BYE`}
                theme={darkMode ? "light" : "vs-dark"}
                options={{
                  padding: { top: 12 },
                  readOnly: true,
                  minimap: { enabled: false },
                  automaticLayout: true,
                  scrollBeyondLastLine: false,
                }}
              />
              <p className="text-lg leading-relaxed">
                Here, a variable named A is created and initialised with the
                value 10.
              </p>
            </div>
          </section>
          {/* INPUT LE LE RE BABA Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">INPUT LE LE RE BABA</h2>
            <p className="text-lg leading-relaxed">
              Imagine Zen asking the user, &quot;Hey, what&apos;s up?&quot; This
              is how you can reply and share something with Zen.
            </p>

            <Editor
              className="mb-4 mt-4"
              height={`20vh`}
              defaultLanguage="rust"
              defaultValue={`PARAMPARA PRATISHTA ANUSHASHAN
C BOLE TOH INPUT LE LE RE BABA
KHATAM TATA BYE BYE`}
              theme={darkMode ? "light" : "vs-dark"}
              options={{
                padding: { top: 12 },
                readOnly: true,
                minimap: { enabled: false },
                automaticLayout: true,
                scrollBeyondLastLine: false,
              }}
            />

            <p className="text-lg leading-relaxed">
              Zen asks for input (Re Baba!), and the user&apos;s response is
              stored in the variable C.
            </p>
          </section>
          {/* PRINT BASANTI PRINT Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">PRINT BASANTI PRINT</h2>
            <p className="text-lg leading-relaxed">
              Zen loves to share its thoughts. Use this to make Zen tell you or
              others what it&apos;s thinking.
            </p>

            <Editor
              className="mb-4 mt-4"
              height={`22vh`}
              defaultLanguage="rust"
              defaultValue={`PARAMPARA PRATISHTA ANUSHASHAN
A BOLE TOH 12
PRINT BASANTI PRINT A
KHATAM TATA BYE BYE`}
              theme={darkMode ? "light" : "vs-dark"}
              options={{
                padding: { top: 12 },
                readOnly: true,
                minimap: { enabled: false },
                automaticLayout: true,
                scrollBeyondLastLine: false,
              }}
            />
            <p className="text-lg leading-relaxed">
              Zen expresses its love for coding by printing the message
             12 to the console.
            </p>
          </section>
          {/* AGAR, WARNA AGAR, NHI TOH Section */}
          {/* Include similar sections for other Zen features and keywords */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              AGAR, WARNA AGAR, NHI TOH, BAS ITNA HI
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              These are Zen&apos;s way of making decisions. It&apos;s like Zen
              asking, &quot;Should I do this or that?&quot; You can tell Zen
              what to do in different situations.
            </p>

            <h3 className="text-xl font-bold mb-2">AGAR</h3>
            <p className="text-lg leading-relaxed mb-4">
              The AGAR statement is Zen&apos;s way of asking, &quot;If this
              condition is true, then do something.&quot; It&apos;s a simple
              decision-making tool.
            </p>

            <h3 className="text-xl font-bold mb-2">WARNA AGAR</h3>
            <p className="text-lg leading-relaxed mb-4">
              The WARNA AGAR statement is Zen&apos;s way of saying, &quot;If the
              previous condition is false, check this condition instead.&quot;
              It&apos;s an alternative decision path.
            </p>

            <h3 className="text-xl font-bold mb-2">NHI TOH</h3>
            <p className="text-lg leading-relaxed mb-4">
              The NHI TOH statement is Zen&apos;s way of saying, &quot;If none
              of the previous conditions are true, then do something else.&quot;
              It&apos;s the alternative path when all other conditions fail.
            </p>

            <h3 className="text-xl font-bold mb-2">BAS ITNA HI</h3>
            <p className="text-lg leading-relaxed mb-4">
              The BAS ITNA HI statement marks the end of the conditional block.
              It&apos;s like telling Zen, &quot;Okay, you&apos;ve made your
              decision. Now, let&apos;s move on.”
            </p>

            <Editor
              className="mb-4 mt-4"
              height={`39vh`}
              defaultLanguage="rust"
              defaultValue={`PARAMPARA PRATISHTA ANUSHASHAN
A BOLE TOH 10
AGAR A > 5 TAB
  PRINT BASANTI PRINT "A is greater than 5!"
WARNA AGAR A == 5 TAB
  PRINT BASANTI PRINT "A is exactly 5!"
NHI TOH
  PRINT BASANTI PRINT "A is less than 5!"
BAS ITNA HI
KHATAM TATA BYE BYE`}
              theme={darkMode ? "light" : "vs-dark"}
              options={{
                padding: { top: 12 },
                readOnly: true,
                minimap: { enabled: false },
                automaticLayout: true,
                scrollBeyondLastLine: false,
              }}
            />

            <p className="text-lg leading-relaxed mt-4">
              Depending on the value of A, Zen prints a corresponding message.
            </p>
          </section>
          {/* JAB TAK HAI JAAN Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">JAB TAK HAI JAAN</h2>
            <p className="text-lg leading-relaxed mb-3">
              Zen loves doing things repeatedly, like saying, &quot;Let&apos;s
              do this until something happens!&quot; You can use this to create
              exciting loops.
            </p>

            <Editor
              height={`25vh`}
              defaultLanguage="rust"
              defaultValue={`PARAMPARA PRATISHTA ANUSHASHAN
A BOLE TOH 1
JAB TAK HAI JAAN A < 5 TAB TAK
  PRINT BASANTI PRINT A
  A BOLE TOH A + 1
JAHAN
KHATAM TATA BYE BYE`}
              theme={darkMode ? "light" : "vs-dark"}
              options={{
                padding: { top: 12 },
                readOnly: true,
                minimap: { enabled: false },
                automaticLayout: true,
                scrollBeyondLastLine: false,
              }}
            />

            <p className="text-lg leading-relaxed mt-4">
              Zen prints numbers from 1 to 4 because the loop continues while A
              is less than 5.
            </p>
          </section>
          {/* Comments in Zen Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Comments in Zen</h2>
            <p className="text-lg leading-relaxed">
              In Zen, comments are your way of leaving little notes for yourself
              or your fellow coders. You express comments using the @ symbol.
              It&apos;s like a secret message that won&apos;t affect how your
              program runs.
            </p>

            <Editor
              className="mb-4 mt-4"
              height={`20vh`}
              defaultLanguage="rust"
              defaultValue={`PARAMPARA PRATISHTA ANUSHASHAN
A BOLE TOH 5  @ This is a comment
PRINT BASANTI PRINT A
KHATAM TATA BYE BYE`}
              theme={darkMode ? "light" : "vs-dark"}
              options={{
                padding: { top: 12 },
                readOnly: true,
                minimap: { enabled: false },
                automaticLayout: true,
                scrollBeyondLastLine: false,
              }}
            />
            <p className="text-lg leading-relaxed">
              In this snippet, the line `@ This is a comment is there just for
              you or anyone else reading the code. Zen sees it and says,
              &quot;Oh, I can ignore this part.&quot; Comments are handy for
              making your code more understandable and sharing insights without
              affecting how the program behaves. Happy commenting! 📝✨
            </p>
          </section>
          <h1 className="text-center text-2xl pt-5 italic shadow-lg p-4 ">
            {" "}
            So, are you ready to start your Zen adventure? Dive in, have fun,
            and let your imagination run wild! Remember, in Zen, coding is not
            just a skill; it&apos;s a journey full of discovery and joy. Enjoy
            the ride! 🌟
          </h1>
        </div>
      </div>
    </main>
  );
}

export default Docs;
