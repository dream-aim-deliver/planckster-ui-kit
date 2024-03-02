import create from "zustand";

interface SortState {
  sortBy: string;
  sortOrder: "asc" | "desc";
  setSortBy: (sortBy: string) => void;
  setSortOrder: (sortOrder: "asc" | "desc") => void;
  applySort: () => void;
}

export const useSortStore = create<SortState>((set) => ({
  sortBy: "date",
  sortOrder: "asc",
  setSortBy: (sortBy) => set({ sortBy }),
  setSortOrder: (sortOrder) => set({ sortOrder }),
  applySort: () => {
    set((state) => {
      return state;
    });
  },
}));
