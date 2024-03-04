import { defineConfig,splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: './',
  envPrefix: 'PUBLIC_',
  build: {
    chunkSizeWarningLimit: 100,
    rollupOptions: {
    onwarn(warning, warn) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
        return
      }
      warn(warning)
    }}
  },

  plugins: [
    react({
      babel: {
        plugins: ['@emotion'],
      },
    }),
    splitVendorChunkPlugin(),
  ],
  
  resolve: {
    alias: {
     /* assets: path.resolve(__dirname, 'src/assets'),
      common: path.resolve(__dirname, 'src/common'),*/
      core: path.resolve(__dirname, 'src/core'),
     /* layouts: path.resolve(__dirname, 'src/layouts'),
      pods: path.resolve(__dirname, 'src/pods'),
      scenes: path.resolve(__dirname, 'src/scenes'),
      'common-app': path.resolve(__dirname, 'src/common-app'),*/
    },
  },
});
