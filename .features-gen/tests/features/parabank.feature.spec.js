// Generated from: tests\features\parabank.feature
import { test } from "playwright-bdd";

test.describe('Register', () => {

  test.describe('Fill and Register Successfully', () => {

    test('Example #1', async ({ Given, When, Then, And, page }) => { 
      await Given('navigate to "https://parabank.parasoft.com/parabank/register.htm"', null, { page }); 
      await And('enter firstname "Aditya"'); 
      await And('enter lastname "Singh"'); 
      await And('enter address "ABC St"'); 
      await And('enter city "Delhi"'); 
      await And('enter state "Delhi"'); 
      await And('enter zipcode "110001"'); 
      await And('enter phone number "9876543210"'); 
      await And('enter ssn "1234"'); 
      await And('enter username "user1234"'); 
      await And('enter password "Pass@123"'); 
      await And('enter confirm password "Pass@123"'); 
      await When('click on submit button'); 
      await Then('Should see confirmation "Welcome user1234"'); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\parabank.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given navigate to \"https://parabank.parasoft.com/parabank/register.htm\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://parabank.parasoft.com/parabank/register.htm\"","children":[{"start":13,"value":"https://parabank.parasoft.com/parabank/register.htm","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And enter firstname \"Aditya\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Aditya\"","children":[{"start":17,"value":"Aditya","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And enter lastname \"Singh\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Singh\"","children":[{"start":16,"value":"Singh","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And enter address \"ABC St\"","stepMatchArguments":[{"group":{"start":14,"value":"\"ABC St\"","children":[{"start":15,"value":"ABC St","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And enter city \"Delhi\"","stepMatchArguments":[{"group":{"start":11,"value":"\"Delhi\"","children":[{"start":12,"value":"Delhi","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"And enter state \"Delhi\"","stepMatchArguments":[{"group":{"start":12,"value":"\"Delhi\"","children":[{"start":13,"value":"Delhi","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"And enter zipcode \"110001\"","stepMatchArguments":[{"group":{"start":14,"value":"\"110001\"","children":[{"start":15,"value":"110001","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"And enter phone number \"9876543210\"","stepMatchArguments":[{"group":{"start":19,"value":"\"9876543210\"","children":[{"start":20,"value":"9876543210","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"And enter ssn \"1234\"","stepMatchArguments":[{"group":{"start":10,"value":"\"1234\"","children":[{"start":11,"value":"1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And enter username \"user1234\"","stepMatchArguments":[{"group":{"start":15,"value":"\"user1234\"","children":[{"start":16,"value":"user1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And enter password \"Pass@123\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Pass@123\"","children":[{"start":16,"value":"Pass@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"And enter confirm password \"Pass@123\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Pass@123\"","children":[{"start":24,"value":"Pass@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When click on submit button","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Should see confirmation \"Welcome user1234\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Welcome user1234\"","children":[{"start":25,"value":"Welcome user1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end