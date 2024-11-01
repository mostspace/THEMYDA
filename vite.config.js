import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import path from 'path';
import fs from 'fs/promises';
import svgr from '@svgr/rollup';

export default defineConfig({
  build: {
    target: 'es2015', // Consider if you need a different target for broader compatibility
  },
  plugins: [
    react(),
    viteCompression(),
    svgr(),
  ],
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1'),
      },
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), 'src/$1'),
      },
    ],
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[tj]sx?$/, // This is correct for handling .js and .jsx files
    exclude: [], // Consider if there are files to exclude
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-jsx',
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: 'jsx',
              contents: await fs.readFile(args.path, 'utf8'),
            }));
          },
        },
      ],
    },
  },
  server: {
    host: '0.0.0.0', // Allows access from local network
    port: 5173, // Default port, consider keeping this consistent with preview
  },
  preview: {
    port: 5173, // Can be the same as server port for simplicity
  },
});
