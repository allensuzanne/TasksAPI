//=================================================
// 1. Setting types
// var myString: string;
// // I can assign myString like this:
// myString = "Bee stinger";
// // Why is there a problem with this? What can I do to fix this?
// myString = 9;

var myString: string;
myString = "Bee stinger";
// I put quotation marks around the 9 to make it a string
myString = "9";


//=================================================
// 2. Setting the types for function parameters
// function sayHello(name: string){
//     return `Hello, ${name}!`;
//  }
//  // This is working great:
//  console.log(sayHello("Kermit"));
//  // Why isn't this working? I want it to return "Hello, 9!"
//  console.log(sayHello(9));

function sayHello(name: string) {
    return `Hello, ${name}!`;
}
console.log(sayHello("Kermit"));
console.log(sayHello("9"));//i put quotation marks around the 9 to make it a string


//=================================================
// 3. Optional parameters
// function fullName(firstName: string, lastName: string, middleName: string){
//     let fullName = `${firstName} ${middleName} ${lastName}`;
//     return fullName;
//  }
//  // This works:
//  console.log(fullName("Mary", "Moore", "Tyler"));
//  // What do I do if someone doesn't have a middle name?
//  console.log(fullName("Jimbo", "Jones"));
function fullName(firstName: string, lastName: string, middleName?: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
console.log(fullName("Mary", "Moore", "Tyler"));
// I put a question mark after middleName to make the parameter optional
console.log(fullName("Jimbo", "Jones"));


//=================================================
// 4. Interfaces and function parameters
// interface Student {
//     firstName: string;
//     lastName: string;
//     belts: number;
//  }
//  function graduate(ninja: Student){
//     return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
//  }
//  const christine = {
//     firstName: "Christine",
//     lastName: "Yang",
//     belts: 2
//  }
//  const jay = {
//     firstName: "Jay",
//     lastName: "Patel",
//     belt: 4
//  }
//  // This seems to work fine:
//  console.log(graduate(christine));
//  // This one has problems:
//  console.log(graduate(jay));
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student) {
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4 //i added an s to make it the same as the interface
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

//=================================================
// 5. Classes and function parameters
// class Ninja {
//     fullName: string;
//     constructor(
//         public firstName: string,
//         public lastName: string) {
//         this.fullName = `${firstName} ${lastName}`;
//     }
//     debug() {
//         console.log("Console.log() is my friend.")
//     }
// }
// // This is not making an instance of Ninja, for some reason:
// const shane = Ninja();
// // Since I'm having trouble making an instance of Ninja, I decided to do this:
// const turing = {
//     fullName: "Alan Turing",
//     firstName: "Alan",
//     lastName: "Turing"
// }
// // Now I'll make a study function, which is a lot like our graduate function from above:
// function study(programmer: Ninja) {
//     return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
// }
// // Now this has problems:
// console.log(study(turing));
class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
    debug() {
        console.log("Console.log() is my friend.")
    }
}
const shane = new Ninja("Shane", "Turning"); //i created a 'new' ninja, and handed in the two required parametes
const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
}
function study(programmer: Ninja) {
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
console.log(study(shane));//i handed in the ninja that I created


//=================================================
// 6. Arrow functions
// var increment = x => x + 1;
// // This works great:
// console.log(increment(3));
// var square = x => { x * x };
// // This is not showing me what I want:
// console.log(square(4));
// // This is not working:
// var multiply = x, y => x * y;
// // Nor is this working:
// var math = (x, y) => let sum = x + y;
// let product = x * y;
// let difference = Math.abs(x - y);
// return [sum, product, difference];
var increment = (x: number) => x + 1; //set the parameter as a number
console.log(increment(3));
var square = (x: number) => x * x; //i set the parameter as a number 
console.log(square(4));
var multiply = (x: number, y: number) => x * y; //put types in the parameters
var math = (x: number, y: number) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
} //put curly brackets around because it was more than one line, and added types


//=================================================
// 7. Arrow functions and 'this'
// class Elephant {
//     constructor(public age: number) { }
//     birthday = function () {
//         this.age++;
//     }
// }
// const babar = new Elephant(8);
// setTimeout(babar.birthday, 1000)
// setTimeout(function () {
//     console.log(`Babar's age is ${babar.age}.`)
// }, 2000)
//  // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
class Elephant {
    constructor(public age: number) { }
    birthday = () => {
        this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function () {
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)
 //changed the function to an arrow function
