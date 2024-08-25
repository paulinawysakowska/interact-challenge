import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 60000,
  expect: {
    timeout: 5000,
  },
  reporter: [['list'], ['html']],
  use: {
    trace: 'on',
    headless: true, 
    launchOptions: {
      args: ['--start-maximized'], 
    },
    actionTimeout: 0, 
    video: 'retain-on-failure', 
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: true,
        launchOptions: {
          args: ['--start-maximized'], 
        },
        video: 'retain-on-failure',
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        headless: true,
        launchOptions: {
          args: ['-width', '1920', '-height', '1080'],
        },
        video: 'retain-on-failure',
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        headless: true,
        viewport: { width: 1920, height: 1080 }, 
        launchOptions: {
          args: ['--start-maximized'], 
        },
        video: 'retain-on-failure',
      },
    },
  ],
});
