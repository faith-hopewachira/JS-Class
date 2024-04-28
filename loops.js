const multiplyByTwo = (num) => {
    let newArray = [];
    for(let i = 0; i< num.length; i++){
        const result = num[i] * 2
        newArray.push(result);
    }
    return newArray

}
console.log(multiplyByTwo([2,3,4,5,6,7]));

//FOR OF-DEALS WITH THE ACTUAL ELEMENTS AND NOT INDICES
const totalSum = (num) =>{
    let sum = 0;
    for(let element of num){
        sum+=element
    }

    return sum;
}

console.log(totalSum([1,2,3,4,5,6,7,8]))


const teachStudents = (students) => {
    while(students.length >2){
        console.log('Teach Students')
        // students.pop();
        // // if(students.length === 1)
        // // break


        // if(students.includes("John")){
        //     continue

        // }

        if(students.includes('Monica'))
        break

    }

}

teachStudents(["Max","John","Anita","Monica"])


const childrenName = (children) => {
    do{
        console.log("There are too many children");
    }

    while(children.length > 5)
}
"Evans","Monica"
childrenName("Max","Anita","John","Evans","Monica")


const checkDayOfWeek = (day) => {
    switch(day){
        case 'Monday':
            console.log('Today is Monday');
            break;
        case 'Tuesday':
            console.log('Today is Tuesday')
            break;
        default:
            console.log('The day is not there')
    }
}
checkDayOfWeek('Monday')


function numss(numbs){
    let sum = 0
    for(let element of numbs){
        sum+=element
    }
    return sum
}

const numbs = [2,4,6,8]
console.log(numss(numbs));


function mult(numbers){
    let add = 0
    for(element of numbers){
        add+=element
    }
    return add

}

const numbers = [1,2,3,4,5]
console.log(mult(numbers));

function newArr(myNums){
    let newAr =[]
    for(i = 0; i<myNums.length; i++){
        const res = myNums[i]*2;
        newAr.push(res)
    }
    return newAr

}
const myNums = [9,8,7,6,5]
console.log(newArr(myNums));


function myStudents(names){
    while(names.length<2){
        if(names.includes("wachira")){
            break

        }

    }

}
const names = ["faith","hope","wachira"]
myStudents(names);

