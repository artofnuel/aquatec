import { create } from "zustand";

const useNavStore = create((set) => ({
  isNavOpen: false,
  openNav: () => set({ isNavOpen: true }),
  closeNav: () => set({ isNavOpen: false }),
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
}));

// FAQ Zustand store
export const useFaqStore = create((set) => ({
  openIndex: null,
  setOpenIndex: (idx) =>
    set((state) => ({
      openIndex: state.openIndex === idx ? null : idx,
    })),
}));

export default useNavStore;
