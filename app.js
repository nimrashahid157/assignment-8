
// Practice exercise 3.1 

// 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
// "Apples."
let shoppingList = ["Milk", "Bread", "Apples"];


// 2. Check your list length in the console.
console.log("Original Shopping List Length: " + shoppingList.length);


// 3. Update "Bread" to "Bananas."
shoppingList[1] = "Bananas";


// 4. Output your entire list to the console.
console.log("Updated Shopping List:");
for (let i = 0; i < shoppingList.length; i++) {
    console.log(i + 1 + ". " + shoppingList[i]);}
console.log("Updated Shopping List Length: " + shoppingList.length);




// Practice exercise 3.2

// 1. Create an empty array to use as a shopping list.
let shoppingList = [];


// 2. Add Milk, Bread, and Apples to your list.
shoppingList.push("Milk", "Bread", "Apples");


// 3. Update "Bread" with Bananas and Eggs.
let breadIndex = shoppingList.indexOf("Bread");
shoppingList.splice(breadIndex, 1, "Bananas", "Eggs");


// 4. Remove the last item from the array and output it into the console.
let lastItem = shoppingList.pop();
console.log("Removed Item: " + lastItem);


// 5. Sort the list alphabetically.
shoppingList.sort();


// 6. Find and output the index value of Milk.
let milkIndex = shoppingList.indexOf("Milk");
console.log("Index of Milk: " + milkIndex);


// 7. After Bananas, add Carrots and Lettuce.
let bananasIndex = shoppingList.indexOf("Bananas");
shoppingList.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");


// 8. Create a new list containing Juice and Pop.
let newList = ["Juice", "Pop"];


// 9. Combine both lists, adding the new list twice to the end of the first list.
shoppingList.push(...newList, ...newList);


// 10. Get the last index value of Pop and output it to the console.
let popIndex = shoppingList.lastIndexOf("Pop");
console.log("Last Index of Pop: " + popIndex);


// 11. Your final list should look like this:
// ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice",
// "Pop", "Juice", "Pop"]
console.log("Final Shopping List:");
console.log(shoppingList);





// Practice exercise 3.3


// 1. Create an array containing three values: 1, 2, and 3.
let originalArray = [1, 2, 3];


// 2. Nest the original array into a new array three times.
let nestedArrays = [originalArray, originalArray, originalArray];


// 3. Output the value 2 from one of the arrays into the console.
console.log("Value 2 from one of the arrays: " + nestedArrays[1][1]);




// Practice exercise 3.4


// 1. Create a new myCar object for a car. Add some properties, including, but not
// limited to, make and model, and values for a typical car or your car. Feel free
// to use booleans, strings, or numbers.
let myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Blue",
    mileage: 15000,
    isAutomatic: true,
};


// 2. Create a variable that can hold the string value color. This variable
// containing a string value color can now be used to reference the property
// name within myCar. Then, use the variable within the square bracket notation
// to assign a new value to the color property in myCar.
let propertyName = "color";
myCar[propertyName] = "Red";


// 3. Use that same variable and assign a new property string value to it, such as
// forSale. Use the bracket notation once again to assign a new value to the
// forSale property to indicate whether the car is available for purchase.
propertyName = "forSale";
myCar[propertyName] = true;


// 4. Output make and model into the console.
console.log("Make: " + myCar.make);
console.log("Model: " + myCar.model);


// 5. Output the value of forSale into the console.
console.log("For Sale: " + myCar.forSale);

   

// Practice exercise 3.5
// 1. Create an object named people that contains an empty array that is called
// friends.
let people = {
    friends: []
};


// 2. Create three variables, each containing an object, that contain one of your
// friend's first names, last names, and an ID value.
let friend1 = {
    firstName: "John",
    lastName: "Doe",
    id: 1
};

let friend2 = {
    firstName: "Alice",
    lastName: "Smith",
    id: 2
};

let friend3 = {
    firstName: "Eva",
    lastName: "Johnson",
    id: 3
};

// 3. Add the three friends to the friend array.
people.friends.push(friend1, friend2, friend3);

// 4. Output the friends array to the console.
console.log("Friends List:");
console.log(people.friends);






    //   CHAPTER 4

// Practice exercise 4.1

// 1. Create a variable with a Boolean value.
let pupil = {
    classfriends: []
};


// 2. Output the value of the variable to the console.
let classfriend1 = {
    firstName: "John",
    lastName: "Doe",
    id: 1
};

let classfriend2 = {
    firstName: "Alice",
    lastName: "Smith",
    id: 2
};

let classfriend3 = {
    firstName: "Eva",
    lastName: "Johnson",
    id: 3
};



// 3. Check whether the variable is true and if so, output a message to the console,
// using the following syntax:
// if(myVariable) {//action}
pupil.classfriends.push(classfriend1, classfriend2, classfriend3);


// 4. Add another if statement with an ! in front of the variable to check whether
// the condition is not true, and create a message that will be printed to the
// console in that instance. You should have two if statements, one with an
// ! and the other without. You could also use an if and an else statement
// instead—experiment!
console.log("Friends List:");
console.log(pupil.classfriends);


// 5. Change the variable to the opposite to see how the result changes.

 
// Practice exercise 4.2

// 1. Create a prompt to ask the user's age
let userAge = Number(prompt("please enter your AGE:"));


// 2. Convert the response from the prompt to a number
let message;


// 3. Declare a message variable that you will use to hold the console message for
// the user
if (userAge >= 21) {
    message = "You are confirmed for entry to the venue and can purchase alcohol.";
} else if (userAge >= 19) {
    message = "You are confirmed for entry to the venue but cannot purchase alcohol.";
} else {
    message = "Sorry, you are denied entry to the venue.";
}


// 4. If the input age is equal to or greater than 21, set the message variable to
// confirm entry to a venue and the ability to purchase alcohol
// 5. If the input age is equal to or greater than 19, set the message variable to
// confirm entry to the venue but deny the purchase of alcohol
// 6. Provide a default else statement to set the message variable to deny entry if
// none are true
console.log(message);


// 7. Output the response message variable to the console



// Practice exercise 4.3

// 1. Create a Boolean value for an ID variable
let hasValidID = true;


// 2. Using a ternary operator, create a message variable that will check whether
// their ID is valid and either allow a person into a venue or not
let msg = hasValidID ? "You are allowed into the venue." : "Sorry, you are denied entry due to invalid ID.";


// 3. Output the response to the console
console.log(msg);






// Practice exercise 4.4


// create a Magic 8-Ball random answer generator:
// 1. Start by setting a variable that gets a random value assigned to it. The value
// is assigned by generating a random number 0-5, for 6 possible results. You
// can increase this number as you add more results.
let randomNumber = Math.floor(Math.random() * 6);


// 2. Create a prompt that can get a string value input from a user that you can
// repeat back in the final output.
let userQuestion = prompt("Ask the Magic 8-Ball a question:");


// 3. Create 6 responses using the switch statement, each assigned to a different
// value from the random number generator.
let response;
switch (randomNumber) {
    case 0:
        response = "It is certain.";
        break;
    case 1:
        response = "Yes, definitely.";
        break;
    case 2:
        response = "Ask again later.";
        break;
    case 3:
        response = "Cannot predict now.";
        break;
    case 4:
        response = "Don't count on it.";
        break;
    case 5:
        response = "My sources say no.";
        break;
    default:
        response = "Sorry, I cannot answer your question at the moment.";
        break;
    }
// 4. Create a variable to hold the end response, which should be a sentence
// printed for the user. You can assign different string values for each case,
// assigning new values depending on the results from the random value.
let finalResponse = `You asked: "${userQuestion}"\nMagic 8-Ball says: ${response}`;


// 5. Output the user's original question, plus the randomly selected case
// response, to the console after the user enters their question.
console.log(finalResponse);




// Practice exercise 4.5


// 1. Create a variable called prize and use a prompt to ask the user to set the
// value by selecting a number between 0 and 10
let prize = prompt("Set your prize value (between 0 and 10):");


// 2. Convert the prompt response to a number data type
prize = parseInt(prize);


// 3. Create a variable to use for the output msg containing the value "My
// Selection: "
let outputmsg = "My Selection: ";


// 4. Using the switch statement (and creativity), provide a response back
// regarding a prize that is awarded depending on what number is selected
switch (prize) {
    case 0:
        outputmsg += "You won a small toy!";
        break;
    case 1:
    case 2:
        outputmsg += "Congratulations! You won a coupon!";
        break;
    case 3:
    case 4:
    case 5:
        outputmsg += "Wow! You won a gift card!";
        break;
    case 6:
    case 7:
    case 8:
        outputmsg += "Amazing! You won a electronic gadget!";
        break;
    case 9:
        outputmsg += "Incredible! You won a weekend getaway!";
        break;
    case 10:
        outputmsg += "Unbelievable! You won a new car!";
        break;
    default:
        outputmsg += "Sorry, the selected prize value is not valid.";
        break;
}


// 5. Use the switch break to add combined results for prizes
console.log(outputmsg);


// 6. Output the msg back to the user by concatenating your prize variable
// strings and the output msg string






// Chapter projects


// Evaluating a number game

// Ask the user to enter a number and check whether it's greater than, equal to, or less
// than a dynamic number value in your code. Output the result to the user. 
let dynamicNumber = Math.floor(Math.random() * 100) + 1;
let userNumber = prompt("Enter a number:");
userNumber = parseFloat(userNumber);
if (userNumber > dynamicNumber) 
    {console.log("Your number is greater than the dynamic number (" + dynamicNumber + ").");}
  else if (userNumber < dynamicNumber) 
    {console.log("Your number is less than the dynamic number (" + dynamicNumber + ").");}
  else 
    {console.log("Your number is equal to the dynamic number (" + dynamicNumber + ").");}



//     Friend checker game

// Ask the user to enter a name, using the switch statement to return a confirmation
// that the user is a friend if the name selected is known in the case statements. You
// can add a default response that you don't know the person if it's an unknown name.
// Output the result into the console.
// Ask the user to enter a name
let userName = prompt("Enter a name:");
let text;
switch (userName.toLowerCase()) 
   {case "aliya":
        text = "You are a friend!";
        break;
    case "ayat":
        text = "You are a friend!";
        break;
    case "robert":
        text = "You are a friend!";
        break;
    default:
        text = "Sorry, I don't know you.";
        break;}
console.log(text);





// Rock Paper Scissors game


// 1. Create an array that contains the variables Rock, Paper, and Scissors.
let choices = ["Rock", "Paper", "Scissors"];


// 2. Set up a variable that generates a random number 0-2 for the player and then
// do the same for the computer's selection. The number represents the index
// values in the array of the 3 items.
let playerSelection = Math.floor(Math.random() * 3);
let computerSelection = Math.floor(Math.random() * 3);


// 3. Create a variable to hold a response message to the user. This can show the
// random results for the player and then also the result for the computer of the
// matching item from the array.
let responseMessage = "";


// 4. Create a condition to handle the player and computer selections. If both are
// the same, this results in a tie.
if (playerSelection === computerSelection) {
    responseMessage = "It's a tie!";} 
    else {
    

// 5. Use conditions to apply the game logic and return the correct results.
// There are several ways to do this with the condition statements, but you
// could check which player's index value is bigger and assign the victory
// accordingly, with the exception of Rock beating Scissors.
if (
    (playerSelection === 0 && computerSelection === 2) ||
    (playerSelection === 1 && computerSelection === 0) ||
    (playerSelection === 2 && computerSelection === 1)
) {
    responseMessage = "You win!";
} else {
    responseMessage = "Computer wins!";
}
}

// 6. Add a new output message that shows the player selection versus the
// computer selection and the result of the game.
console.log("Player chose: " + choices[playerSelection]);
console.log("Computer chose: " + choices[computerSelection]);
console.log("Result: " + responseMessage);




