import { ViteSSG } from "vite-ssg";
import generatedRoutes from "virtual:generated-pages";
import App from "./App.vue";

import "./styles/main.css";

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes: generatedRoutes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager("./modules/*.ts")).forEach((i) =>
      i.install?.(ctx)
    );
  }
);