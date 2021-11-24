Feature: Search the product

  Scenario: with its ASIN
    #ASIN stands for Amazon Standard Identification Number
    Given I open the Amazon page
    When I type the "B07VF88TMR"
    When I click the search button
    Then The product which name is "ROG Zephyrus M" should be listed

  Scenario: with its display name
    Given I open the Amazon page
    When I type the "Nintendo Switch"
    When I click the search button
    Then "Nintendo Switch Lite - Yellow" should be listed

    
