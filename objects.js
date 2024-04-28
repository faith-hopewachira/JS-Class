// INSTANTIATIONG OBJECTS
const cup = {
    color: 'red',
    size: 'small',
    shape: 'cylindrical',
    functionality: {
        drinkType: 'tea',
        temperature: 'hot'
    },
    design: ['floral','polka','checked'],
    drink: function(){
        console.log(`My main use is to drink ${this.functionality.drinkType}`);
        return('Use me to drink');

    }
};

console.log('size', cup.size);
// ACCESSING INDEX 0 IN THE ARRAY
console.log({design: cup.design[0]});
console.log('shape', cup['shape']);
console.log('functionality', cup.functionality.drinkType);
console.log('drink', cup.drink());



delete cup.color;
console.log({cup});

const values = Object.values(cup)
console.log({values});

const keys = Object.keys(cup)
console.log({keys});

// LOOPING THROUGH OBJECTS
const loop = Object.keys(cup).forEach(item => {
    console.log({key: item, value : cup[item]});
});


// ARRAY OF OBJECTS


