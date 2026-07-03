import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/semi-one-website/' : '/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    coverage: {
      reporter: ['text', 'html'],
      thresholds: {
        statements: 80,
        branches: 70,
        functions: 75,
        lines: 80
      }
    }
  }
});
