beforeEach(() => {
  cy.visit("http://localhost:5173/");
});

describe("Test case 1: Grid and buttons are displayed", () => {
  it("should display grid and go to start button", () => {
    cy.contains(".status", "Next player: X").should("be.visible");
    cy.getGameTileList()
      .should("have.length", 9)
      .each(($button) => {
        cy.wrap($button).should("be.visible");
      });

    cy.get(".game-info button").should("have.length", 1).should("be.visible").should("have.text", "Go to game start");
  });
});

describe("Test case 2: Place tiles", () => {
  it("should be able to place tiles", () => {
    //player 1 move
    cy.getGameTileList().eq(0).click();
    cy.getGameTileList().eq(0).should("have.text", "X");
    cy.get(".game-info li").eq(1).should("have.text", "Go to move #1");
    cy.contains(".status", "Next player: O").should("be.visible");

    //player 2 move
    cy.getGameTileList().eq(1).click();
    cy.getGameTileList().eq(1).should("have.text", "O");
    cy.get(".game-info li").eq(2).should("have.text", "Go to move #2");
    cy.contains(".status", "Next player: X").should("be.visible");
  });
});

describe("Test case 3: Win conditions", () => {
  it("shoud detect player X win", () => {
    cy.getGameTileList().then(($tileList) => {
      let index = 0;
      cy.wrap($tileList).eq(index).click();
      cy.wrap($tileList)
        .eq(index - 1)
        .click();
      cy.wrap($tileList)
        .eq(index + 1)
        .click();
      cy.wrap($tileList)
        .eq(index - 2)
        .click();
      cy.wrap($tileList)
        .eq(index + 2)
        .click();
    });
    cy.getBoardStatus().should("have.text", "Winner: X");
  });

  it("shoud detect player O win", () => {
    cy.getGameTileList().then(($tileList) => {
      let index = 0;
      cy.wrap($tileList).eq(index).click();
      cy.wrap($tileList)
        .eq(index - 1)
        .click();
      cy.wrap($tileList)
        .eq(index + 1)
        .click();
      cy.wrap($tileList)
        .eq(index - 2)
        .click();
      cy.wrap($tileList)
        .eq(index + 2)
        .click();
    });
    cy.getBoardStatus().should("have.text", "Winner: X");
  });

  it("should detect top horizontal win ", () => {
    cy.getGameTileList().then(($tileList) => {
      let index = 0;
      cy.wrap($tileList).eq(index).click();
      cy.wrap($tileList)
        .eq(index - 1)
        .click();
      cy.wrap($tileList)
        .eq(index + 1)
        .click();
      cy.wrap($tileList)
        .eq(index - 2)
        .click();
      cy.wrap($tileList)
        .eq(index + 2)
        .click();
    });
    cy.getBoardStatus().should("have.text", "Winner: X");
  });

  it("should detect middle horizontal win ", () => {
    cy.getGameTileList().then(($tileList) => {
      let index = 3;
      cy.wrap($tileList).eq(index).click();
      cy.wrap($tileList)
        .eq(index - 1)
        .click();
      cy.wrap($tileList)
        .eq(index + 1)
        .click();
      cy.wrap($tileList)
        .eq(index - 2)
        .click();
      cy.wrap($tileList)
        .eq(index + 2)
        .click();
    });
    cy.getBoardStatus().should("have.text", "Winner: X");
  });

  it("should detect bottom horizontal win ", () => {
    cy.getGameTileList().then(($tileList) => {
      let index = 6;
      cy.wrap($tileList).eq(index).click();
      cy.wrap($tileList)
        .eq(index - 1)
        .click();
      cy.wrap($tileList)
        .eq(index + 1)
        .click();
      cy.wrap($tileList)
        .eq(index - 2)
        .click();
      cy.wrap($tileList)
        .eq(index + 2)
        .click();
    });
    cy.getBoardStatus().should("have.text", "Winner: X");
  });

  it("should detect left vertical win", () => {
    cy.getGameTileList().then(($tileList) => {
      let index = 0;
      cy.wrap($tileList).eq(index).click();
      cy.wrap($tileList)
        .eq(index + 1)
        .click();
      cy.wrap($tileList)
        .eq(index + 3)
        .click();
      cy.wrap($tileList)
        .eq(index + 2)
        .click();
      cy.wrap($tileList)
        .eq(index + 6)
        .click();
    });
    cy.getBoardStatus().should("have.text", "Winner: X");
  });

  it("should detect middle vertical win", () => {
    cy.getGameTileList().then(($tileList) => {
      let index = 1;
      cy.wrap($tileList).eq(index).click();
      cy.wrap($tileList)
        .eq(index + 1)
        .click();
      cy.wrap($tileList)
        .eq(index + 3)
        .click();
      cy.wrap($tileList)
        .eq(index + 2)
        .click();
      cy.wrap($tileList)
        .eq(index + 6)
        .click();
    });
    cy.getBoardStatus().should("have.text", "Winner: X");
  });

  it("should detect right vertical win", () => {
    cy.getGameTileList().then(($tileList) => {
      let index = 2;
      cy.wrap($tileList).eq(index).click();
      cy.wrap($tileList)
        .eq(index + 1)
        .click();
      cy.wrap($tileList)
        .eq(index + 3)
        .click();
      cy.wrap($tileList)
        .eq(index + 2)
        .click();
      cy.wrap($tileList)
        .eq(index + 6)
        .click();
    });
    cy.getBoardStatus().should("have.text", "Winner: X");
  });

  it("should detect diagnal win - left to right", () => {
    cy.getGameTileList().then(($tileList) => {
      let index = 0;
      cy.wrap($tileList).eq(index).click();
      cy.wrap($tileList)
        .eq(index + 1)
        .click();
      cy.wrap($tileList)
        .eq(index + 4)
        .click();
      cy.wrap($tileList)
        .eq(index + 2)
        .click();
      cy.wrap($tileList)
        .eq(index + 8)
        .click();
    });
    cy.getBoardStatus().should("have.text", "Winner: X");
  });

  it("should detect diagnal win - right to left", () => {
    cy.getGameTileList().then(($tileList) => {
      let index = 2;
      cy.wrap($tileList).eq(index).click();
      cy.wrap($tileList)
        .eq(index + 3)
        .click();
      cy.wrap($tileList)
        .eq(index + 2)
        .click();
      cy.wrap($tileList)
        .eq(index + 5)
        .click();
      cy.wrap($tileList)
        .eq(index + 4)
        .click();
    });
    cy.getBoardStatus().should("have.text", "Winner: X");
  });
});
