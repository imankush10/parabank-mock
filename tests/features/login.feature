Feature: Parabank Login

Scenario Outline: Successful login
  Given user navigate to parabank "https://parabank.parasoft.com/parabank/index.htm"
  When user enter username "<username>"
  And user enter password "<password>"
  And user click on login button
  Then user should be logged in successfully

Examples:
    | username | password |
    | harman@123  | Harman@123 |
