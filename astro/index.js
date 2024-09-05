const useZiko = (...ui) => {
    if (typeof window !== "undefined") {
      const root = globalThis?.document?.querySelector("[data-engine='ziko.js']")
      if (root) {
        ui.forEach(n=>n.unrender())
        root.append(...ui.map(n=>n.element));
      }
    }
  };
export {useZiko};
  