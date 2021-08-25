Feature: Specify number of events

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given the main page is open
    When the user views the number of events
    Then the default number displayed will be 32

  Scenario: User can change the number of events they want to see
    Given the main page is open
    When the user clicks in the input field to change the number of events they want to see
    Then the desired number of events will be rendered