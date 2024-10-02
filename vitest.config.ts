import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environmentMatchGlobs: [
      //so assumption? is that if a file is .ts it isn't using any JSX
      //and thus is a unit/loader/action test.
      //if it is .tsx, then it is a component test and needs jsdom
      ["app/**/*.test.ts", "jsdom"],
      ["app/**/*.test.tsx", "jsdom"],
      // ...
    ],
    // setupFiles: "setupUnitTests.ts",
    include: ["app/**/*.test.ts", "app/**/*.test.tsx"],
    globals: true,
    coverage: {
      provider: "v8",
    },
    alias: {
      "~/": new URL("./app/", import.meta.url).pathname,
    },
  },
});
