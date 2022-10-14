//Jest ships with a built-in mock DOM called jsdom,  
// which we can use to simulate the DOM and test the html
/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

// beforeEach only takes an arrow function as an argument, don't need to 
// pass in a description like the calc.test.js tests

// this is exactly the same JavaScript that we'd use to replace the HTML of the body  
// in a regular web page. But we're not loading a HTML page though, so instead  
// jsdom creates a mock DOM for us to use. We don't need to put the entire HTML here  
// just a bit that we want to test, in this case the paragraph with the ID of "par".
beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>"
});

// this is the actual test
// checking the content of our mock DOM paragraph to see that
// it has the text that we expect
describe("DOM test", () => {
    test("expects p content to change", () => {
        // don't forget to call the function to make the button click automatically
        // for the test
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked")
    });
});