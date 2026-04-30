@openAccount
Feature: opennewAccount
    Scenario: open new accoun for user
    Given navigate to "https://parabank.parasoft.com/parabank/openaccount.htm"
    And click on Open New Account link
    And select account type as "SAVINGS"
    And select accounts for fund transfer
    And click on button "OPEN NEW ACCOUNT"
    And fetch new account number
    And click on Transfer Funds link
    And enter transfer amount "100"