type ThreeDCoordinates = [x:number , y:number , z:number]

function add3DCoordinates(c1: ThreeDCoordinates,c2:ThreeDCoordinates):ThreeDCoordinates{
    return [
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2],
    ]
}
 console.log(add3DCoordinates([0,1,2],[10,20,30]))


 // we use tuple in continuously in react with useState hook so let's do simple use state
  function simpleUseStateWithString(initial:string) :[()=>string, (v:string ) => void] {
    let str = initial  // here use closure  concept 

    return [
        () => str ,
        (v) => {
            str = v 
        }
    ]
  }

  const [strr, setStrr] = simpleUseStateWithString('llllllll')

  console.log(strr())
setStrr('mmmmmmmmm')
  console.log(strr())
