// creating an object
const person = {
    name: "Sameer",
    age: 20,
    city: "Veergarh"
};
console.log(person);
console.log(person.age);
console.log(person['city']);

// adding elements in the object

person.email ="sameer@example.com"
console.log(person);

// modifying the object 

person.name = 'Rimjhim';
person.age = 19;
console.log(person);

// accessing keys of the object

console.log(Object.keys(person));

// accessing values of the objects

console.log(Object.values(person));

// deleting a property from the object

delete person.city;
console.log(person);



const smartphone = {
    brand : 'Samsung',
    model : 's24',
    price : 20000,
    colors : ['black', 'blue', 'green']

};

console.log(smartphone);
console.log(smartphone.colors[1]);

const User = new Object() // singleton object
const User2 = {} // non-singleton object (both create empty objects)

User2.name = "Rohit Modi"
User2.id = "12345"
User2.isLoggedIn = true

console.log(User2);


// nested object
const newobj = {
  name: "Rohit",
  email: "rohitkumarmodi77@gmail.com",
  address: {
    permanent_address: {
      address: "GomtiNagar",
      city : "Lucknow",
      state: "uttarpradesh",
      pincode: "226010",
    },
    current_address: {
      address : "GomtiNagar",
      city : "Lucknow",
      state: "uttarpradesh",
      pincode: "226010",
    }
  },
  mobile_no: "0000000000"
}

console.log("pincode is =", newobj.address.permanent_address.pincode)


// joining the objects
const obj1 = {
  1: "R",
  2: "O",
  3: "H"
}

const obj2 = {
  4: "I",
  5: "T",
}

// wrong way (creates nested object)
const obj3 = { obj1, obj2 }

// correct ways
const objall = Object.assign({}, obj1, obj2)
console.log(objall)

const bestobj = { ...obj1, ...obj2 }
console.log(bestobj)


// array of objects (used in database)
const user = [
  {
    id: 1,
    email: "rohit@gmail.com"
  },
  {
    id: 2,
    email: "xyer@gmail.com"
  },
  {
    id: 3,
    email: "rifh90@gmail.com"
  }
]

console.log(user[1].email)


// object methods
console.log("keys =", Object.keys(User2)) // return the array
console.log("values =", Object.values(User2))
console.log("entries =", Object.entries(User2))

console.log("check =", User2.hasOwnProperty("isLoggedIn"))


// Singleton
// (An object that has only one instance)
// JavaScript does NOT create singleton by default,
// but it can be implemented using constructor or logic

//  Objects can be created in two main ways:
// 1. Object Literal
// 2. Constructor (Object.create, function, class)

const uniqueKey = Symbol("key") // symbol declaration (used for unique key)
const JsUser = {
  name: "rohit", // normal key (string type)
  age: 20,
  [uniqueKey]: "for uniqueness", 
  //  symbol used as a key (always unique, no conflict)
  location: "lucknow",
  email: "rohitkumar@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

//  Accessing object values
console.log(JsUser.name)       
// best and simple way (dot notation)

console.log(JsUser["name"])    
// access using string key (bracket notation)

console.log(JsUser[uniqueKey]) 
// symbol can only be accessed using bracket notation

console.log(JsUser)            
// prints the entire object

// Updating value

JsUser.name = "rohit modi"         
console.log(JsUser.name)       
// value updated successfully

// Adding a function (method)

JsUser.greeting = function () {
  console.log(`what's up, myself ${this.name}`)
}

// Understanding the difference

console.log(JsUser.greeting)   
//  only returns function reference (not executed)

console.log(JsUser.greeting()) 
//  executes the function
//  returns undefined (no return statement)
// Freezing the object (locking structure)

Object.freeze(JsUser)  
// top-level changes are not allowed

// this change will NOT happen
JsUser.name = "modi"
console.log("we can't change =", JsUser.name)
// output: Prince (unchanged)

// IMPORTANT (shallow freeze concept)

JsUser.lastLoginDays.push("Sunday") 
// this will still work (nested array is mutable)
console.log(JsUser.lastLoginDays)
// freeze() locks the reference, not the inner data






