describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/')
  })

  it('should assert that <title> is correct', () => {
    cy.title().should('include', 'Movies Database')
  })

  it('should assert that logo contains "netflixroulette"', () => {
    cy.get('.logo').contains('netflixroulette')
  })

  it('should assert that search button contains "Search"', () => {
    cy.get('.searchBtn').contains('Search')
  })

  it('should get an input, type into it and verify that the value has been updated', () => {
    cy.get('.searchInput')
      .type('some@email.com')
      .should('have.value', 'some@email.com')
  })
})
