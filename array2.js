// I am going to look through all of these item in array and keep track of the highest

// let nums = [10, 20, 30, 40, -10, 100, 45];

let highestValue = nums[0];
//loop through
nums.forEach((num) => {
  if (num > highestValue) {
    highestValue = num;
  }
});
console.log(highestValue);


const findHighest = (numbers) => {
  let highestValue = numbers[0];
  //loop through
  numbers.forEach((num) => {
    if (num > highestValue) {
      highestValue = num;
    }
  });
  console.log(highestValue);
};

console.log('------')
findHighest([4,3,2,1]) //4
findHighest(nums) //100

///////////// FIND LOWEST
//    MY CODE
// let nums = [10, 20, 30, 40, -10, 100, 45];

// const findLowest = (numbers)=>{
//   console.log(numbers); // will call array
//   let lowest = numbers[0];
//   // setting to first value in array
//   numbers.forEach((num)=>{
//     if(num < lowest){
//       lowest = number;
//     };
//   });
//   console.log(lowest);
// };

// findLowest(nums)


//JAMES' CODE

let nums = [10, 20, 30, 40, -10, 100, 45];

const findLowest = (numbers) =>{
    console.log(numbers) // [10, 20, 30, 40, -10, 100, 45]
    let lowest = numbers[0] // 10
    numbers.forEach((number)=>{
        //iteration 6) num 100
        if(number < lowest){
            lowest = number
        }
    })
    return lowest
}

let lowestValue = findLowest([10, 20, 30, 40, -10, 100, 45])
console.log(lowestValue) 