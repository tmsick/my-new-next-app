import { test, expect } from "@playwright/test"

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/")

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/)
})

test("has h1", async ({ page }) => {
  await page.goto("http://localhost:3000/")
  const h1 = page.locator("h1").first()
  await expect(h1).toHaveText("Hello, World")
})
