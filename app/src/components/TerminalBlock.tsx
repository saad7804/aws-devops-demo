import { Terminal } from "lucide-react";
import CopyButton from "./CopyButton";

interface TerminalBlockProps {
  command: string;
  label?: string;
  showPrompt?: boolean;
}

export default function TerminalBlock({
  command,
  label,
  showPrompt = true,
}: TerminalBlockProps) {
  return (
    <div className="terminal overflow-hidden group">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-navy-800 bg-navy-900">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <Terminal className="w-3.5 h-3.5 text-navy-400 ml-2" />
          <span className="text-xs text-navy-400 font-mono">
            {label || "bash"}
          </span>
        </div>
        <CopyButton text={command} />
      </div>
      <div className="px-4 py-3.5 overflow-x-auto">
        <code className="text-sm leading-relaxed whitespace-pre-wrap break-all">
          {showPrompt && <span className="text-green-400">$ </span>}
          <span className="text-cyan-300">{command}</span>
        </code>
      </div>
    </div>
  );
}
