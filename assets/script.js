// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Joanna Hall" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')



// Code to update name display
credit.textContent = `Created by ${yourName}`

//isolate the vote count for all cookies
let Gingerbread = document.querySelector("#qty-gb");
let ChocolateChip = document.querySelector("#qty-cc");
let SugarSprinkle = document.querySelector("#qty-sugar");
let Total = document.querySelector("#qty-total")
   
// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() { 
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
   gb = gb+1;
   Gingerbread.textContent = gb;
   Total.textContent = gb + cc + sugar;
})
// Event listener for clicks on the "+" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function() { 
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
       gb = gb-1;
       Gingerbread.textContent = gb;
       Total.textContent = gb + cc + sugar;
    })
// Event listener for clicks on the "+" button for Chocolate Chip cookies
ccPlusBtn.addEventListener('click', function() { 
    // TODO: Write the code to be run when the "+" button for "Chocolate Chip" is clicked
       cc = cc+1;
       ChocolateChip.textContent = cc;
       Total.textContent = gb + cc + sugar;
    })
    // Event listener for clicks on the "+" button for Chocolate Chip cookies
    ccMinusBtn.addEventListener('click', function() { 
        // TODO: Write the code to be run when the "+" button for "Chocolate Chip" is clicked
           cc = cc-1;
           ChocolateChip.textContent = cc;
           Total.textContent = gb + cc + sugar;
        })
// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
sugarPlusBtn.addEventListener('click', function() { 
    // TODO: Write the code to be run when the "+" button for "Sugar Sprinkle" is clicked
       sugar = sugar+1;
       SugarSprinkle.textContent = sugar;
       Total.textContent = gb + cc + sugar;
    })
    // Event listener for clicks on the "+" button for Sugar Sprinkle cookies
    sugarMinusBtn.addEventListener('click', function() { 
        // TODO: Write the code to be run when the "+" button for "Sugar Sprinkle" is clicked
           sugar = sugar-1;
           SugarSprinkle.textContent = sugar;
           Total.textContent = gb + cc + sugar; 
    });
    
    
// TODO: Hook up event listeners for the rest of the buttons
console.log('Gingerbread + button was clicked!')
