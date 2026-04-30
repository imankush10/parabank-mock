@openAccount
Feature: opennewAccount
    Scenario: open new accoun for user
    Given navigate to "https://parabank.parasoft.com/parabank/index.htm"
    And click on Open New Account link
    And select account type as "SAVINGS"
    And select accounts for fund transfer
    And click on button "OPEN NEW ACCOUNT"
    And fetch new account number
    And click on Transfer Funds link
    And enter transfer amount "100"
    # Then message visible should be "Congratulations, your account is now open."