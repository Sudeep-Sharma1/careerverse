// export const API_BASE_URL =
//   import.meta.env.VITE_API_BASE_URL || "https://careerverse-nu2v.onrender.com";
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.DEV
    ? "http://localhost:8000"
    : "https://careerverse-nu2v.onrender.com");