"use client"

import React, { useState } from "react"
import Editor from "@monaco-editor/react"
import { Select, message } from "antd"

import { CodeCard, TerminalCard } from "../Card/code"

interface EditorComponentProps {
  title?: string | null
  extra?: boolean
}

interface LanguageEditorValues {
  [key: string]: string
}

export const EditorTabsetComponentWithOpts: React.FC<EditorComponentProps> = ({
  title,
  extra,
}) => {
  const [languages, setLanguages] = useState([
    { label: "Python", value: "python" },
    { label: "Javascript", value: "javascript" },
    { label: "Rust", value: "rust" },
    { label: "Go", value: "go" },
  ])

  const [inOpts, setinOpts] = useState([
    { label: "CLI", value: "cli" },
    { label: "Option2", value: "opt2" },
  ])

  const [selectedLang, setSelectedLang] = useState("python")
  const [selectedOpt, setSelectedOpt] = useState("cli")

  const languageEditorValues: LanguageEditorValues = {
    python: `from wasmer
import Wasmer
python = Wasmer("python/python")
runner = python.entrypoint.run('-c "print(1+1)"')
print(python.stdout)`,
    javascript: `console.log("Hello, World!");`,
    rust: `fn main() {
  println!("Hello, World!");
}`,
    go: `package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}`,
  }

  const [editorValue, setEditorValue] = useState(languageEditorValues.python)

  function handleEditorChange(value: string | undefined) {
    if (value) {
      setEditorValue(value)
    }
  }

  function handleLanguageChange(lang: string) {
    setSelectedLang(lang)
    setEditorValue(languageEditorValues[lang])
  }

  return (
    <>
      <CodeCard
        title={title}
        extra={extra}
        content={
          <div className="bg-wasmer-dark">
            <div className="installsec p-4">
              <p className="mb-1 text-gray-400">install:</p>
              <span className="text-white">
                $ curl https://get.wasmer.io -sSfL | sh
              </span>
            </div>

            {/* <Editor
                            height="150px"
                            theme="vs-dark"
                            language={selectedLang}
                            value={editorValue}
                            onChange={handleEditorChange}
                        /> */}

            <div className="tabset flex flex-col gap-4 flex-nowrap overflow-x-scroll p-4">
              <div className="flex-item h-24">
                <p className="mb-1 text-gray-400">Run:</p>
                <span
                  className="text-white"
                  dangerouslySetInnerHTML={{
                    __html: `$ wasmer run python/python -- -c <span class="text-green">"for x in range(5): print(f'{x} square: {x*x}')"</span>`,
                  }}
                />
              </div>

              <div className="flex-item">
                <button
                  onClick={() => message.success("success")}
                  className={`tabset-button`}
                >
                  Run online
                </button>
              </div>
            </div>

            <div className="installsec flex gap-2 text-gray-400 items-center p-4">
              <span>Running</span>
              <Select
                value={selectedLang}
                onChange={handleLanguageChange}
                options={languages}
                popupMatchSelectWidth={false}
              />
              <span>in</span>
              <Select
                value={selectedOpt}
                options={inOpts}
                popupMatchSelectWidth={false}
              />
            </div>
          </div>
        }
      />
    </>
  )
}

export const EditorTabsetComponent: React.FC<EditorComponentProps> = ({
  title,
  extra,
}) => {
  const [languages, setLanguages] = useState([
    { label: "Python", value: "python" },
    { label: "Javascript", value: "javascript" },
    { label: "Rust", value: "rust" },
    { label: "Go", value: "go" },
  ])

  const [selectedLang, setSelectedLang] = useState("python")

  const languageEditorValues: LanguageEditorValues = {
    python: `from wasmer
import Wasmer
python = Wasmer("python/python")
runner = python.entrypoint.run('-c "print(1+1)"')
print(python.stdout)`,
    javascript: `console.log("Hello, World!");`,
    rust: `fn main() {
  println!("Hello, World!");
}`,
    go: `package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}`,
  }

  const [editorValue, setEditorValue] = useState(languageEditorValues.python)

  function handleEditorChange(value: string | undefined) {
    if (value) {
      setEditorValue(value)
    }
  }

  function handleLanguageChange(lang: string) {
    setSelectedLang(lang)
    setEditorValue(languageEditorValues[lang])
  }

  return (
    <>
      <CodeCard
        title={title}
        extra={extra}
        content={
          <>
            <Editor
              height="200px"
              theme="vs-dark"
              language={selectedLang}
              value={editorValue}
              onChange={handleEditorChange}
            />

            <div className="tabset flex gap-4 flex-nowrap overflow-x-scroll p-4">
              {languages.map((lang, index) => (
                <button
                  key={index}
                  onClick={() => handleLanguageChange(lang.value)}
                  className={`tabset-button ${
                    selectedLang === lang.value ? "tabset-button-active" : ""
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </>
        }
      />
    </>
  )
}

export const EditorComponent: React.FC<EditorComponentProps> = ({ title }) => {
  const [pythonEditorValue, setpythonEditorValue] = useState(`[package]
name = 'youruser/package'
version = '0.1.0'
description = 'Description for package'`)

  function handleEditorChange(value: string | undefined) {
    if (value) {
      setpythonEditorValue(value)
    }
  }

  return (
    <>
      <CodeCard
        title={title}
        content={
          <Editor
            height="200px"
            theme="vs-dark"
            language="python"
            value={pythonEditorValue}
            onChange={handleEditorChange}
          />
        }
      />
    </>
  )
}

export const TerminalComponent: React.FC = () => {
  const [pythonEditorValue, setpythonEditorValue] = useState("wasmer init")

  function handleEditorChange(value: string | undefined) {
    if (value) {
      setpythonEditorValue(value)
    }
  }

  return (
    <>
      <TerminalCard
        content={
          <Editor
            height="30px"
            theme="vs-dark"
            language="python"
            value={pythonEditorValue}
            onChange={handleEditorChange}
          />
        }
      />
    </>
  )
}
