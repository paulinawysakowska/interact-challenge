import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: [['list'], ['html']],
  use: {
    trace: 'on',
    headless: false, 
    launchOptions: {
      args: ['--start-maximized'], 
    },
    actionTimeout: 0, 
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
        launchOptions: {
          args: ['--start-maximized'], 
        },
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        headless: false,
        launchOptions: {
          args: ['-width', '1920', '-height', '1080'],
        },
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        headless: false,
        viewport: { width: 1920, height: 1080 }, 
        launchOptions: {
          args: ['--start-maximized'], 
        },
      },
    },
  ],
});
