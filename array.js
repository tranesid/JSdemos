// here comes some demos! :)
// https://codesandbox.io/s/js-array-y73m66?file=/src/index.js


// array of mismatched data Generally don't do this...
let foo = [10,'20',{name:'yo'},()=>{console.log('df')}]

console.log(typeof foo[0]) // number
console.log(typeof foo[1]) // string
console.log(typeof foo[2]) // object
console.log(typeof foo[3]) // function

foo[3]() // 'df'



// loop through arrays
// for loop (old way of doing things)
// i want to count to 0-9
console.log('counting from 0-9')
for(let i = 0; i<=9; i++){
    // execute this block
    console.log(i)
};

console.log('counting from 9-0')
for(let i = 9; i>=0; i--){
    // execute this block
    console.log(i)
};

console.log('counting from 0-9 by 2')
for(let i = 0; i<=9; i+=2){
    // execute this block
    console.log(i)
};

// uniform data YAY!
// normal we like to loop through arrays

console.log('show me things in the array')
let nums =[10,20,30,40, -10, 100, 45]

for(let i = 0; i < nums.length; i++){
    // execute this block
    console.log(nums[i])
};

// a better way to loop over an array
// foreach loop


// part 1 is a functoin that has on param and does something
// with that one parameter
const logThing = (thing)=>{
  console.log(thing)
};

logThing('yo')
logThing(1)

// forEach goes through each thing in the array and calls the function you give
// part2 call logThing on each item in array

nums.forEach(logThing);

nums.forEach(num)=>{
  console.log(num)
};

// write as unnamed functoin
// works the same

const timesByTwo = (num)=>{
  console.log(num * 2)
};

//may call by either
timesByTwo(6)
//or 
timesByTwo(num)


