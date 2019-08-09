Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide


  
  Scenario: User should be able to apply fixed term mortgages
    Given I open the url "https://www.nationwide.co.uk"
    When navigate to new mortgage rates page
    And find mortgage rate by providing below information:
      | MortgageExists | MortgageType    | PropertyValue | MortgageAmount | Term |
      | No             | Changing lender | 300000        | 150000         | 30   |
    And choose to display only fixed mortgage and with fee
    Then verify mortgage choices for below periods returned:
      | FixedTerm   |
      | 2 yr Fixed  |
      | 3 yr Fixed  |
      | 5 yr Fixed  |
      | 10 yr Fixed |
    When opt for a 5 yr fixed mortgage
    Then 'Start your Remortgage application' page shows up

    
