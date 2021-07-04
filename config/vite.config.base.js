import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'), // 设置 `@` 指向 `src` 目录
    },
  },
  base: '/', // 设置打包路径
  server: {
    port: 3000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
  },
  build: {
    // outDir: resolve(__dirname, '../dist'),
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        additionalData: "@import '@/styles/_var.less';",
        // modifyVars: {
        //   '@yellow': '#eb2f96',
        // },
      },
      //   scss: {
      //     // 自动导入全局样式
      //     additionalData: "@import '@/styles/base.scss';",
      //   },
    },
  },
});
