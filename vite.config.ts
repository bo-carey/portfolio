import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.GOOGLE_SITE_KEY': JSON.stringify(env.GOOGLE_SITE_KEY),
      'process.env.RESUME_LINK': JSON.stringify(env.RESUME_LINK),
    },
    plugins: [react()],
    base: mode === 'production' ? '/portfolio/' : '/',
  };
});
