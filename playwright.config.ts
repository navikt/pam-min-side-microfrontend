import { defineConfig } from "@playwright/test";

const port = "4327";
const baseURL = `http://127.0.0.1:${port}`;

export default defineConfig({
  testDir: "./e2e",
  use: { baseURL },
  webServer: {
    command: "node dist/server/entry.mjs",
    env: {
      HOST: "127.0.0.1",
      PORT: port,
      NODE_ENV: "production",
      MIN_CV_URL: "https://example.test/min-cv",
    },
    url: `${baseURL}/api/internal/isReady`,
  },
});
