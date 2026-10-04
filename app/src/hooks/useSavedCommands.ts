import { useCallback, useEffect, useState } from "react";
import type { DevOpsCommand } from "@/data/commands";

const STORAGE_KEY = "fluxops-saved-commands";

export function useSavedCommands() {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setSavedIds(JSON.parse(stored));
    } catch {
      // ignore parse errors
    }
  }, []);

  const persist = (ids: string[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  };

  const toggleSave = useCallback((id: string) => {
    setSavedIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      persist(next);
      return next;
    });
  }, []);

  const removeSaved = useCallback((id: string) => {
    setSavedIds((prev) => {
      const next = prev.filter((x) => x !== id);
      persist(next);
      return next;
    });
  }, []);

  const clearAll = useCallback(() => {
    setSavedIds([]);
    persist([]);
  }, []);

  const isSaved = useCallback((id: string) => savedIds.includes(id), [savedIds]);

  return { savedIds, toggleSave, removeSaved, clearAll, isSaved };
}

export function getSavedCommands(savedIds: string[], allCommands: DevOpsCommand[]): DevOpsCommand[] {
  const idSet = new Set(savedIds);
  return allCommands.filter((c) => idSet.has(c.id));
}
