interface Coordinate{
    x: number; 
    y: number;
}

// function overload
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(x:number , y:number): Coordinate;
// second params is optional cuze if the func take one params in case of object so we need to make 2 one is optional
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate ={
        x:0,
        y:0,
    }
    if (typeof arg1 === 'string') {
        (arg1 as string).split(',').forEach((str) =>{
            const [key, value] = str.split(':')
            coord [key as 'x' | 'y'] = parseInt(value,10)
        })
    }
    else if (typeof arg1 === 'object') {
        coord = {
            ...(arg1 as Coordinate)
        }
    }
    else {
        coord = {
           x: arg1 as number,
           y: arg2 as number
        }
    }

    return coord
}

console.log(parseCoordinate({x:1, y:2}))
console.log(parseCoordinate(3,4))
console.log(parseCoordinate('x:2,y:5'))
