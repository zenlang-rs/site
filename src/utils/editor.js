export function handleEditorDidMount(editor, monaco, editorRef) {
  if (editorRef) {
    editorRef.current = editor;
  }
  monaco.languages.register({ id: "zenlang" });
  let keywords = [
    "PARAMPARA PRATISHTA ANUSHASHAN",
    "BOLE TOH",
    "INPUT LE LE RE BABA",
    "JAB TAK HAI JAAN",
    "TAB TAK",
    "JAHAN",
    "AGAR",
    "TAB",
    "WARNA AGAR",
    "NHI TOH",
    "BAS ITNA HI",
    "PRINT BASANTI PRINT",
    "KHATAM TATA BYE BYE",
  ];

  monaco.languages.setMonarchTokensProvider("zenlang", {
    keywords,

    tokenizer: {
      root: [
        // Comments
        [/@.*$/, "comment"],

        // Keywords
        [
          /BOLE\s+TOH|JAB\s+TAK\s+HAI\s+JAAN|TAB\s+TAK|AGAR|TAB|WARNA\s+AGAR|NHI\s+TOH|BAS\s+ITNA\s+HI/,
          "keyword",
        ],

        [/PRINT\s+BASANTI\s+PRINT|INPUT\s+LE\s+LE\sRE\s+BABA/, "keyword.io"],

        [
          /PARAMPARA\s+PRATISHTA\s+ANUSHASHAN|KHATAM\s+TATA\s+BYE\s+BYE/,
          "keyword.startend",
        ],

        // Variables
        [/[A-Za-z]\w*/, "variable"],

        // Numbers
        [/\d+/, "number"],

        // Strings
        [/".*?"/, "string"],

        // Operators
        [/[=><!&|+\-*\/%]+/, "operator"],

        // Delimiters
        [/[()]/, "delimiter"],

        // Whitespace
        [/\s+/, "white"],
      ],
    },
  });

  monaco.languages.registerCompletionItemProvider("zenlang", {
    provideCompletionItems: function (model, position) {
      // Get the current line of text
      // const lineUntilPosition = model.getValueInRange({
      //   startLineNumber: position.lineNumber,
      //   startColumn: 1,
      //   endLineNumber: position.lineNumber,
      //   endColumn: position.column,
      // });

      // Check if the cursor is inside a word
      const wordUntil = model.getWordUntilPosition(position);
      const range = new monaco.Range(
        position.lineNumber,
        wordUntil.startColumn,
        position.lineNumber,
        wordUntil.endColumn,
      );

      // Suggestions array
      const suggestions = [];

      // Add keyword suggestions
      suggestions.push(
        ...keywords.map((keyword) => ({
          label: keyword,
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: keyword,
          range: range,
        })),
      );

      return { suggestions };
    },
  });

  // Define your custom theme
  monaco.editor.defineTheme("zenTheme", {
    base: "vs-dark", // Inherit from the default VS Code theme or choose another base theme
    inherit: true, // Allows inheriting settings from base theme

    colors: {
      // Customize specific colors if needed
    },

    rules: [
      {
        token: "comment",
        foreground: "808080",
        fontStyle: "italic",
      },
      {
        token: "keyword",
        foreground: "5E81AC",
      },
      {
        token: "keyword.io",
        foreground: "E06C75",
      },
      {
        token: "keyword.startend",
        foreground: "D19A66",
      },
      {
        token: "variable",
        foreground: "88C0D0",
      },
      {
        token: "number",
        foreground: "B48EAD",
      },
      {
        token: "string",
        foreground: "A3BE8C",
      },
      {
        token: "operator",
        foreground: "D8DEE9",
      },
      {
        token: "delimiter",
        foreground: "D8DEE9",
      },
    ],
  });

  // Set the theme for the Zen language
  monaco.editor.setTheme("zenTheme");
}
