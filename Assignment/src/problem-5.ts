{
   const getProperty = <T,Q extends keyof T> (obj : T , key:Q )=>{
      return obj[key]
   }

   const person = {
    name: "Alice",
     age: 30
   }

   console.log(getProperty(person,"name"));
}