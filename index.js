// import { num, greet } from './server';
// greet();
// let  a =5;
// console.log(a)
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
// (async function() {
//     let numdo = 0;
//     do {
//         console.log('Number', numdo);
//         await delay(1000); // wait 10 seconds
//         numdo++;
//     } while (numdo <= 5);
// })();
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



//ES-6 Featurs
// 1-const and let keyword
// 2- Arrow Functions
const sum =(a,b) => a+b;
console.log(sum(10,20));
// 3-Template Literal

const user ="alice";
console.log(`hellow, ${user}`);

// 4-Default Parameter
function defa (name="sp") {
    console.log(`hell ${name}`)
}

defa();
//5. Destructuring Assignment
    //array destuructring
let arrdest = ['1',2,3,5,];
[a,b] =arrdest;
console.log(a,b)
    //Object Destructurring
objdesgt = { name:'sp', agee:29};
const {name, agee} = objdesgt;
console.log(agee)

//6  Spread (...) and Rest Parameters
// Spread (expands arrays/objects)
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums); // [1, 2, 3, 4, 5]

// Rest (collects arguments)
function summ(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(summ(1, 2, 3)); // 6

//7-7. Object Property Shorthand
let name1 = "Tom", age1 = 25;
const person1 = { name1, age1 };
console.log(person1)

//8. Object Destructuring with Default Values
const { x1 = 5, y1 = 10 } = { x1: 7 };
console.log(x1, y1); // 7 10
//9- for...of Loop
for (let num of [1, 2, 3]) {
  console.log(num);
}

//10. Classes

class myclass {
    constructor(name ,age){
        this.name =name;
        this.age =age;
    }
    greet() {
        console.log(`my name is ${this.name}, and age is ${this.age}`)
    }
}
let c1 = new myclass('sss',34);
c1.greet()

//11. Inheritance with extends & super

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}
class Dog extends Animal {
  speak() {
    super.speak();
    console.log("Dog barks");
  }
}
new Dog().speak();

//12. Modules (import & export)
// console.log(filename)
// greet();

//13-  Promises

const pro = new Promise((resolve,reject) => {
    let val =true;
    if(val==true) {
        setTimeout(() => {
            resolve('promise resolved')
        }, 5000);
    } else {
        reject('promise rejected')
    }
});
// pro
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

async function handelpromise() {
    try  {
        const resu = await pro;
        console.log(resu)
    } catch (err) {
        console.log(err)
    }
}
handelpromise()


//16. Map & Set
//set
let setme = [1,2,2,3,4,4,5];
let fina= new Set([...setme]);
console.log(fina)

//Map
let map = new Map();
map.set("na","sdkjjdfdfdf");
map.set("vil" ,"yedshi");
console.log(map)

//Shallow Copy deep copy
// shallow copy

let shaiiow = {
    tech:'frontend',
    dev: { jenkin: 'v3', k8s:'deployment'}
};
console.log(shaiiow)
shaiiow.dev.jenkin ="v5";
console.log(shaiiow);
//Object.assign()
//Spread operator { ...obj }
//Array methods: slice(), concat(), [...arr]


//deep copy

let deepco = JSON.parse(JSON.stringify(shaiiow));
// console.log(deepco)
// let fide = deepco.JSON.parse(deepco);
// console.log(fide);
console.log(deepco);
deepco.dev.jenkin="v10";
console.log(deepco);
console.log(shaiiow)


//OOPS Concept in Js

// 1- Class & Object
//2- Encapsulation
    // Wrapping data (properties) and behavior (methods) inside a single unit.
    //Use private fields (#) to hide data.

//3. Abstraction
   // Hiding internal details and showing only necessary parts to the outside.
   // Achieved via methods without exposing complex implementation.
//4. Inheritance
    //One class can inherit properties & methods from another class using extends.
//5. Polymorphism
    //Same method name but different behavior depending on the object.
    //Achieved via method overriding.

//Encapsulation → Private properties/methods
//Abstraction → Hide implementation details
//Inheritance → Reuse code via extends or prototypes
//Polymorphism → Same method name, different behavior


//EVENTS in all Use in js

//1. Mouse Events

//  click	Fires when mouse button is clicked.
// dblclick	Fires on double click.
// mousedown	Fires when mouse button is pressed.
// mouseup	Fires when mouse button is released.
// mousemove	Fires when mouse pointer moves.
// mouseenter	Mouse enters the element (no bubbling).
// mouseleave	Mouse leaves the element (no bubbling).
// mouseover	Mouse enters (bubbles).
// mouseout	Mouse leaves (bubbles).
// contextmenu	Right-click event.

// 2. Keyboard Events
    // keydown	Key is pressed (fires repeatedly if held).
    // keyup	Key is released.
    // keypress	Key is pressed (deprecated — use keydown).

// 3. Form Events
// Event	Description
// submit	Form submission.
// reset	Form reset.
// focus	Element gains focus.
// blur	Element loses focus.
// change	Value changes (select, input, textarea).
// input	Fires on every input change.
// invalid	Input fails validation.

//4. Window / Document Events

//     Event	Description
// load	Page fully loaded (including images).
// DOMContentLoaded	HTML fully loaded (before images/styles).
// resize	Window size changes.
// scroll	User scrolls page.
// beforeunload	Page is about to unload.
// unload	Page is unloaded.

//5. Clipboard Events

// Event	Description
// copy	Copy operation.
// cut	Cut operation.
// paste	Paste operation.

//6. Drag & Drop Events
// dragstart	Dragging starts.
// drag	While dragging.
// dragend	Dragging ends.
// dragenter	Draggable enters drop target.
// dragleave	Leaves drop target.
// dragover	Over drop target.
// drop	Dropped on target.

//7. Media Events
//Used for <audio> and <video>.
// Event	Description
// play	Media starts playing.
// pause	Media pauses.
// ended	Media ends.
// timeupdate	Time changes during playback.
// volumechange	Volume changes.
// loadeddata	Data loaded.
// error	Error in loading.

//8  Touch Events (Mobile)
// Event	Description
// touchstart	Finger touches screen.
// touchmove	Finger moves on screen.
// touchend	Finger lifted.
// touchcancel	Touch canceled.

//9
// Example — Event Usage

// document.getElementById("btn").addEventListener("click", function() {
//     alert("Button clicked!");
// });

// document.addEventListener("keydown", function(e) {
//     console.log("Key pressed:", e.key);
// });DOM = Document Object Model.


// 1. What is DOM?
//It's a programming interface for HTML & XML documents.
//It represents the page structure as a tree of nodes (objects) that JavaScript can manipulate.
//Every HTML element is a node in the DOM.

// 2. DOM vs HTML
// | HTML (Static)           | DOM (Dynamic)                     |
// | ----------------------- | --------------------------------- |
// | Written in `.html` file | Created in browser memory         |
// | Can’t change after load | Can be changed anytime with JS    |
// | Just text in file       | Objects with properties & methods |

// 3. DOM Node Types
// Element Node → <div>, <p>, <h1>, etc.
//Text Node → Text inside tags.
//Attribute Node → id="main", class="red"
//Comment Node → <!-- comment -->.

//4. DOM Selection Methods
// | Method                     | Example                                    | Description                |
// | -------------------------- | ------------------------------------------ | -------------------------- |
// | `getElementById()`         | `document.getE
// lementById("id")`            | Select by ID               |
// | `getElementsByClassName()` | `document.getElementsByClassName("class")` | Select by class            |
// | `getElementsByTagName()`   | `document.getElementsByTagName("p")`       | Select by tag              |
// | `querySelector()`          | `document.querySelector("#id")`            | First match (CSS selector) |
// | `querySelectorAll()`       | `document.querySelectorAll(".class")`      | All matches (NodeList)     |


// 5. DOM Manipulation
// Get / Set Content:
// document.getElementById("title").innerHTML = "New Title";
// document.getElementById("title").textContent = "Only Text";

// Change Attribute:
// document.querySelector("img").setAttribute("src", "new.jpg");
// document.querySelector("h1").style.color = "red";
// Create Elements:
// let newDiv = document.createElement("div");
// newDiv.textContent = "Hello World";
// document.body.appendChild(newDiv);

// 6. DOM Events
// document.getElementById("btn").addEventListener("click", function(){
//     alert("Button clicked!");
// });

// Common Events:
// click

// mouseover, mouseout

// keydown, keyup

// submit

// change

// DOMContentLoaded

// scroll

// focus, blur

// 7. Traversing the DOM
// let parent = document.getElementById("child").parentNode;
// let children = document.getElementById("parent").children;
// let first = document.getElementById("parent").firstElementChild;
// let last = document.getElementById("parent").lastElementChild;

// 8. DOM Lifecycle
// Loading – HTML parsing.
// DOM Constructed – DOMContentLoaded fires.
// Assets Loaded – Images, CSS load.
// Ready for Interaction.

const data = [
  {
    id: 1,
    name: "Shailesh",
    age: 28,
    email: "shailesh@example.com",
    salary: 45000.75,
    skills: ["Angular", "JavaScript", "Node.js"],
    joinDate: "2021-05-10"
  },
  {
    id: 2,
    name: "Priya",
    age: 24,
    email: "priya@example.com",
    salary: 52000.5,
    skills: ["React", "HTML", "CSS"],
    joinDate: "2022-02-15"
  },
  {
    id: 3,
    name: "Rahul",
    age: 30,
    email: "rahul@example.com",
    salary: 61000.2,
    skills: ["Vue", "TypeScript", "Node.js"],
    joinDate: "2019-08-21"
  },
  {
    id: 4,
    name: "Ayesha",
    age: 26,
    email: "ayesha@example.com",
    salary: 48000.9,
    skills: ["Angular", "Bootstrap", "MongoDB"],
    joinDate: "2023-01-12"
  },
  {
    id: 5,
    name: "Vikram",
    age: 35,
    email: "vikram@example.com",
    salary: 70000.85,
    skills: ["Python", "Django", "JavaScript"],
    joinDate: "2018-11-03"
  }
];

console.log(data.length);
// console.log(data.reverse());
// console.log(data.map((emp) => Math.ceil(emp.salary)));
// console.log(data.map((emp) => Math.round(emp.salary)));
// let roundme = data.map((emp) => Math.round(emp.salary));
// console.log(roundme);
// console.log(data);

let dataupdate = data.map(em => ({...em,
    salary:Math.round(em.salary)
}));
console.log(dataupdate)
let sortage = data.sort((a,b) =>a.age -b.age );
data.forEach((emp, index) => {
  emp.id = index + 1;
});
console.log(sortage);
let namecapatilize = sortage.map(emp => ({...emp,
    name:emp.name.toUpperCase()
}));
console.log(namecapatilize);
console.log(sortage);
//upto31
let upto30 = sortage.filter(emp => emp.age >=29);
upto30.forEach((index,i) => {
   index.id =i+1
})
console.log(upto30)

//1-from
//2-of
//3-shift
//4-unshift
//5-push
//6-pop 
//7-splice
//8-slice
//9-map
//reduce
//10-filter
//11-sort
//12-indexOf
//13-lastindexOf
//15-fill
//16-concat
//17-reverse
//18-includes
//19-foreach
//20-find
//21-findIndex
//22-some 
//23-every
//24-join()
//25-toString()
//26-reduceRight()
//27-flat()
//28-flatmap()



//String Methods
//1-toUppercase
//2-toLowercase
//3-include()
//4-indexof()
//5-lastindexOf()
//6-slice()
//7-splice()
//8-substr()
//9-substring()
//10-charAt()
//11-charCodeAt()
//12-at()
//13-trim()
//14-trimStart()
//15-trimEnd()
//16-padStart()
//17-padEnd()
//18-replace()
//19-replaceAll()
//20-new String()
//21-length
//22-startsWith()
//23-endsWith()
//24-repeat()
//25-split()
//26-join()
//27-match
//28-search


//Number Methods

//1-Number()
//2-toString()
//3-ParseInt()
//4-Parsefloat()
//5-Math.round()
//6-Math.sqrt()
//7-Math.ceil()
//8-Math.Min()
//9Math.max()
//10-isFInite()
//11-isInteger()
//12-isNaN()
//13-toFixed()
//14-toprecision()
//15-valueof()



