const buttonClick = require("../button");

// what if we want to check more than one part of the HTML?
// load the entire HTML page and attack it to the mock DOM
// add in the Node fs module.  
// This is a file system handling module built into Node that allows 
// us to open read and write files.
beforeEach(() => {
    let fs = require("fs");
    // now we've created a reference let's use fs to read the contents 
    // of our HTML file and store it in a variable which we're calling fileContents
    // open the index.html file using the utf-8 character set and 
    // store the contents in our variable
    // haven't specified a  path to open our HTML file because 
    // by default, the tests run from Node's root directory, 
    // which is where our index.html file is. 
    let fileContents = fs.readFileSync("index.html", "utf-8");
    // attach this to the  DOM. And here's the recommended way of doing it.
    // First, we open the document, we write our file contents and then we close it.
    // can just remember this as  boilerplate script, you don't  
    // necessarily need to change this each time.
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM test", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked")
    });
    // test to see if h1 tag exists
    // This test gets all of the h1 tags and stores them in a special kind of array
    // If the h1 exists, then the length of the array will be 1.
    // If two tags existed the length would be two, and so on.
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});
