// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Parabank Login', () => {

  test('Successful login', async ({ Given, When, Then, And, page }) => { 
    await Given('user navigate to parabank "https://parabank.parasoft.com/parabank/index.htm"', null, { page }); 
    await When('user enter username "<username>"'); 
    await And('user enter password "<password>"'); 
    await And('user click on login button'); 
    await Then('user should be logged in successfully'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user navigate to parabank \"https://parabank.parasoft.com/parabank/index.htm\"","stepMatchArguments":[{"group":{"start":26,"value":"\"https://parabank.parasoft.com/parabank/index.htm\"","children":[{"start":27,"value":"https://parabank.parasoft.com/parabank/index.htm","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When user enter username \"<username>\"","stepMatchArguments":[{"group":{"start":20,"value":"\"<username>\"","children":[{"start":21,"value":"<username>","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And user enter password \"<password>\"","stepMatchArguments":[{"group":{"start":20,"value":"\"<password>\"","children":[{"start":21,"value":"<password>","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And user click on login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then user should be logged in successfully","stepMatchArguments":[]}]},
]; // bdd-data-end