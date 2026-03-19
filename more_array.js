//objext
const smartPhones = [
    {
        brand : 'nothing',
        model : 'phone2',
        price : 50000,
        colors : ['black','white','green']
    },
    {
        brand : 'vivo',
        model : 'T2pro',
        price : 30000,
        colors : ['black','white','green']
    },
    {
        brand : 'oneplus',
        model : '13R',
        price : 90000,
        colors : ['black','gold','blue']
    },
    {
        brand : 'samsung',
        model : 'J7',
        price : 70000,
        colors : ['pink','white','brown']
    }
];
console.log(smartPhones);

const brands = smartPhones.map((phone) =>{
    return phone.brand;
});
console.log(brands);


//create array of all prices in number
const prices = smartPhones.map((phone) =>{
    return phone.price;
});
console.log(prices);

const budgetPhones = smartPhones.filter((phone) =>{
    return phone.price < 60000;
});
console.log(budgetPhones);

// find all phones which are available in black color
//includes method is used to check if the array contains a specific value or not(iska matlab hai ki phone ke colors array me black color hai ya nahi)
const blackPhones = smartPhones.filter((phone)=>{
    return phone.colors.includes('black'); 
});
console.log(blackPhones);

