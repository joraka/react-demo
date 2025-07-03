/// <reference types="cypress" />

// Add custom command type definitions here

declare namespace Cypress {
  interface Chainable {
    /**
     * Gets the game board status element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getBoardStatus(): Chainable<JQuery<HTMLElement>>;
    /**
     * Gets all the game board tiles as a list.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getGameTileList(): Chainable<JQuery<HTMLElement>>;
  }
}
