import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import svgr from '@svgr/rollup';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  build: {
    target: 'es2015', // Target ES2015 for wider browser support
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip', // Use gzip compression by default
    }),
    visualizer({
      filename: './dist/stats.html', // Output location for the report
      open: false, // Automatically opens the visualizer after build
      gzipSize: true, // Show gzip size
      brotliSize: true, // Show brotli size
    }), 
    svgr(), // SVGR for using SVG as React components
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
    include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-jsx',
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: 'jsx',
              contents: await fs.promises.readFile(args.path, 'utf8'),
            }));
          },
        },
      ],
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    port: 5173,
  },
});