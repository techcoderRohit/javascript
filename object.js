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








