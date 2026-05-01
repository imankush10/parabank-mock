Feature: RequestLoan
  @RequestLoan
  Scenario Outline: Request for a loan

    Given navigate to "https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC"
    When enter username "<username>"
    When enter password "<password>"
    When click on login
    When click on Request Loan tab
    When enter Loan Amount <LoanAmount>
    When enter Down Payment <DownPayment>
    When select From Account
    When click on Apply now
    Then should see Status as "<Status>"

    Examples:
      | username   | password   | LoanAmount | DownPayment | Status   |
      | harman@123 | Harman@123 | 1000       | 100         | Approved |