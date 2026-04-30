Feature: Update Contact Info

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

Then should see update success message "<message>"

Examples:
| username | password | firstname | lastname | address | city  | state | zipcode | phone      | message                       |
| john     | demo     | Adi       | Singh    | New St  | Delhi | Delhi | 110002  | 9999999999 | Profile Updated |