// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    host: true,
  },
  root: '.',       // Vite가 루트 디렉토리에서 실행되도록 설정
  base: '/'        // 기본 경로 설정
});
