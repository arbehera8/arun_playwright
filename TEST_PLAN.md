# Playwright Test Plan

## Project Overview
This project is a Playwright-based automation suite for testing the ParaBank demo website (`https://parabank.parasoft.com/parabank`). It uses a Page Object Model structure under `pageobjects/` and includes functional UI tests, registration and login workflows, and at least one API smoke check.

## Objectives
- Verify key customer workflows such as registration and login.
- Ensure the home and registration pages render correctly.
- Maintain regression coverage for critical user flows.
- Capture failure artifacts using Playwright traces, video, screenshots, and Allure reports.

## Test Scope
### In Scope
- User registration flow
- Login flow
- Navigation to registration page
- Combined registration + login scenario
- Basic API GET smoke test
- Cross-browser execution across Chromium, Firefox, and WebKit

### Out of Scope
- Full backend API validation beyond smoke-level GET requests
- Performance/load testing
- Accessibility testing
- Mobile-specific device testing (currently desktop browsers only)

## Test Approach
- Use `@playwright/test` as the test runner
- Maintain reusable page objects in `pageobjects/`:
  - `HomePage.js`
  - `LoginPage.js`
  - `RegistrationPage.js`
  - `POManager.js`
- Share common test data via `fixtures/testfixture.js`
- Execute browser matrix configured in `playwright.config.js`
- Store reports in `allure-results/` and generate HTML reports locally

## Test Environment
- Node package manager: npm
- Playwright version: `@playwright/test@^1.60.0`
- Browsers configured:
  - Chromium (`chrome` project)
  - Firefox
  - WebKit (`safari` project)
- Reporting configured:
  - HTML report
  - Allure Playwright reporter
  - console reporters: dot, line, list
- Trace settings:
  - `trace: 'on-first-retry'` for retries
  - `video: 'on'` for Chromium
  - `screenshot: 'on'` for Chromium and `only-on-failure` for other browsers

## Current Test Coverage
### UI Tests
- `tests/TCNew.spec.js`
  - Verify that the ParaBank home page loads
  - Validate that the Register link opens the registration page
  - Assert the registration heading is visible

- `tests/TCregister.spec.js`
  - Open the home page via the page object manager
  - Click Register link
  - Fill the registration form using `RegistrationPage.registerUser()`
  - Submit registration and verify the registration page URL

- `tests/TClogin.spec.js`
  - Open the home page
  - Use `LoginPage.clickOnLoginButton(username, password)` to enter credentials and submit
  - Pause briefly for result validation (currently `waitForTimeout`)

- `tests/TCcombine.spec.js`
  - Perform registration workflow
  - Then perform login workflow in a serial group
  - Includes smoke and regression tags in test names

### API Tests
- `tests/apiGET.spec.js`
  - Contains an API GET smoke test using Playwright request fixture

## Recommended Test Cases
### Functional Test Cases
1. `Registration Page Loads`
   - Navigate from home page to registration page.
   - Assert page URL and heading.

2. `User Registration Successful`
   - Fill and submit registration form.
   - Assert successful registration confirmation or redirected page.

3. `User Login Successful`
   - Log in using valid credentials.
   - Assert landing page or account overview appears.

4. `Registration and Login End-to-End`
   - Register a new user.
   - Log in with the registered credentials.
   - Assert successful login to user landing page.

### Negative/Validation Test Cases
5. `Login with Invalid Credentials`
   - Attempt login with invalid username/password.
   - Assert visible error message and no success redirect.

6. `Registration Missing Required Fields`
   - Submit registration with missing required inputs.
   - Assert validation messages are displayed.

### API Test Cases
7. `API GET Smoke Test`
   - Send a GET request to a public endpoint/supporting service.
   - Assert status code is `200` and response payload structure is valid.

## Test Data Strategy
- Centralize test data in `fixtures/testfixture.js`
- Use reusable test data keys such as `username`, `password`, `firstname`, etc.
- Prefer data-driven tests for registration with multiple users in the future.

## Execution Strategy
### Local Execution
- Run all tests:
  ```bash
  npx playwright test
  ```
- Run a single test file:
  ```bash
  npx playwright test tests/TClogin.spec.js
  ```
- Generate HTML report after execution:
  ```bash
  npx playwright show-report
  ```
- Generate Allure report (if Allure is installed separately):
  ```bash
  allure serve allure-results
  ```

### CI Execution
- Use `npm` or `npx playwright test` in CI pipeline
- Configure environment variable `CI=true` to enable retry and single-worker behavior
- Publish `allure-results/` as build artifact

## Quality Improvements
- Replace `page.waitForTimeout(...)` with explicit assertions or `waitForURL`
- Add `baseURL` to `playwright.config.js` and use `page.goto('')` where appropriate
- Create negative path tests for invalid login and form validation
- Consider splitting smoke tests and regression tests using Playwright tags or `test.describe`
- Add typed or JSON-based test data to support more varied scenarios

## Risks and Assumptions
- The test suite assumes the ParaBank demo site is available and stable.
- Current registration test may reuse the same hardcoded username and could fail if the account already exists.
- API test coverage is minimal; expanding it will improve backend validation.
- `clickOnLoginButton()` currently does not assert login success or wait for a specific post-login page.

## Next Steps
- Add a dedicated `LoginPage.login()` and `assertLoggedIn()` method in `pageobjects/LoginPage.js`
- Add a test for invalid login behavior
- Add cross-browser verification for login and registration page flows
- Clean up `tests/TCregister.spec.js` and `tests/TCcombine.spec.js` to use `expect()` rather than `waitForTimeout`
