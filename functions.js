function add(num1,num2){
    const sum = num1 + num2;
    console.log({console: sum})
    //ALWAYS USE RETURN
    return {'return': sum}
}

console.log(add(2,3));
add(4,5);

//FUNCTION EXPRESSIONS
//VARIABLE NAME IS THE NAME OF THE FUNCTION
const subtraction = function(num1, num2){
    console.log(num1 - num2);
}
subtraction(20,10);

//ARROW FUNCTIONS
//=> IS THE FUNCTION
const multiply = (num1, num2) => console.log(num1*num2);
multiply(5,6);

//IIFEs
//IMMEDIATELY INVOKED FUNCTIONS
(function(num1){
    console.log('Hello');
})();

//HOISTING -only uses var
console.log({greet});
var greet = "hello";
console.log({greet2: greet})


person()
function person(){
    console.log("Hello");

}

