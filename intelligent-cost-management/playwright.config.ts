import { defineConfig } from '@playwright/test'
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  reporter: 'list',
  use: { baseURL: 'http://127.0.0.1:4173', trace: 'retain-on-failure' },
  projects: [
    { name: 'data', testMatch: ['data.spec.ts', 'chat.spec.ts'] },
    ...[
      { name: 'desktop', width: 1440, height: 1000 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 390, height: 844 },
    ].map(({ name, width, height }) => ({
      name,
      testMatch: 'app.spec.ts',
      use: {
        browserName: 'chromium' as const,
        channel: 'chrome',
        viewport: { width, height },
        reducedMotion: 'reduce' as const,
      },
    })),
  ],
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 4173 --strictPort',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
  },
})
