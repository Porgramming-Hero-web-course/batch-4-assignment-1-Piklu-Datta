{
    interface Profile {
        name:string,
        age:number,
        email:string
    }

    const updateProfile = (profile:Profile , updates:{
        name?:string
        age?:number
        email?:string

    }):Profile=>{
       return {
        name:updates.name?? profile.name,
        age:updates.age?? profile.age,
        email:updates.email??profile.email
       }


    }

    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 29 }));

}