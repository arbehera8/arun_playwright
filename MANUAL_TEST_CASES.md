# Manual Test Cases

## Test Case TC001 — Verify Registration Page Opens
- **Objective:** Confirm that the ParaBank home page loads and the Register page is accessible.
- **Preconditions:** Browser is installed and internet access is available.
- **Test Data:** None.

### Steps
1. Open the browser.
2. Navigate to `https://parabank.parasoft.com/parabank/index.htm`.
3. Locate and click the `Register` link.

### Expected Results
- The browser navigates to a URL containing `/register`.
- The page shows the heading `Signing up is easy!` or equivalent registration message.

### Actual Result:

### Status:

### Notes:

---

## Test Case TC002 — Register a New User
- **Objective:** Verify that the user can complete the registration form and submit it successfully.
- **Preconditions:** The registration page is accessible from the home page.
- **Test Data:**
  - First Name: `Testers`
  - Last Name: `Talk`
  - Address: `address1`
  - City: `San Jose`
  - State: `California`
  - Zip Code: `12345`
  - Phone Number: `1234567898`
  - SSN: `1234512345`
  - Username: `Testers_<timestamp>`
  - Password: `1234567891`

### Steps
1. Open the browser and navigate to `https://parabank.parasoft.com/parabank/index.htm`.
2. Click the `Register` link.
3. Fill in all required fields with the test data above.
4. Use a unique username value if the user already exists.
5. Click the `Register` button.

### Expected Results
- The registration form submits successfully.
- The site displays a registration confirmation page or success message.
- The URL points to `https://parabank.parasoft.com/parabank/register.htm` or a confirmation page.
- The page includes a confirmation element such as `Your account was created successfully.`

### Actual Result:

### Status:

### Notes:
- If the username already exists, use a unique username for repeat executions.

---

## Test Case TC002A — Register with Existing Username
- **Objective:** Verify registration fails when the username is already in use.
- **Preconditions:** A valid registered username exists.
- **Test Data:**
  - Use the previously registered username: `Testers`
  - Password: `1234567891`

### Steps
1. Navigate to `https://parabank.parasoft.com/parabank/index.htm`.
2. Click `Register`.
3. Complete the registration form using the existing username.
4. Click the `Register` button.

### Expected Results
- Registration is rejected.
- An error message is displayed indicating the username is already taken.
- The page remains on the registration form.

### Actual Result:

### Status:

### Notes:
- This test validates the application's username uniqueness validation.

---

## Test Case TC002B — Register with Missing Required Fields
- **Objective:** Verify validation occurs when required registration fields are left blank.
- **Preconditions:** The registration page is loaded.
- **Test Data:** Leave one or more required fields empty.

### Steps
1. Navigate to `https://parabank.parasoft.com/parabank/index.htm`.
2. Click `Register`.
3. Fill only some fields, leaving at least one required field blank.
4. Click the `Register` button.

### Expected Results
- The form is not submitted.
- Validation messages appear for the empty required fields.
- The page remains on the registration form.

### Actual Result:

### Status:

### Notes:
- Confirm which fields are required and observe the displayed error messages.

---

## Test Case TC002C — Register with Password Mismatch
- **Objective:** Verify registration fails when password and confirm password values do not match.
- **Preconditions:** The registration page is loaded.
- **Test Data:**
  - Password: `1234567891`
  - Confirm Password: `1234567890`

### Steps
1. Navigate to `https://parabank.parasoft.com/parabank/index.htm`.
2. Click `Register`.
3. Enter valid details for all fields except use mismatched values for password and confirm password.
4. Click the `Register` button.

### Expected Results
- Registration is rejected.
- A password mismatch error message is displayed.
- The page remains on the registration form for correction.

### Actual Result:

### Status:

### Notes:
- This verifies the registration form's confirm-password validation.

---

## Test Case TC003 — Successful Login
- **Objective:** Verify that a registered user can log in successfully.
- **Preconditions:** The user exists in the ParaBank system.
- **Test Data:**
  - Username: `Testers`
  - Password: `1234567891`

### Steps
1. Open the browser and navigate to `https://parabank.parasoft.com/parabank/index.htm`.
2. Enter the username in the Username field.
3. Enter the password in the Password field.
4. Click the `Log In` button.

### Expected Results
- The login is accepted.
- The application navigates to the account overview or dashboard page.
- Account-related elements are visible (for example, `Accounts Overview`, `Log Out`, or user account links).

### Actual Result:

### Status:

### Notes:
- If login fails, verify username/password spelling and try again.

---

## Test Case TC004 — Login with Invalid Credentials
- **Objective:** Verify the application prevents login with invalid credentials.
- **Preconditions:** The login page is accessible.
- **Test Data:**
  - Username: `invalid_user`
  - Password: `wrong_password`

### Steps
1. Open the browser and navigate to `https://parabank.parasoft.com/parabank/index.htm`.
2. Enter the invalid username in the Username field.
3. Enter the invalid password in the Password field.
4. Click the `Log In` button.

### Expected Results
- The login is rejected.
- An error message appears, such as `The username and password could not be verified.` or equivalent.
- The page remains on the login screen.

### Actual Result:

### Status:

### Notes:
- This test verifies client-side or server-side validation for bad credentials.

---

## Test Case TC005 — Registration and Login End-to-End
- **Objective:** Verify a new user can register and immediately log in.
- **Preconditions:** The registration page is accessible.
- **Test Data:** Use a unique username and matching password values.

### Steps
1. Navigate to `https://parabank.parasoft.com/parabank/index.htm`.
2. Click the `Register` link.
3. Fill in the registration form and submit with unique credentials.
4. After registration completes, return to the home page if needed.
5. Enter the new username and password on the login form.
6. Click `Log In`.

### Expected Results
- Registration completes successfully.
- Login succeeds for the newly registered account.
- The account overview page or dashboard is displayed.

### Actual Result:

### Status:

### Notes:
- Use a new username each time to avoid conflicts from existing accounts.
- If the site logs the user in automatically after registration, verify account overview directly.
