Feature: Show/hide an event's details

    Scenario: An event element is collapsed by default.
    Given the user hasn't interacted with the event element
    When the user opens the app
    Then the user should see the event's basic information only

    Scenario: User can expand an event to see its details.
    Given the main page of the app is rendered
    When the user clicks on the button to expand an event
    Then the user should see the description of the event

    Scenario: User can collapse an event to hide its details.
    Given the user has expanded the event to see its details
    When when the user clicks on the button to collapse an event to hide its details
    Then the details will collapse and no longer be visible