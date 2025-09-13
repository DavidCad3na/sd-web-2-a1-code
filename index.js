"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6
const brokenUsers = [
  { id: 1, name: "David Cadena", age: 19 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, nam3: "Princess Leia", age: 23 },
  { di: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, ame: "Yoda", age: 900 },
  { id: 6, nam3: "Han Solo", age: 32 },
  { id: 7, thisisnotname: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, ngme: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
for (const user of users) {
  console.log(user.name);
  const NameList = document.createElement('li');
  NameList.textContent = user.name;
  document.getElementById('names-list').appendChild(NameList);
}

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
for (const user of users) {
  const NameList = document.createElement('li');
  if (user.age < 40){
    console.log(user.name);
    NameList.textContent = user.name;
    document.getElementById('young-characters-list').appendChild(NameList);
  }
}
// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
// Without error handling
function renderNameList(array, elementId){
  for (const item of array) {
    const NameList = document.createElement('li');
    NameList.textContent = item.name;
    document.getElementById(elementId).appendChild(NameList);
  }
}

renderNameList(users, "function-list")
// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
function renderNamelistByAge(array, elementId, ageLimit){
  for (const item of array) {
    if (!item.name){ 
      const errorMessage = "Error: Missing Name Property in array list for item with id " + item.id;
      console.error(errorMessage);
      const ErrorNameList = document.createElement('p');
      ErrorNameList.textContent = item.id + ": " + errorMessage;
      document.getElementById("broken-array-errors").appendChild(ErrorNameList);
    }
    else{
      if (item.age < ageLimit){
        const NameList = document.createElement('li');
        NameList.textContent = item.name;
        document.getElementById(elementId).appendChild(NameList);
      }
    }
  }
}

renderNamelistByAge(users, "age-filter-list", 30)
// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
//With Error Handling
function renderNameListHandling(array, elementId, errorElementId){
  for (const item of array) {
    //posts error if no name property
    if (!item.name){ 
      const errorMessage = "Error: Missing Name Property in array list for item with id " + item.id;
      console.error(errorMessage);
      const ErrorNameList = document.createElement('p');
      ErrorNameList.textContent = item.id + ": " + errorMessage;
      document.getElementById(errorElementId).appendChild(ErrorNameList);
    }
    //renders if no error
    else {
      const NameList = document.createElement('li');
      NameList.textContent = item.name;
      document.getElementById(elementId).appendChild(NameList);
    }
  }
}

renderNameListHandling(users, "error-handling-list", "error-messages")
// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"
// Broken array is on the top of the file 
renderNameListHandling(brokenUsers, "broken-array-list", "broken-array-errors")