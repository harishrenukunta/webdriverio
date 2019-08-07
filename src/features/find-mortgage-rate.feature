Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide


  Scenario: Find mortgage rates
    Given I open the url "https://www.nationwide.co.uk"
    When navigate to new mortgage rates page
    And find mortgage rate by providing below information:
      | MortgageExists | MortgageType    | PropertyValue | Term |
      | No             | Changing lender | 300000        | 30   |

