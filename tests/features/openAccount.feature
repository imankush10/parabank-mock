@openAccount
  Scenario Outline: Open new account for user
    Given navigate to "https://parabank.parasoft.com/parabank/index.htm"
    And user enter username "<username>"
    And user enter password "<password>"
    And user click on login button
    And click on Open New Account link
    And select account type as "<accountType>"
    And select accounts for fund transfer
    And click on button "OPEN NEW ACCOUNT"
    And fetch new account number
    And click on Transfer Funds link
    And enter transfer amount "<amount>"

    Examples:
        | username | password | accountType | amount |
        | harman@123  | Harman@123  | SAVINGS  | 100  |