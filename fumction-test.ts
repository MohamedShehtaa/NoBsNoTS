import addNumbers, { adder, arrayMutate, concatString, fetchData } from "./functions"

console.log(addNumbers(1,2))
console.log(concatString('mohamed' , 'shehta'))
console.log(fetchData('http://localhost/3000'))
console.log(arrayMutate([1,2,3], (v) => v*10))
const add = adder(5)
console.log(add(7))

// another way to use fun returned fun
console.log(adder(2)(5))
