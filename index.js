// Write your code here!

document.querySelector('main').remove();
// Removes: <main id="main"></main>


const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.textContent = "Anthony is the champion" 


/*
// Deliverables
1. Remove the DOM node 'main#main'

2. Create a 'newHeader' variable that points to an <h1> node, 'h1#victory'
    - Make sure the 'newHeader' variable points to a node that has an id of 'victory'
    - Make sure the 'newHeader' variable points to a node 'h1#victory', has \"YOUR-NAME is the champion\" inside"


// Lab Solution
document.querySelector('main#main').remove();
// Removes: main#main

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";
*/