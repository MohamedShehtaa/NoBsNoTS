// do foreach method with reduce
function myForEach <T>(items:T[], cb:(v:T)=> void ) :void {
    items.reduce((_a,c) => {
        cb(c)
        return undefined
    },undefined)
}

myForEach([1,2,3],(v) => console.log(v))

