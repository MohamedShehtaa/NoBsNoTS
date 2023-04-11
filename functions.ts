function addNumbers(a: number, b: number) : number {
    return a + b
}

export const concatString = (s1: string, s2: string='') => `${s1} ${s2}`

export const fetchData =(url:string): Promise<string> => Promise.resolve(`data from ${url}`) 
// func take a func
export const arrayMutate = (numbers: number[] , cb: (v:number) => number) : number[] => numbers.map(cb)
// func return a func
type MutationFunc = (v:number) => number
export const adder = (n: number):MutationFunc => (v:number) => n + v

// export in ts 
export default addNumbers
