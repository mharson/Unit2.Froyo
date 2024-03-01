//Prompt user to enter a list of comma-separated Froyo flavors
const userInputFlavor = prompt(
  "Input flavors separated by comma",
  " vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

//Split the string into an array of strings.
const flavorArray = userInputFlavor.split(",");

console.log(flavorArray);

//create a function that shows the frequency of the items in the array
function countFreq(IceCreamArray) {
  const froyoObject = {};
  for (let i = 0; i < IceCreamArray.length; i++) {
    if (froyoObject[IceCreamArray[i]] === undefined) {
      froyoObject[IceCreamArray[i]] = 1;
    } else {
      froyoObject[IceCreamArray[i]] += 1;
    }
  }
  console.log(froyoObject);
}

console.table(countFreq(flavorArray));

// countFreq("vanilla, vanilla, vanilla, strawberry, coffee, coffee");
