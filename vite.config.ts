import { resolve } from 'path';

import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => ({
  server: { port: 8006 },
  plugins: [
    qwikCity({ trailingSlash: false }),
    qwikVite({
      client: {
        outDir: 'lib',
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: [{ find: '@app', replacement: resolve(__dirname, 'src') }],
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600',
    },
  },
}));
