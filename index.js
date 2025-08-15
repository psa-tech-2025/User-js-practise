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