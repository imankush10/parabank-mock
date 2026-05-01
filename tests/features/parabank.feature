Feature: Register
@register
Scenario Outline: Fill and Register Successfully

Given  navigate to  "https://parabank.parasoft.com/parabank/register.htm"

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
| firstname | lastname | address | city  | state | zipcode | phone      | SSN   | username     | password    | confirm     | message                          |
| Aditya    | Singh    | ABC St  | Delhi | Delhi | 110001  | 9876543210 | 1234  | user1234    | Pass@123    | Pass@123    | Welcome user1234 |