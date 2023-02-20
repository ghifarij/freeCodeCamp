// Spread Operator and Rest Operator

// add the elements of an existing array into a new array

var certsToAdd = ['Algorithms and Data Structures', 'Front End Libraries'];
var certifications = [
  'Responsive Web Design',
  ...certsToAdd,
  'Data Visualization',
  'APIs Microservices',
  'Quality Assurance and Information Security',
];
console.log(certifications);

// pass elements of an array as arguments to a function
const addThreeNumbers = (x, y, z) => {
  console.log(x + y + z);
};

const args = [1, 2, 3];
addThreeNumbers(...args);

// copy arrays
const arr1 = ['a', 'b', 'c'];
const arr2 = [...arr1];
arr2.push('d');
console.log(arr2);

// concatenate arrays
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
let newArr = [...arr3, ...arr4, 'Succeed'];
console.log(newArr);

// REST: condense multiple elements into an array
let multiply = (multiplier, ...theArgs) => {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
};

let numbers = multiply(10, 1, 2, 3, 4);
console.log(numbers);
