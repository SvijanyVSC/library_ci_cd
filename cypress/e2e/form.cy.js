describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
  });

   it("devrait afficher la page d'accueil correctement", () => {
    cy.visit("http://localhost:8080");
    cy.get("h1").should("be.visible");
  });

  //   it("devrait afficher la liste des livres", () => {
  //   cy.visit("http://localhost:8080");
  //   cy.get(".book-card").should("have.length.greaterThan", 0);
  // });

    it("devrait afficher le formulaire de connexion", () => {
    cy.visit("http://localhost:8080/login");
    cy.get("input[name='email']").should("be.visible");
    cy.get("input[name='password']").should("be.visible");
  });

    it("devrait refuser une connexion avec de mauvais identifiants", () => {
    cy.visit("http://localhost:8080/login");
    cy.get("input[name='email']").type("faux@email.com");
    cy.get("input[name='password']").type("mauvaismdp");
    cy.get("button[type='submit']").click();
    cy.contains("incorrect").should("be.visible");
  });

    it("devrait connecter un utilisateur valide", () => {
    cy.visit("http://localhost:8080");
    cy.get("input[name='email']").type("admin@library.fr");
    cy.get("input[name='password']").type("password");
    cy.get("button[type='submit']").click();
    cy.url().should("not.include", "/login");
  });

    it("devrait afficher le formulaire d'inscription", () => {
    cy.visit("http://localhost:8080");
    cy.get("input[name='firstname']").should("be.visible");
    cy.get("input[name='email']").should("be.visible");
  });

})