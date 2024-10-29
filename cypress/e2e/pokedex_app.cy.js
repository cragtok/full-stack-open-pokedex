describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

    it('pokemon page can be navigated to from main page', function ( ) {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('speed')
    cy.contains('special defense')
    cy.contains('special attack')
    cy.contains('defense')
    cy.contains('attack')
    cy.contains('chlorophyll')
  })
})
