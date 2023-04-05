let username = 'jack '
let hasLoggedIn = true

username += 'harrington'

console.log(username)

let myRegex = /foo/
const names = username.split(' ')

const myValues: Array<number> = [1,2,3]

interface IPerson {
    first: string;
    second: string ;
    cool?: boolean ;


}

const person: IPerson = {
    first:'mohamed',
    second:'shehta',
    cool:true,
}
console.log( person.first)

// Records => use objects like maps
/* const ids = {
     10:'a',
     20:'b',
 }

 ids[30] = 'c'   ==> error  */

const ids: Record<number,string> = {
    10:'a',
    20:'b',
}
ids[30] = 'c'  

// let ts infer as possible 

/**
 * if (ids[30] === 20) ==> compiler error because you equal string to number
 */ 

