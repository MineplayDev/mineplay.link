import { ViteSSG } from "vite-ssg";
import generatedRoutes from "virtual:generated-pages";
import App from "./App.vue";

import "./styles/main.pcss";

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes: generatedRoutes }, (ctx) => {
  Object.values(import.meta.globEager("./modules/*.ts")).forEach((i) =>
    i.install?.(ctx)
  );
});
