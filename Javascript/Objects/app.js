//Objects are collections of properties
//Properties are a key-value pair
//Rather than accessing data using an index, we use custom keys
// To make an object literal:
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}
// All keys will be turned into strings!

const person = {
    firstName: 'Mick',
    lastName: 'Jagger'
}

// To retrieve a value:
dog.age; //7
dog["age"]; //7

person["lastName"] //"Jagger"
person.firstName //"Mick"


//updating values
dog.breed = "mutt";
dog["age"] = 8;


const midterms = {
    Danielle: 96,
    Thomas: 78
};

midterms.Thomas = 79;
//The midterm for Thomas is now 79

midterms.Ezra = 88;
//Adds Ezra

//Arrays and objects can be nested