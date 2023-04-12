interface User  {
    id: number
    info?: {
        email?: string
    }
}

function getEmail(user:User) : string{  // why here cuze the info is optional and the email is optional also
    if (user.info) return user.info.email as string  // => error possible to return undefined so the solution add ! or add casting
    // if (user.info) return user.info.email! 
    // if (user.info) return user.info.email as string 
    return ''
}

function getEmailInRightWay(user:User) : string{
   return user?.info?.email ?? ''
}

// in case of optional callback as parameter 

const addCallBack = (x:number, y: string, cb?: ()=> void) => {
    console.log(x + y)
    // to use this optional callback 
    //1-normal way 
    // if (cb)  cb() 

    // 2- advanced way 
     cb?.()
}
