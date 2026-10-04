import { useState } from "react";
import { ChevronDown, AlertTriangle, Lightbulb } from "lucide-react";
import CopyButton from "./CopyButton";
import type { TroubleshootingItem } from "@/data/troubleshooting";

interface TroubleshootingAccordionProps {
  item: TroubleshootingItem;
}

export default function TroubleshootingAccordion({
  item,
}: TroubleshootingAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card overflow-hidden animate-fade-in">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 p-4 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-500/10 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-4.5 h-4.5 text-amber-600 dark:text-amber-400" />
          </div>
          <span className="font-medium text-navy-900 dark:text-white text-sm">
            {item.title}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-navy-400 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-4 pb-4 animate-fade-in">
          <p className="text-sm text-navy-600 dark:text-navy-300 mb-3 pl-12">
            {item.problem}
          </p>
          <div className="pl-12 space-y-2">
            {item.solutions.map((solution, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-sm text-navy-700 dark:text-navy-200"
              >
                <Lightbulb className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>{solution}</span>
              </div>
            ))}
          </div>
          {item.commands && item.commands.length > 0 && (
            <div className="pl-12 mt-3 space-y-2">
              {item.commands.map((cmd, index) => (
                <div key={index} className="terminal">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-navy-800 bg-navy-900">
                    <span className="text-xs text-navy-500 font-mono">
                      fix
                    </span>
                    <CopyButton text={cmd} />
                  </div>
                  <div className="px-3 py-2.5 overflow-x-auto">
                    <code className="text-sm text-cyan-300 whitespace-pre-wrap break-all">
                      {cmd}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
