@atm
Feature: withdraw
    As a customer, I want to withdraw from my account using ATM, so that I can pay in cash

    Background:
        Given a customer with id 1 and pin 111 with balance 200 exists
        And I login to ATM with id 1 and pin 111

    Scenario: Withdraw amount less than balance
        When I withdraw 50 from ATM
        Then my account balance is 150

    Scenario: Withdraw amount more than balance
        When I overdraw 5000 from ATM
        Then my account balance is 200