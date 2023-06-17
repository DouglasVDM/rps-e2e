it("should say left wins for rock vs scissors", () => {
  // Arrange If
  cy.visit("/");

  // Act When
  cy.findByLabelText("Left").select("rock");
  cy.findByLabelText("Right").select("scissors");
  cy.findAllByText("Throw").click();

  // Assert Then
  cy.findByTestId("outcome").should("contain.text", "Left wins");
});
