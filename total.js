import useStore from "./store"; // Import the Zustand store

const selectedCarga = useStore.getState().selectedCarga;

console.log(`selectedCarga ${selectedCarga}`);
