//METHODS OF CREATING ARRAYS
let fruits = ['Mango','Apple','Banana','Orange'];
let array = new Array(20,30,6,7);

console.log({fruits});
console.log({array});

//REPLACING ITEM AT INDEX 1 WITH 3
fruits[1] = 3;
console.log({fruits});

//FINDING THE LENGTH OF AN ARRAY
console.log('length', fruits.length);

//FINDING THE INDEX OF THE LAST ITEM
//4 - 1 = 3
fruits[fruits.length-1];
console.log('length', fruits.length);

//ADDING AN ELEMENT AT THE END OF AN ARRAY
let addLast = fruits.push('Kiwi');
console.log({fruits});

//ADDING AN ELEMENT AT THE FISRT INDEX IN AN ARRAY
let addFirst = fruits.unshift('Pawpaw');
console.log({fruits})


//REMOVING THE LAST ITEM IN AN ARRAY
let removeLast = fruits.pop();
console.log({fruits});

//REMOVING THE FIRST ELEMENT IN ARRAY
let removeFirst = fruits.shift();
console.log({fruits});



let items = [20, 30,40,50,60]
//THE ACCUMULATED VALUE + THE CURRENT VALUE
let add = items.reduce((acc,curr) => acc + curr)
console.log({add})

//MULTIPLYING EVERY ITEM IN AN ARRAY by 2
let multiply= items.map(item => item * 2);
console.log({multiply});

//ADDING EVERY ELEMENT BY 2
let addEach = [];
let total = 0
items.forEach(item => {
    const add = item + 2;
    console.log({add});
    //ADDING EVERY ITEM AT THE END OF THE ARRAY
    addEach.push(add)
    total += item

});
console.log({addEach});
console.log({total});



//MULTIPLYING EVERY NUMBER ON THE ARRAY
let multiplyAll = 1;
items.map(item => {
    multiplyAll *= item
    return item


})
console.log({multiplyAll})


//DESTRUCTURING ARRAYS
// let [num1, num2, num3] = items;
// console.log({num1});
// console.log({num2});
// console.log({num3});

let [num1,...rest] = items;
console.log({num1});
console.log({rest});


let arr1 = [3,7,34,90,12]
arr1[-1]
// arr1[arr1.length-1];
// console.log('length', arr1.length);




//create array
//replace an element
//finding the length


let numbers = [10,10];
var res = numbers.reduce((acc, curr) => acc + curr);
console.log({res});

function addNums(x,y){

    // let nums=nums.reduce{(acc, curr)=>acc + curr}
    // return nums
    // let add = nums.reduce((acc,curr) => acc + curr)
    // return add

    return x + y




}
console.log(addNums(2,3));

const nameMine = "faith"
const vowels = "aeiouAEIOU"

// Insert the following string at the fourth index of the below 
// variable:"eat"const food = "The quick fox jumped over the lazy dog"
