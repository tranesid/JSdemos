// OBJECTS (associative array)
// one things, many values
// ex. person (age, name, height)

// 2 ways to use
// 1. describe something like person or car
// 2. dictionary: key(word) value: definition

// objects ( associative array: key: value pair store)
// 2 ways use them
// 1. to describe one thing like a person or a car
// 2. dictionary/ translation  key(word) value: definitio

let spanish= { hello:'hola', one:'uno'}

let paul = {name:'Paul', age:22}
let george = {name:'George', age:42}

// to access an item in object 2 ways
// . notation
// [] notation
console.log(paul['name'])  //Paul
console.log(paul.name) // Paul

// change a value
paul.age = 45
console.log(paul.age) //45

// add a key:value
paul.newValue = 'hello'
console.log(paul.newValue) //hello

// delete a key value
delete(paul.newValue)
console.log(paul)
console.log(paul.newValue)

// get the keys 
console.log(Object.keys(paul)) //[ 'name', 'age' ]

// get the values 
console.log(Object.values(paul)) //[ 'Paul', 45 ]

let nums = [10,20,30]
// find average sum of all / length
// i need to loop through and add up all numbers
// i need to keep track of the sum

// trick set up sum
let sum = 0;
// add all numbers to sum
nums.forEach((num)=>{
    sum += num
})

let average = sum /nums.length
console.log(average)

// teaser reduce
let total = nums.reduce((accum, num)=>{
    return accum + num
}, 0)

let average1 = total /nums.length
console.log(average1)


let paul = {name:'Paul', age:22}
let george = {name:'George', age:42}
let jill = {name:'Jill', age:12}

// console.log(paul.age)


let people = [paul, george, jill]

// find the average age
let sum = 0;
people.forEach((person)=>{
   sum += person.age
})

let average = sum/people.length
console.log(average)

/////////

const getInfo = (person)=>{
  return `Hello I am ${person.name} and I am ${person.age} years old`
}

// get an array of strings that say 
// 'hi i am 'name' and i am 'age' years old'

// objects ( associative array: key: value pair store)
// 2 ways use them
// 1. to describe one thing like a person or a car
// 2. dictionary/ translation  key(word) value: definitio



let paul = {name:'Paul', age:22}
let george = {name:'George', age:42}
let jill = {name:'Jill', age:12}

// console.log(paul.age)


let people = [paul, george, jill]

// find the average age
let sum = 0;
people.forEach((person)=>{
   sum += person.age
})

let average = sum/people.length
console.log(average)

// get a array of strings that say
// 'hi I am 'name' and I am 'age' years old

const getInfo = (person)=>{
    return `<h1>Hello I am ${person.name} and I am ${person.age} years old</h1>`
}

let peopleStrings = []
people.forEach((person)=>{
    peopleStrings.push(`<p>Hello I am ${person.name} and I am ${person.age} years old</p>`)
})
console.log(peopleStrings)

// foreach goes through each thing and performs the function you pass it, it return undefined

// map goes through each thing and performs the function you pass it, what this function returns
// will be added to a new array and a end map returns that array
// map is used when you want convert an array of one thing to another [x,x,x] =>[y,y,y]
let peoplesHTML = people.map(getInfo)
console.log(peoplesHTML)


const isOver21 = (person) =>{
    return person.age >=21
}

// filter goes each of the things, if the function returns true we keep the thing
// [x,x,x] =>[x,x]
let peopleOver21 = people.filter(isOver21)
console.log(peopleOver21)
// let paulInfo = getInfo(paul)
// console.log(paulInfo)

// console.log(getInfo({name:'TONY'}))

// ['Hello I am Paul and I am 22 years old','Hello I am George and I am 42 years old']




