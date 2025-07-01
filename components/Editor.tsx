"use client";
import {
  type ChangeEvent,
  type FC,
  type MouseEventHandler,
  useState,
} from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { rust } from "@codemirror/lang-rust";
import { go } from "@codemirror/lang-go";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { json } from "@codemirror/lang-json";
import { markdown } from "@codemirror/lang-markdown";
import { php } from "@codemirror/lang-php";
import { sql } from "@codemirror/lang-sql";
import { yaml } from "@codemirror/lang-yaml";

interface CodeEditorProps {
  isGenerating: boolean;
  onGenerateReview: (code: string, language: string) => void;
}

const languageOptions = [
  { name: "JavaScript", value: "javascript" },
  { name: "Python", value: "python" },
  { name: "Java", value: "java" },
  { name: "C++", value: "cpp" },
  { name: "Rust", value: "rust" },
  { name: "Go", value: "go" },
  { name: "HTML", value: "html" },
  { name: "CSS", value: "css" },
  { name: "JSON", value: "json" },
  { name: "Markdown", value: "markdown" },
  { name: "PHP", value: "php" },
  { name: "SQL", value: "sql" },
  { name: "YAML", value: "yaml" },
];

const languageExtensions: Record<string, any> = {
  javascript,
  python,
  java,
  cpp,
  rust,
  go,
  html,
  css,
  json,
  markdown,
  php,
  sql,
  yaml,
};

const Editor: FC<CodeEditorProps> = ({ isGenerating, onGenerateReview }) => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");

  const generateCodeReview: MouseEventHandler = () =>
    onGenerateReview(code, language);

  const languageChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    setCode("");
  };

  return (
    <div className="h-full w-6/12 flex flex-col">
      <div className="p-4 flex items-center justify-between space-x-4">
        <select
          className="p-2 border rounded"
          value={language}
          onChange={languageChangeHandler}
          disabled={isGenerating}
        >
          {languageOptions.map(({ name, value }) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </select>
        <button
          disabled={isGenerating}
          onClick={generateCodeReview}
          className="bg-green-500 p-4 rounded hover:bg-green-700 active:translate-y-1 disabled:opacity-75 disabled:pointer-events-none disabled:cursor-not-allowed"
        >
          Generate Review
        </button>
      </div>
      <div className="flex-grow">
        <CodeMirror
          minHeight="100vh"
          value={code}
          onChange={setCode}
          theme="dark"
          extensions={[
            languageExtensions[language]({
              jsx: language === "javascript" || language === "typescript",
            }),
          ]}
          style={{
            fontSize: "30px",
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
