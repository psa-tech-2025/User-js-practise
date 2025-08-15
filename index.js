let  a =5;
console.log(a)
// 1- why  1-interactivity  2-cross platform supportive 3-Client side Exesuation 4-versatility 5-Huge Ecosystem 6-event handelling 7-Asynchronous programming(async/await) 8-integration 9-Rapid Development 10-Supports modern Web Featurs
//Usecases 1-web developmenrt 2-app developmenrt 3- game 4- mobile supportive  5- cross platform  6-desktop (electron) 7- server site scripting 8-data visulation 9-iot

//2-Hoisting  -Javascript mechanizm , Varible and function gos on top of the scope (var, let , const, functinname());
console.log(letfun())
// console.log(leta)
let leta =5;
function  letfun () {
 let leta =7;
    console.log(leta);
    leta =999;
    console.log(leta)
}
 leta =1000;
console.log("Im here",leta);
letfun();
//3-operators in js
    // 1. Arithmetic Operators (Math operations)
    // 2. Assignment Operators (Assign values)
    //3.  Comparison Operators (Return true or false)
    // 4. Logical Operators
    // 5. Bitwise Operators
    // 6. Ternary (Conditional) Operator;
    // 8. Spread & Rest Operators (ES6)
let oper =9;
let addope =8;
let ad = oper-=addope;
console.log(ad);

let opaand = true;
let opafa =false;
let res = opaand!=opafa;
console.log(res)

console.log(5 << 5);
console.log(5 >> 4);
let age =8;
let resage = (age>18)?'adult':"dkjdfm";
console.log(resage);

let arrspr =[100,200,300];
let ressprd = [...arrspr,1,2,3];
console.log(ressprd);
function red (...arrsp) {
    return arrsp.reduce((a,b) => a+b,0); 
}
console.log(red(arrspr));
//Loops in js  
    // 1-for loop
    let arrfor = [1,2,3,4,5];
    for(let i=0;  i < arrfor.length; i++) {
        console.log(arrfor[i] = arrfor[i]*2)
    }
    //2-foreach

    let arrforeach = [10,20,30,40];
    arrforeach.forEach((i,index) => {
        console.log(index,i*10)
    })

// 3-while
let sh =17;
// while(sh==18) {
//     console.log(`i m in while loop value of sh ${sh}`)
// }
// let inputs = [];
// let userInput = prompt("Enter a value (type 'exit' to stop):");

//     while(userInput !== "exit") {
//         inputs.push(userInput);
//          userInput = prompt("Enter a value (type 'exit' to stop):");

//     }

//     console.log("You entered:", inputs);

// 4-do while
// let numdo =0;
// do {
//     console.log('Number', numdo);
//       setInterval(10000)
//          numdo++;
  
// } while(numdo<= 5)

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
(async function() {
    let numdo = 0;
    do {
        console.log('Number', numdo);
        await delay(1000); // wait 10 seconds
        numdo++;
    } while (numdo <= 5);
})();
//5. for...in loop
let forn = { name:'sp',age:'23',address:'xyz'};
for(let key in forn) {
    console.log( forn[key])
}
//6. for ..of  loop
let forof = [100,200,300];
for (let key of forof) {
    console.log(key)
}
let objarr = [ 
    { name:'sp',age:'23',address:'xyz'},
    { name:'sp2',age:'232'},  
    {address: 'yedsh'}
];
 objarr[1].address= objarr[2].address;
let val =objarr.splice(1);
console.log(val)
for(let key of objarr) {
    console.log(key)
};
let striang = "Angular";
for(let key of striang) {
    // console.log(key)
  let va =key;
    console.log(va.toUpperCase())
}
document.addEventListener("DOMContentLoaded", function () {
document.getElementById("userForm").addEventListener("submit", function(e) {
      e.preventDefault();
    let formData = new FormData(this);
    let data = {};
    formData.forEach((value, key) => {
              // Handle multiple checkbox values as an array
        if (data[key]) {
            if (Array.isArray(data[key])) {
                data[key].push(value);
            } else {
                data[key] = [data[key], value];
            }
        } else {
            data[key] = value;
        }
    });
     console.log(data);
});
});

let title = document.getElementById("title");
console.log(title)

//7. Events & DOMContentLoaded
//6. Removing Elements (querySelector  remove)
//5. Modifying Elements (document.getElementById);
//4. Creating & Adding Elements (document.createElement   document.body.appendChild(newDiv); )
// E. By CSS Selector (All Matches) (document.querySelectorAll);
// D. By CSS Selector (First Match) (document.querySelector);
// C. By Tag Name  (document.getElementsByTagName);
 //B. By Class Name (document.getElementsByClassName);
 //Ways to Get Elements in the DOM  (document.getElementById)
//Object Creation ways
//1 {};
let obj = {
    name:'sa',
    age:23
};
console.log(obj);
console.log(Object.keys(obj).length, Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// 1️⃣ Check if it’s actually an object
console.log(typeof(obj));
console.log(obj instanceof Object);
console.log(Object.prototype.toString(obj));

//2️⃣ Check if the object is empty
console.log(Object.keys(obj).length ===0); //false
console.log(Object.values(obj).length ===2);//true

//3️⃣ Get all keys, values, or entries
    console.log(Object.keys(obj));   // ["name", "age"]
    console.log(Object.values(obj)); // ["sa", 23]
    console.log(Object.entries(obj)); // [["name", "sa"], ["age", 23]]

//4️⃣ Loop through object properties
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}

Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});

//5️⃣ Check if a property exists
console.log('name' in obj); // true
console.log(obj.hasOwnProperty('age')); // true
console.log(Object.keys(obj).includes('age')); // true

//6️⃣ Access property values
console.log(obj.name);    // "sa"
console.log(obj['age']);  // 23

//7️⃣ Validate property type
console.log(typeof obj.name === 'string'); // true
console.log(typeof obj.age === 'number');  // true


//2  Using new Object() Constructor

let paw = new Object();
paw.na ="kdjk";
paw.year =2020;
console.log(paw)

// 3. Using Constructor Function
    function person (name,age) {
        this.name =name;
        this.age =age;
    }

    let valco = new person('sp',24);
    console.log(valco);
    console.log(new person('may',30));

//4. Using ES6 class
class Person  {
    constructor(name, age ) {
        this.name =name;
        this.age =age;
    }
}
let p1 = new Person('john',10);
console.log(p1);
//5. Using Object.create()
let proto = { greet() { console.log('Hello'); } };
let objj = Object.create(proto);
objj.name = 'John';
console.log(objj);
objj.greet();

//6. Using Factory Function
function createPerson(name, age) {
    return { name, age };
}
let p11 = createPerson('John', 25);
console.log(p11);

//7. Using Singleton Pattern

let obj1 = new function() {
    this.name = 'John';
    this.age = 25;
};
console.log(obj1);

// 8. Using JSON
let objparse = JSON.parse('{"name":"John","age":25}');
console.log(objparse);

