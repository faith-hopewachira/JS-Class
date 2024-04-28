class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // CREATING A METHOD OUTSIDE A CONSTRUCTOR
    greet(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }

};

const jane = new Person('Jane', 30)
console.log({jane});
jane.greet();
console.log('prototype', Person.prototype);

Person.prototype.nationality = 'Kenyan'
console.log('nationality', jane.nationality);


// INHERITANCE
class Students extends Person{
    constructor (name,age){
        super(name,age);
        this.school = this.school
    }

    profession(){
        console.log(`I am a student at ${this.school}`);
    }
};

const amanda = new Students('Amanda',19,"AkiraChix")
console.log({amanda});
console.log('nationality',amanda.nationality);
amanda.greet();
amanda.profession();

