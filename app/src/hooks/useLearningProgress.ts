import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "fluxops-learning-progress";

export type ProgressMap = Record<string, boolean[]>;

export function useLearningProgress(pathId: string, totalConcepts: number) {
  const [completed, setCompleted] = useState<boolean[]>(() =>
    Array(totalConcepts).fill(false)
  );

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const all: ProgressMap = JSON.parse(stored);
        if (all[pathId]) {
          setCompleted(all[pathId]);
        }
      }
    } catch {
      // ignore
    }
  }, [pathId]);

  const persist = (next: boolean[]) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const all: ProgressMap = stored ? JSON.parse(stored) : {};
      all[pathId] = next;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    } catch {
      // ignore
    }
  };

  const toggleConcept = useCallback(
    (index: number) => {
      setCompleted((prev) => {
        const next = [...prev];
        next[index] = !next[index];
        persist(next);
        return next;
      });
    },
    [pathId]
  );

  const resetProgress = useCallback(() => {
    const next = Array(totalConcepts).fill(false);
    setCompleted(next);
    persist(next);
  }, [pathId, totalConcepts]);

  const completedCount = completed.filter(Boolean).length;
  const percentage = totalConcepts === 0 ? 0 : Math.round((completedCount / totalConcepts) * 100);

  return { completed, toggleConcept, resetProgress, completedCount, percentage };
}

export function getOverallProgress(allPaths: { id: string; concepts: string[] }[]) {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return 0;
    const all: ProgressMap = JSON.parse(stored);
    let totalConcepts = 0;
    let totalCompleted = 0;
    for (const path of allPaths) {
      const arr = all[path.id] || [];
      totalConcepts += path.concepts.length;
      totalCompleted += arr.filter(Boolean).length;
    }
    return totalConcepts === 0 ? 0 : Math.round((totalCompleted / totalConcepts) * 100);
  } catch {
    return 0;
  }
}
