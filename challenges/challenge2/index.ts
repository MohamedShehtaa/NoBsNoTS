// do foreach method with reduce
function myForEach <T>(items:T[], cb:(v:T)=> void ) :void {
    items.reduce((_a,c) => {
        cb(c)
        return undefined
    },undefined)
}

myForEach([1,2,3],(v) => console.log(v))

// filter method
function myFilter<T>(items:T[],cb:(V:T) => boolean): T[]{
    return items.reduce((a:T[],v) => ( cb(v) ? [...a,v] : a) ,[])
}

console.log(myFilter([1,2,3,4,5,6,7,8],(v)=> v%2 ===0 ))

