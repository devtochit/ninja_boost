import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Select, message } from "antd";
import { CustomCodeCard } from "../CustomCard/CustomCodeCard";
import { TypingText } from "../CustomTexts";

interface LanguageEditorValues {
  [key: string]: string;
}

interface Option {
  label: string;
  value: string;
}

const CustomEditorComponent: React.FC = () => {
  const [languageOptions, setLanguageOptions] = useState<Option[]>([
    { label: "Python", value: "python" },
    { label: "Javascript", value: "javascript" },
    { label: "Rust", value: "rust" },
    { label: "Go", value: "go" },
  ]);

  const [inputOptions, setInputOptions] = useState<Option[]>([
    { label: "CLI", value: "cli" },
    { label: "Option2", value: "opt2" },
  ]);

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
  };

  const [editorValue, setEditorValue] = useState<string>(
    languageEditorValues.python
  );
  const [selectedLanguage, setSelectedLanguage] = useState<string>("python");
  const [selectedOption, setSelectedOption] = useState<string>("cli");

  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      setEditorValue(value);
    }
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setEditorValue(languageEditorValues[language]);
    setInputOptions(getInputOptionsForLanguage(language));
  };

  const getInputOptionsForLanguage = (language: string): Option[] => {
    // Add logic to return input options based on the selected language
    switch (language) {
      case "python":
        return [
          { label: "CLI", value: "cli" },
          { label: "Option2", value: "opt2" },
        ];
      case "javascript":
        return [
          { label: "Option1", value: "opt1" },
          { label: "Option2", value: "opt2" },
        ];
      case "rust":
      case "go":
        return [
          { label: "Option1", value: "opt1" },
          { label: "Option2", value: "opt2" },
          { label: "Option3", value: "opt3" },
        ];
      default:
        return [];
    }
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleRunOnline = () => {
    message.success("Hello world Running online...");
    // Add logic to handle running code online
  };

  return (
    <>
      <CustomCodeCard
        content={
          <div className="wasmer-dark-background text-white">
            <div className="Editorbackground p-4">
              <p className="mb-1 text-gray-300">Install:</p>
              <TypingText textStyles="text-white leading-4 " title=" $ curl https://get.wasmer.io -sSfL | sh" />
            </div>

            <div className="checkback smallbtn flex flex-col gap-4 p-4">
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
                <button onClick={handleRunOnline} className="buttoneditor">
                  Run online
                </button>
              </div>
            </div>

            <div className="bg-wasmerdark flex gap-2 items-center p-4">
              <span>Running</span>
              <Select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                options={languageOptions}
                popupMatchSelectWidth={false}
              />
              <span>in</span>
              <Select
                value={selectedOption}
                onChange={handleOptionChange}
                options={inputOptions}
                popupMatchSelectWidth={false}
              />
            </div>
          </div>
        }
      />
    </>
  );
};

export default CustomEditorComponent;
