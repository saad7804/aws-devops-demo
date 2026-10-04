import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter, Bookmark } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import CommandCard from "@/components/CommandCard";
import EmptyState from "@/components/EmptyState";
import PageHeading from "@/components/PageHeading";
import { commands, categories, type CommandCategory } from "@/data/commands";
import { useSavedCommands } from "@/hooks/useSavedCommands";

type FilterCategory = "All" | CommandCategory;

export default function CommandsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [activeCategory, setActiveCategory] = useState<FilterCategory>(
    (searchParams.get("category") as FilterCategory) || "All"
  );
  const { isSaved, toggleSave } = useSavedCommands();

  useEffect(() => {
    const q = searchParams.get("q") || "";
    const cat = (searchParams.get("category") as FilterCategory) || "All";
    setSearch(q);
    setActiveCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (cat: FilterCategory) => {
    setActiveCategory(cat);
    updateSearchParams(search, cat);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    updateSearchParams(value, activeCategory);
  };

  const updateSearchParams = (q: string, cat: FilterCategory) => {
    const params: Record<string, string> = {};
    if (q) params.q = q;
    if (cat !== "All") params.category = cat;
    setSearchParams(params, { replace: true });
  };

  const filtered = useMemo(() => {
    const lower = search.toLowerCase();
    return commands.filter((cmd) => {
      const matchesCategory =
        activeCategory === "All" || cmd.category === activeCategory;
      const matchesSearch =
        !search ||
        cmd.title.toLowerCase().includes(lower) ||
        cmd.command.toLowerCase().includes(lower) ||
        cmd.description.toLowerCase().includes(lower) ||
        cmd.category.toLowerCase().includes(lower) ||
        cmd.example.toLowerCase().includes(lower);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const filterOptions: FilterCategory[] = ["All", ...categories];

  return (
    <div className="animate-fade-in">
      <PageHeading
        title="Commands Library"
        subtitle="Search and filter through a curated collection of real DevOps commands across Linux, Git, Docker, Jenkins, AWS and Kubernetes."
      />

      <div className="mb-6">
        <SearchBar
          value={search}
          onChange={handleSearchChange}
          placeholder="Search by title, command, explanation or example..."
          autoFocus
        />
      </div>

      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        <Filter className="w-4 h-4 text-navy-400 flex-shrink-0" />
        {filterOptions.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
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

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-navy-500 dark:text-navy-400">
          Showing {filtered.length} command{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={Search}
          title="No commands found"
          description="Try adjusting your search or selecting a different category to find what you are looking for."
          action={{ label: "Clear filters", to: "/commands" }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((cmd) => (
            <CommandCard
              key={cmd.id}
              command={cmd}
              isSaved={isSaved(cmd.id)}
              onToggleSave={toggleSave}
            />
          ))}
        </div>
      )}
    </div>
  );
}
