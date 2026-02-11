// Creating an array

const myArr = [1, 'hello', true, null, [1, 2, 3]]
console.log(myArr);

const movies = ['Border2', 'KGf2', 'Puspha', 'Devdas', 'Brahamastra'];
console.log(movies);
console.log(movies.length);

// Accessing elements by indexing in array

console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);
console.log(movies[3]);
console.log(movies[4]);
console.log(movies.indexOf('Puspha'));

// at method is used to access the element from the end of the array - added in ES2022

console.log(movies.at(-2));
console.log(movies.at(2));

// modifying the array
movies[2] = 'Puspha2';
console.log(movies);

//slice method is used to extract a portion of the array and returns a new array

console.log(movies.slice(1, 4)); // it will return the elements from 1ndex 1 to index 3 (4-1) 
console.log(movies.slice(1));
console.log(movies.slice(-3));
console.log(movies.slice(-4, -1));
console.log(movies.slice(1, 10));

//adding and removing elements from the array

// push method is used to add an element at the end of the array
movies.push('RRR');
console.log(movies);

// pop method is used to remove the last element from the array
movies.pop();
console.log(movies);

// unshift method is used to add an element at the beginning of the array
movies.unshift('Vivah2')
console.log(movies);

// shift method is used to remove the first element from the array
movies.shift();
console.log((movies));

//splice method is used to add, replace or remove elements from the array at a specific index

movies.splice(2, 2);
console.log(movies);

movies.splice(3, 2, 'Superman', 'Batman');
console.log(movies);

movies.splice(3, 0, 'Sultan', 'Tiger');
console.log(movies);

// traversing an array

for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

const nums = [1, 2, 3, 4, 5];
for (let n of nums) {
    console.log(n * 2);
}
console.log(nums);

// foeEach method is used to execute a provided function once for each array element

nums.forEach((n, i) => {
    console.log(i, n * 3);
})













