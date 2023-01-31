// Deliverables

// 1. Remove the DOM node 'main#main'

console.log(document.querySelector('main'));
// => <main id="main"></main>
document.querySelector('main').remove();

// another approach:
// main.remove();


// 2. Create a 'newHeader' variable that points to an <h1> node, 'h1#victory'
const newHeader = document.createElement("h1");

// - Make sure the 'newHeader' variable points to a node that has an id of 'victory'
newHeader.id = "#victory"

// - Make sure the 'newHeader' variable points to a node 'h1#victory', has \"YOUR-NAME is the champion\" inside"
newHeader.textContent = "Anthony is the champion"


/*
// Lab Solution
document.querySelector('main#main').remove();
// Removes: main#main

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";
*/