import { expect, test } from "@playwright/test";

for (const path of ["/nb/", "/nb/fallback"]) {
  test(`${path} renders the Norwegian CV card as UTF-8`, async ({ page }) => {
    await page.route("https://**/*", (route) => route.abort());
    await page.setViewportSize({ width: 375, height: 812 });
    const response = await page.goto(path);
    expect(response?.headers()["content-type"]).toMatch(
      /^text\/html;\s*charset=utf-8$/i,
    );
    expect(await page.evaluate(() => document.characterSet)).toBe("UTF-8");

    const card = page.getByRole("link", { name: /Min CV/ });
    await expect(card).toHaveAttribute("href", "https://example.test/min-cv");
    await expect(card.getByRole("heading", { name: "Min CV" })).toBeVisible();
    await expect(
      card.getByText("Nå kan du opprette eller endre din CV på Nav.no"),
    ).toBeVisible();
    expect(
      await card.evaluate((element) => {
        const { left, right } = element.getBoundingClientRect();
        return left >= 0 && right <= document.documentElement.clientWidth;
      }),
    ).toBe(true);
  });
}
