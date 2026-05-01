@completeFeatureFile
Feature: Parabank Combined Scenarios

  @login
  Scenario Outline: Successful login
    Given user navigate to parabank "https://parabank.parasoft.com/parabank/index.htm"
    When user enter username "<username>"
    And user enter password "<password>"
    And user click on login button
    Then user should be logged in successfully

    Examples:
      | username | password |
      | harman@123 | Harman@123 |

  @openAccount
  Scenario Outline: Open new account for user
    Given navigate to "https://parabank.parasoft.com/parabank/index.htm"
    And user enter username "<username>"
    And user enter password "<password>"
    And user click on login button
    And click on Open New Account link
    And select account type as savings
    And select accounts for fund transfer
    And click on button "OPEN NEW ACCOUNT"
    And fetch new account number
    And click on Transfer Funds link
    And enter transfer amount "<amount>"

    Examples:
        | username | password | amount |
        | harman@123  | Harman@123  | 100  |

  @register
  Scenario Outline: Fill and register successfully
    Given navigate to "https://parabank.parasoft.com/parabank/register.htm"
    And enter firstname "<firstname>"
    And enter lastname "<lastname>"
    And enter address "<address>"
    And enter city "<city>"
    And enter state "<state>"
    And enter zipcode "<zipcode>"
    And enter phone number "<phone>"
    And enter ssn "<SSN>"
    And enter username "<username>"
    And enter password "<password>"
    And enter confirm password "<confirm>"
    When click on submit button
    Then Should see confirmation "<message>"

    Examples:
      | firstname | lastname | address | city  | state | zipcode | phone      | SSN  | username | password | confirm  | message          |
      | harman    | Singh    | ABC St  | Delhi | Delhi | 141013  | 9988774455 | 1648262 | harman@123 | Harman@123 | Harman@123 | Welcome harman@123 |

  @requestLoan
  Scenario Outline: Request for a loan
    Given navigate to "https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC"
    When enter loan username <username>
    And enter loan password <password>
    And click on login
    And click on Request Loan tab
    And enter Loan Amount <LoanAmount>
    And enter Down Payment <DownPayment>
    And select From Account <FromAccount>
    And click on Apply now
    Then should see Status as <Status>

    Examples:
      | username    | password    | LoanAmount | DownPayment | FromAccount | Status   |
      | harman@123 | Harman@123 | 1000       | 100         | 13899       | Approved |

  @update
  Scenario Outline: Update user contact details successfully
    Given user logs in with username "<username>" and password "<password>"
    When user navigates to update contact info page
    And updates first name "<firstname>"
    And updates last name "<lastname>"
    And updates address "<address>"
    And updates city "<city>"
    And updates state "<state>"
    And updates zip code "<zipcode>"
    And updates phone number "<phone>"
    And clicks update button
    Then should see update success message

    Examples:
      | username | password | firstname | lastname | address | city  | state | zipcode | phone      |
      | harman@123 | Harman@123 | harman | Singh   | New St  | Delhi | Delhi | 110002  | 9999999999 |
