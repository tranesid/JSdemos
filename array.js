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
let nums =[10, 20, 30, 40, -10, 100, 45]

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

let people = ['George', 'Paul', 'Sally']

//mutations (side effect)
//add something to an array

//when we get to react we won't add this way
// no mutation.. in React

//cloning below..
// this method isn't mutation

// let newClone = [...people,'frank']
// // or
// let newClone = [...people]
// peopleClone.push('Frank')

let people = ['George', 'Paul', 'Sally']

// mutations (side effect)
// add something to an array
// people.push('Jill')

// [x,x,x,x,x] =func=>[y,y,y,y,y]



// when we get to react we are not going to want to add this
// no mutation..

// does not change people no side effect/mutation
let newPeople = [...people,'frank']


console.log(people)
console.log(newPeople)

const wrapInHeader = (str)=>{
    return `<h1>${str}</h1>`
}


const header1 = wrapInHeader('YO')
console.log(header1)

// map return a new array (doesn't mutate the array it was called on)
const peopleHeaders = people.map(wrapInHeader)
console.log(peopleHeaders)
console.log(people)


const getCharArray = (str)=>{
    return str.split('')
}

let chars = getCharArray('helllo')
console.log(chars)

let nameArrays = people.map(getCharArray)
console.log(nameArrays)
// [[][][]]
nameArrays.forEach(nameArray=>{
    console.log(nameArray.join('-'))
    nameArray.forEach((letter)=>{
        console.log(letter)
    })
})

let x = {
    d:[1,2,3,{t:{y:'YAY'}},4],
    s:{q:[1,2,3,5,6,7,8,9,10]}
}

console.log(x.d[3].t.y)
let greaterThan5 = x.s.q.filter((num)=> {
    return num >=5
})
console.log(greaterThan5)