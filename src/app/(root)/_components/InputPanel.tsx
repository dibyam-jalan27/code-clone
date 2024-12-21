"use client";

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { CheckCircle, Copy, FileInput } from "lucide-react";
import { useState } from "react";

function InputPanel() {
  const { input, setInput } = useCodeEditorStore();
  const [isCopied, setIsCopied] = useState(false);

  const hasContent = input;

  const handleCopy = async () => {
    if (!hasContent) return;
    await navigator.clipboard.writeText(input);
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative bg-[#181825] rounded-xl p-4 ring-1 ring-gray-800/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#1e1e2e] ring-1 ring-gray-800/50">
            <FileInput className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-sm font-medium text-gray-300">Input</span>
        </div>

        {hasContent && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-gray-400 hover:text-gray-300 bg-[#1e1e2e] 
            rounded-lg ring-1 ring-gray-800/50 hover:ring-gray-700/50 transition-all"
          >
            {isCopied ? (
              <>
                <CheckCircle className="w-3.5 h-3.5" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy
              </>
            )}
          </button>
        )}
      </div>

      {/* Output Area */}
      <div className="relative">
        <div
          className="relative bg-[#1e1e2e]/50 backdrop-blur-sm border border-[#313244] 
        rounded-xl p-4 h-[200px] overflow-auto font-mono text-sm items-center justify-center"
        >
          <textarea
            className="whitespace-pre-wrap text-gray-300 bg-transparent w-full h-[95%] focus:outline-none focus:ring-0 focus:border-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your input here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default InputPanel;
