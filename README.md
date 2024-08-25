# Interact Challenge - Automated Testing Project

## Project Overview

This project is an automated testing suite for a web application developed using Playwright and TypeScript. The project is designed to automate end-to-end tests for critical features of the application, focusing on user interactions like logging in, adding blog posts, and verifying the visibility and functionality of various UI elements. The tests are structured using the Page Object Model (POM) to promote maintainability and reusability of test code.

### Key Features

- **Automated Test Suite**: Comprehensive end-to-end tests for the web application using Playwright and TypeScript.
- **Page Object Model (POM)**: Implementation of POM for better test structure and maintenance.
- **Custom Utility Functions**: Reusable utility functions for common tasks like checking visibility, handling errors, and filling forms.
- **Error Handling**: Includes functions to handle known issues within the application by retrying certain actions or checking for specific error messages.
- **ESLint and Prettier Integration**: Ensures consistent code quality and formatting across the project.

## Prerequisites

Before you can run the project, make sure you have the following installed:
- **Node.js** (v14 or later)
- **Yarn** (v1.22 or later)
- **Git** (for cloning the repository)

## Installation
To set up the project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:paulinawysakowska/interact-challenge.git

2. **Navigate to the project directory:**

   ```bash
   cd interact-challenge

3. **Install the dependencies:**
   ```bash
   yarn install

## Running Tests
You can run the automated tests using the following commands:

1. **Run all tests:** 
   ```bash
   yarn playwright test
   
This command will run the entire test suite across multiple browsers (Chromium, Firefox, WebKit) in non-headless mode.

2. **Run tests on a specific browser:** 

   ```bash
   yarn playwright test --project=chromium

Replace chromium with firefox or webkit to run on those browsers.

3. **Generate a report:**

   ```bash
   yarn playwright show-report

## Headless Mode Configuration

By default, the tests are configured to run in **headless mode** (where the browser UI is not visible). This is often preferred in continuous integration (CI) environments. However, if you want to **see the browser while the tests are running** (non-headless mode), you can change the `headless` option in the `playwright.config.ts` file.

To enable non-headless mode, update the `headless` option to `false` in the `use` block or within specific project configurations:

```typescript
use: {
  headless: false, // Set this to false to see the browser UI during tests
  // other configurations
}
```

Or use the command line option for a single test run:
```bash
yarn playwright test --headed
```


## Running Prettier and ESLint

1. **Run Prettier to format the code:**
   ```bash
   yarn format

2. **Run ESLint to check for linting errors:**
    ```bash
    yarn lint

3. **Automatically fix ESLint errors:**
    ```bash
    yarn lint:fix

## Project Structure

- **src/:** Contains all source code files, including tests, pages (POM), and utility functions.
- **src/tests/:** Contains the test files.
- **src/pages/:** Contains the Page Object Model classes.
- **src/utils/:** Contains reusable utility functions.
- **src/dicts/:** Contains dictionaries with text and other constants used in tests.
- **src/fixtures/:** Contains test setup files that configure common states or actions to be reused across multiple test cases. This typically includes custom fixtures, such as login processes or environment setup, ensuring tests are more maintainable and reducing redundancy.
- **src/img/:** Contains image files used within the tests, such as files that need to be uploaded during test execution or reference images for visual testing.
- **.env_example:** A sample environment configuration file that includes placeholder values for environment variables. This file should be used as a template for creating a .env file, which stores sensitive information such as API keys, login credentials, and URLs.

## Expected test steps

- **Launch the browser using Playwright.**
<br>Comment: Done

- **Navigate to the specified URL.**
<br>Comment: Done

- **Log in using the provided credentials.**
<br>Comment: Done

- **Navigate to the profile menu and select "Add Blog Post."**
<br>Comment: Done

- **Fill in the blog post form with the required text and image.**
<br>Comment: image and Post Summary are not required but done. 

- **Click “Continue” to submit the blog post.**
<br>Comment: Done

- **Set “Publish” and “Make Feature Post” to Yes**
<br>Comment: There is no 'Make Future Post' but 'Publish?'. I am not sure if there is a bug on the page or task description should be updated. 

- **Navigate to “All Posts” and validate that the blog post exists.**
<br>Comment: I can't find 'All Posts' button or label, so I in my test I validated post on the Post Page presented when the post is published. 

- **Verify the content of the blog post matches the input data.**
<br>Comment: Done, but because of bug for adding post content is commented now. For the title works fine, post summary is not presented at the post page. 

- **Other**
<br> Comment: There is a bug during adding a post; content text is removed when SAVE button is selected. I did a handler to this step: src/utils/handleError.ts



## License
This project is licensed under the MIT License.
