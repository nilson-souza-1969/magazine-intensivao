import { defineConfig, resolveConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    base: '/magazine-intensivao/',
    plugins: [tailwindcss()],
});
