The significance of union and intersection types in Typescript.
Union and Intersection types are the powerful tools of typescript.They allow to combine multiple types in various way;

Union type:-
Union type represent the value that can  be one of several types.Its denotes by the 
'|' symbol

code:-

type Fruits = 'mango' | 'banana'

function test(fruit : Fruits){
    if(fruit === 'mango')
    {
         console.log('Fruit is mango');
    }
    else if(fruit === 'banana')
    {
        console.log('Fruit is banana')
    }

}

By using Union type use we can combine the many type alias property such as

type Frontend = 'rect.js' | 'veu.js';
type backend  =  'node.js' | 'dot.end';

type developer = Frontend | backend;

Using union type the readability and productivity of the code is increased.

Intersection types:-
An intersection type represent a value that must correspond to all specified type
type User ={
  name:string,
  age:number
}

type Admin = {
    designation : string []
}

Type UserAdmin = Admin & User

const userAdmin: UserAdmin ={
   name:"Max",
   age:30,
   designation: ['admin','editor']
}

Union types are useful when a value can be one of several options, such as a function that can return either a string or a number. Intersection types allow you to create new types that inherit the properties of multiple existing types.By effectively using union and intersection types, you can write more robust, type-safe, and expressive TypeScript code.