  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

// verbose method:

let nums = [0, 1, 2, 3, 4];

let verbReduce = nums.reduce((acc, curr) => {
  console.log(acc, curr);
  console.log(acc+curr);
  return acc+curr;
},0);

// shorthand

let sum = nums.reduce((acc, curr) => acc + curr, 10)
console.log(sum);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property

let years = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(years);


// Grouping by a property, and totaling it too

let sortedYears = teamMembers.reduce((acc, curr) => {
  let key = curr.profession; // set key = current element . profession
  if (!acc[key]) { // if accumulator doesnt include the current element . profession, add it
    acc[key] = curr.yrsExperience; // add years experience
  } else {
    acc[key] += curr.yrsExperience; // else if the accumulator already includes the key profession, add the years experience to the total already there
  }
return acc;
}, {}); // initialise the function with a blank object

console.log(sortedYears);