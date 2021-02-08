//Method is a function that has been placed as a property on an object

// const math = {
//     multiply : function(x, y) {
//         return x * y;
//     },
//     divide : function(x, y) {
//         return x / y;
//     },
//     square : function(x) {
//         return x * x;
//     }
// };

const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function(num) {
        return num ** 3
    }
};

//Shorthand
const yourMath = {
    blah: 'Hi!',
    add(x, y) {
        return x + y;
    },
    multiply(x, y) {
        return x * y;
    }
};

const square = {
    area(x) {
        return x * x;
    },
    perimeter(x) {
        return x * 4;
    }
};

//'This' in methods accesses other properties on the same object

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){
        console.log(`${this.name} says meowwww`)
    }
};

//The value of this depends on the invocation context of the function 
//it is used in.

const meow2 = cat.meow; //says meowwww
//no longer refers to cat object

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return 'EGG';
    }
};

//Unrelated - Try/Catch

// try {
//     hello.toUpperCase();
// } catch {
//     console.log("Error!")
// }

function yell(msg) {
    try{
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log('Please pass a string!')
    }
}
