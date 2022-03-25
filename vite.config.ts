import autoprefixer from "autoprefixer";
import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-ssg-sitemap";
import AutoImport from "unplugin-auto-import/vite";
import { VitePWA } from "vite-plugin-pwa";
import istanbul from "vite-plugin-istanbul";

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        require("postcss-preset-env")({
          stage: 1,
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue({
      include: /\.vue$/,
    }),
    istanbul({
      requireEnv: true,
      include: "src/*",
    }),

    Pages({
      extensions: ["vue"],
    }),

    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/head", "@vueuse/core"],
      dts: "src/auto-imports.d.ts",
    }),

    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Mineplay",
        theme_color: "#ffffff",
      },
    }),
  ],

  ssgOptions: {
    dirStyle: "nested",
    script: "async",
    format: "cjs",
    formatting: "minify",
    onFinished() {
      generateSitemap({
        hostname: "https://new.mineplay.link",
      });
    },
  },

  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core", "@vueuse/head"],
  },

  build: {
    sourcemap: true,
  },

  test: {
    coverage: {
      all: true,
      include: ["src"],
      reporter: ["text", "json"],
      clean: true,
    },
    include: ["test/**/*.test.ts"],
    environment: "jsdom",
    deps: {
      inline: ["@vue", "@vueuse"],
    },
  },
});
