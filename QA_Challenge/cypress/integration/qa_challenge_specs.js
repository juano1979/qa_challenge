
describe('QA Challenge', function(){
    let url = 'https://www.todobackend.com/client/index.html?https://mysterious-thicket-31854.herokuapp.com/'
    let urlCheck = 'https://mysterious-thicket-31854.herokuapp.com'
    let someText = 'New todo challenge'
    let changeText = 'Another text'
    let newText = changeText+someText

    //Start the test on the   
    it('Add a todo', function(){
          cy.visit(url)
          cy.url()
            //This sentence checks part of the url to be sure we are in the right place
            .should('include', urlCheck)
           //This sentence types a new todo on the todo input by getting the id    
            cy.get('#new-todo').type(someText+'{enter}')
            //This assertion is to ensure the entered characters are available now on the todo list
            cy.get('#todo-list li label').last().should('have.text', someText)
            
            
      })

      it('Edit a todo', function(){
        //This sentence finds the element by the content and enables the edition by doubleclick then enters a value
        cy.contains('#todo-list li', someText).dblclick().type(changeText+'{enter}')
        //This sentence verifies that the new changed value is available on the todo list
        cy.contains('#todo-list li label', newText).should('have.text', newText)
        
    })
      
      it('Remove a todo', ()=>{
        //This sentence identifies the value on the list and finds the button associated then clicks the button (it should be forced cause the button is hidden)
        cy.contains('#todo-list li', newText).find('button').click({force:true})
        //This assertion verifies that the text entered is no longer available
        cy.get('#todo-list li label').contains(newText).should('not.exist')
      })
  })


