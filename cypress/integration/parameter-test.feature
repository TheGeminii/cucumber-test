Feature: parameter test

  Scenario Outline: test if <parameters> work in a sentence in a Scenario Outline
    Given something
    When I use "<parameter>" in a sentence
    Then it succeeds in showing replaced parameter
    Examples:
      | parameter          |
      | replaced parameter |

  Scenario Outline: test if <parameters> work in a table in a Scenario Outline
    Given something
    When I use the parameter in a table:
      | parameter   |
      | <parameter> |
    Then it will fail to show replaced parameter
    Examples:
      | parameter          |
      | replaced parameter |

  Scenario Outline: Test company details sentence
    Given something
    When I enter the following details for a company in a sentence "<name>", "<address>", "<zipcode>", "<city>"
    Then it succeeds in showing replaced parameters
    Examples:
      | name           | address          | zipcode | city         |
      | company name 1 | company street 1 | 10101   | company town |
      | company name 2 | company street 2 | 20202   | company town |

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
