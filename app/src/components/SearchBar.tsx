import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  onSubmit?: () => void;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search commands...",
  autoFocus = false,
  onSubmit,
}: SearchBarProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
      className="relative w-full"
    >
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400 dark:text-navy-500 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="input-field pl-12 pr-12 text-base"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-navy-400 hover:text-navy-700 dark:hover:text-navy-200 transition-colors"
          aria-label="Clear search"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </form>
  );
}
