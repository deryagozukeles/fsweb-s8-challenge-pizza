describe("OrderPizza Component Testleri", () => {

  
  it("İsim inputuna metin girilebiliyor", () => {
    cy.visit("http://localhost:5173/siparis"); 
    cy.get('input[name="isim"]').type("Derya").should("have.value", "Derya");
  });

  
  it("Birden fazla malzeme seçilebiliyor", () => {
    cy.visit("http://localhost:5173/siparis"); 
    cy.get('input[name="malzemeler"][value="Pepperoni"]').check().should("be.checked");
    cy.get('input[name="malzemeler"][value="Sosis"]').check().should("be.checked");
    cy.get('input[name="malzemeler"][value="Sucuk"]').check().should("be.checked");

    cy.get('input[name="malzemeler"]:checked').should("have.length", 3);
  });

  
  it("Form geçerli ise gönderilebiliyor ve success sayfasına yönlendiriliyor", () => {
    cy.visit("http://localhost:5173/siparis"); 

    cy.get('input[name="isim"]').type("Derya");
    cy.get('input[name="boyut"][value="orta"]').check();
    cy.get('select[name="hamur"]').select("ince");
    cy.get('input[name="malzemeler"][value="Pepperoni"]').check();
    cy.get('input[name="malzemeler"][value="Sosis"]').check();
    cy.get('input[name="malzemeler"][value="Sucuk"]').check();
    cy.get('input[name="malzemeler"][value="Mısır"]').check();

    cy.get(".siparis-button").click();
    cy.url().should("include", "/success");
  });

});
