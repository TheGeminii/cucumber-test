import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { TableDefinition } from 'cucumber';

beforeEach(() => {
  console.log('before!');
});

Given('something', () => {
  console.log('Given something');
});

When('I use {string} in a sentence', (parameter: string) => {
  console.log(`When I use ${parameter} in a sentence`);
});

When('I enter the following details for a company in a sentence {string}, {string}, {string}, {string}', (name: string, address: string, zipcode: string, city: string) => {
  console.log(`I enter the following details for a company  in a sentence ${name}, ${address}, ${zipcode}, ${city}`);
});

When('I use the parameter in a table:', (dataTable: TableDefinition) => {
  console.log(`When I use the following in a table: `, dataTable.raw()[1][0]);
});

When('I enter the following details for a company:', (dataTable: TableDefinition) => {
  const row = dataTable.raw()[1];
  console.log(`I enter the following details for a company: ${row[0]}, ${row[1]}, ${row[2]}, ${row[3]}`);
});

Then('it succeeds in showing replaced parameter(s)', () => {
  console.log('Then it succeeds in showing replaced parameters');
});

Then('it will fail to show replaced parameter(s)', () => {
  console.log('Then it will fail to show replaced parameters');
});
