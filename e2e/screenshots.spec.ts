import { test } from "@playwright/test";

for (const [size, viewport] of Object.entries({
  mobile: { width: 375, height: 812 },
  desktop: { width: 1920, height: 1080 },
})) {
  test(`CV card on ${size}`, { tag: "@screenshot" }, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.route("https://**/*", (route) => route.abort());
    await page.goto("/nb/");
    await page.getByRole("link", { name: /Min CV/ }).screenshot({
      path: `e2e/screenshots/cv-card-${size}.png`,
    });
  });
}
