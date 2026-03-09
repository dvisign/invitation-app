import {defineConfig} from "vite";
import {fileURLToPath, URL} from "url";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react", // 이 줄만 추가하면 돼
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // src 폴더를 @로 별칭 설정
    },
  },
  server: {
    port: 3000,
  },
});
