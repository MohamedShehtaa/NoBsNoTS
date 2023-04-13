// ex1

// this mean keyType is a key in the dataType
function pluck<DataType, KeyType extends keyof DataType>(items:DataType[], key:KeyType):DataType[KeyType][]{
    return items.map(item => item[key])
}


 interface Person {
    name: string;
    age: number
 }

 const students:Person[] = [
    { name: 'mohamed', age:  27 },
    { name: 'ahmed',  age: 17  },
]

console.log(pluck(students,'name'))

// ex eventMap

interface BaseEvent {
    time: number;
    user: string;
}

interface EventMap {
    addToCard: BaseEvent & { quantity: number, productId: string} ;
    checkout: BaseEvent;
}

function sendEvent <Name extends keyof EventMap>(name : Name, data: EventMap[Name]) : void {
    console.log([name, data])
} 

sendEvent('addToCard',{productId:'22',quantity:5,time:4,user:'m'})
