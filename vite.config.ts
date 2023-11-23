import react from '@vitejs/plugin-react'
import path from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import * as packageJson from './package.json'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/'],
    }),
    react(),
    tsConfigPaths(),
    AutoImport({
      imports: ['react', 'react-i18next'],
      dts: './src/auto-imports.d.ts',
      dirs: ['src/components', 'src/components/base'],
      eslintrc: {
        enabled: true,
      },
      defaultExportByFilename: true,
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    css: {
      include: ['dist/index.css', 'dist/style.css'],
    },
    lib: {
      entry: path.join('src', 'index.ts'),

      name: '@crater/react-sdk',
      formats: ['es', 'umd'],
      fileName: (format) => `crater-react-sdk.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
}))
