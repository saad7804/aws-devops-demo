import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "fluxops-ec2-checklist";

export function useEC2Checklist() {
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setChecked(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, []);

  const persist = (ids: string[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  };

  const toggle = useCallback((id: string) => {
    setChecked((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      persist(next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setChecked([]);
    persist([]);
  }, []);

  return { checked, toggle, reset };
}
