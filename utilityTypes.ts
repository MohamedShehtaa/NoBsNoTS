// utility types => are generic mechanism  in ts you can use to create another type from existing type

// 1- partial type => take a type and make everything in it optional

interface myUser {
    name: string;
    id: string;
    email?:string;
    phone?:string;
}

type myUserOptionals = Partial<myUser>

function merge (user:myUser,override:myUserOptionals):myUser {
   return {
    ...user,
    ...override
   }
}

console.log(merge({id:'g',name:'m',email:"mm@twst"},{name:'yyy'}))
