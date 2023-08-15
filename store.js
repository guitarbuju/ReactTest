import { create } from "zustand";

const useStore = create((set) => ({
  selectedCarga: "",
  cart:[],
  setSelectedCarga: (carga) => set(() => ({ selectedCarga: carga })),
  addToCart: (carga) => set((state) => ({ cart: [...state.cart, carga] })),
}));

const useStore2 = create((set) => ({
  selectedCarga2: "",
  setSelectedCarga2: (carga) => set(() => ({ selectedCarga2: carga })),
}));

const useStore3 = create((set) => ({
  selectedCarga3: "",
  setSelectedCarga3: (carga) => set(() => ({ selectedCarga3: carga })),
}));

const useStore4 = create((set) => ({
  selectedCarga4: "",
  setSelectedCarga4: (carga) => set(() => ({ selectedCarga4: carga })),
}));

const useStore5 = create((set) => ({
  selectedCarga5: "",
  setSelectedCarga5: (carga) => set(() => ({ selectedCarga5: carga })),
}));

export { useStore, useStore2, useStore3, useStore4, useStore5 };
