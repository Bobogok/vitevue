// import { resolve } from 'path';
import { defineConfig } from 'vite';

// const alias = [
//   { find: /^~/, replacement: '' },
//   { find: 'vue', replacement: 'vue/dist/vue.esm' },
//   {
//     find: '@',
//     replacement: resolve(__dirname, ''),
//   },
// ];

// const define = {
//   'process.env.NODE_ENV': '"development"',
//   'precess.env.SITE_NAME': '"Vite Vue2 App"',
// };

// const proxy = {};

// const rollupOptions = {};

// const esbuild = {};

// export default defineConfig({
//   base: './', // index.html
//   root: './', // js
//   publicDir: 'static',
//   resolve: {
//     alias,
//     extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.styl'],
//     dedupe: ['vue-demi'],
//   },
//   define: define,
//   server: {
//     proxy,
//     port: 3000,
//     fs: {
//       strict: false,
//     },
//   },
//   build: {
//     target: 'es2015',
//     minify: 'terser', // boolean | 'terser' | 'esbuild'
//     manifest: false, // maifest.json
//     sourcemap: false, // soucemap.json
//     outDir: 'build', //
//     rollupOptions,
//   },
//   esbuild,
//   plugins: [

//   ],
//   css: {
//     preprocessorOptions: {},
//   },
// })

const proxy = {};

const openBrowser = true;

// выше закомменчен тестовый вариант (нерабочий)
export default defineConfig({
  server: {
    // proxy: proxy,
    open: true,
    port: 1337, // если занят, то переключеется на рандомный
    fs: {
      strict: true,
    },
  },
});
