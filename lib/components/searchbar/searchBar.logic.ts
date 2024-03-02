import create from "zustand";

interface SearchState {
  query: string;
  setQuery: (query: string) => void;
  search: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  setQuery: (query) => set({ query }),
  search: () => {
    // Assuming `search` function performs the search operation and calls `onSearch` callback
    // with the search query.
    set((state) => {
      // Access state.query
      // Do not forget to replace onSearch with the actual function
      // onSearch(state.query);
      return state;
    });
  },
}));
