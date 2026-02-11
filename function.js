// Function in js 

function addNum(a,b){
 var c =a+b;
   console.log(c);
   
}
addNum(5,6);
addNum(10,15);


// function with return type

const calcAvg = function(m1,m2,m3){
   const avg = (m1+m2+m3)/3;
   //console.log(avg);
   return avg;
}
const avg = calcAvg(45,37,23)
console.log(avg);

// Arrow function - added in Es6

const checkEven = (num) => {
    if(num%2 == 0){
        return true;
    }
    else{
        return false;
    }
}
const isEven = checkEven(45);
console.log(isEven);

//



