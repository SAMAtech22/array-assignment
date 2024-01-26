// forEach-method 1

const numbers = [2, 4, 6, 8, 10]

let multiplyBy = 3

numbers.forEach((numbers) => {
   multiplyBy = numbers*multiplyBy
})

console.log(`The answer is ${multiplyBy}`);

numbers.forEach((numbers) => {
  multiplyBy = numbers * 3;
});

console.log(`The answer is ${multiplyBy}`)
// but i am trying to get how we arrived at 11,520 and explanation of why the answers are different sir, thanks.

// forEach-method 2

const fruits = ["apple", "banana", "cherry", "date"]

fruits.forEach((fruit, index) => {
   console.log`This${fruit}is at${index}`
})

// Map-method 1

const nums = [5, 10, 15, 20, 25]

const squaredNums = nums.map((nums) =>{
   return nums**2
})

console.log(squaredNums)

// Map-method 2

const studentsAndGrade = [["ife", 20], ["ayinde", 40], ["tolani", 30], ["bolaji", 24]]

const studentNames = studentsAndGrade.map((studentsAndGrade)=>{
   return studentsAndGrade.includes("i")
})

console.log(studentNames)

// Combining-methods

const digits = [1, 2, 3, 4, 5]

let double = 2

digits.forEach((digits)=>{
   double = digits*double
})

console.log(double)

digits.forEach((digits)=> {
   double = digits*2
})

console.log(double)
// same thing occured here, please do elaborate it sir, thank you.

const squaredValues = digits.map((digits) => {
   return digits*2
})

console.log(squaredValues)