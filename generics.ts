  // to do this for more type we can use the generic feature

  function simpleState<T>(initial:T) :[()=>T, (v:T ) => void] {
    let val = initial 

    return [
        () => val ,
        (v) => {
            val = v 
        }
    ]
  }
 const [getG,setG] = simpleState(1)
 console.log(getG())
 setG(5)
 console.log(getG())

 // problem #1

//  const [getG1,setG1] = simpleState(null)
//  console.log(getG1())
//  setG1(5) // => error should be the same type of initial so generic type if i want to use this case ?
 // this called overriding infer generics type
 
 const [getG1,setG1] = simpleState<number | null>(null)
 console.log(getG1())
 setG1(5)  
 console.log(getG1())


 // problem #2 i need to make interface generic 

 // this outside 
     interface Ranks <RankItems>{
    item: RankItems;
    rank: number;
}

 function ranker<RankItems>(items:RankItems[], rank:(v:RankItems)=>number):RankItems[]{

    // if i need the interface outside the function ?
    // this inside 
//     interface Ranks {
//     item: RankItems;
//     rank: number;
// }
//     const ranks:Ranks[] = items.map((item)=> ({
//         item,
//         rank:rank(item)
//     }))

    const ranks:Ranks<RankItems>[] = items.map((item)=> ({
        item,
        rank:rank(item)
    }))
    ranks.sort((a,b)=> a.rank - b.rank)

    return ranks.map(rank => rank.item)
 }


 interface Person {
    name: string;
    age: number
 }

 const persons:Person[] = [
    {
        name: 'mohamed',
        age:  27
    }
    ,
    {
            name: 'ahmed',
        age: 17 
    }
]

console.log(ranker(persons,({age})=> age))
