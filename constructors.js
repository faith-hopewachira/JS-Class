function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
        
    }
    
};
const adam = new Person('Adam', 30);
console.log({adam});
adam.greet();


const eve = new Person('Eve', 25)
console.log({eve});
eve.children = ['Cain','Abel','Seth']
console.log({eve});
console.log({adam});


// A PROTOTYPE IS A METHOD USED TO ADD PROPERTIES INSIDE A CONSTRUCTOR
console.log();