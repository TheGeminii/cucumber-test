# CucumberTest
This project shows that with cucumber-preprocessor version 1.9.1 parameters do not work in tables for scenario outlines

## Example scenarios
This example works as expected, parameters get replaced by values from the example table:
``` 
Scenario Outline: Test company details sentence
    Given something
    When I enter the following details for a company in a sentence "<name>", "<address>", "<zipcode>", "<city>"
    Then it succeeds in showing replaced parameters
    Examples:
      | name           | address          | zipcode | city         |
      | company name 1 | company street 1 | 10101   | company town |
      | company name 2 | company street 2 | 20202   | company town |
```
This example does not work as expected, parameters don't get replaced by values from the example table:
```
  Scenario Outline: test company details table
    Given something
    When I enter the following details for a company:
      | name   | address   | zipcode   | city   |
      | <name> | <address> | <zipcode> | <city> |
    Then it will fail to show replaced parameter
    Examples:
      | name           | address          | zipcode | city         |
      | company name 1 | company street 1 | 10101   | company town |
      | company name 2 | company street 2 | 20202   | company town |

```

## To see it in action
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`\
Then run `npx cypress open` to actually see the test.\
Relevant information is logged to the console, press <kbd>^⇧J</kbd>

