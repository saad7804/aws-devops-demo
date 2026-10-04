import { useMemo, useState } from "react";
import { Bookmark, Search, Trash2, FolderOpen } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import CommandCard from "@/components/CommandCard";
import EmptyState from "@/components/EmptyState";
import PageHeading from "@/components/PageHeading";
import { commands, categories, type CommandCategory } from "@/data/commands";
import { useSavedCommands, getSavedCommands } from "@/hooks/useSavedCommands";

type FilterCategory = "All" | CommandCategory;

export default function SavedCommandsPage() {
  const { savedIds, toggleSave, removeSaved, clearAll } = useSavedCommands();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const savedCommands = useMemo(
    () => getSavedCommands(savedIds, commands),
    [savedIds]
  );

  const filtered = useMemo(() => {
    const lower = search.toLowerCase();
    return savedCommands.filter((cmd) => {
      const matchesCategory =
        activeCategory === "All" || cmd.category === activeCategory;
      const matchesSearch =
        !search ||
        cmd.title.toLowerCase().includes(lower) ||
        cmd.command.toLowerCase().includes(lower) ||
        cmd.description.toLowerCase().includes(lower) ||
        cmd.category.toLowerCase().includes(lower);
      return matchesCategory && matchesSearch;
    });
  }, [savedCommands, search, activeCategory]);

  const filterOptions: FilterCategory[] = ["All", ...categories];

  return (
    <div className="animate-fade-in">
      <PageHeading
        title="Saved Commands"
        subtitle="Your favourite commands, saved in your browser for quick access. Search, filter, copy or remove them anytime."
        icon={
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
            <Bookmark className="w-6 h-6 text-white" />
          </div>
        }
      />

      {savedCommands.length === 0 ? (
        <EmptyState
          icon={FolderOpen}
          title="No saved commands yet"
          description="Browse the commands library and tap the bookmark icon on any command to save it here for quick access."
          action={{ label: "Browse commands", to: "/commands" }}
        />
      ) : (
        <>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Search saved commands..."
              />
            </div>
            <button
              onClick={clearAll}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/30 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all duration-300"
            >
              <Trash2 className="w-4 h-4" />
              Clear all
            </button>
          </div>

          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
            {filterOptions.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white dark:bg-navy-900 text-navy-600 dark:text-navy-300 border border-navy-200 dark:border-navy-800 hover:border-blue-400 dark:hover:border-blue-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="text-sm text-navy-500 dark:text-navy-400 mb-4">
            {filtered.length} saved command{filtered.length !== 1 ? "s" : ""}
          </p>

          {filtered.length === 0 ? (
            <EmptyState
              icon={Search}
              title="No matching saved commands"
              description="Try a different search term or category filter."
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((cmd) => (
                <CommandCard
                  key={cmd.id}
                  command={cmd}
                  isSaved={true}
                  onToggleSave={(id) => {
                    removeSaved(id);
                  }}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
