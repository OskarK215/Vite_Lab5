import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base:'/Vite_Lab5',
  plugins: [tailwindcss()],
});
