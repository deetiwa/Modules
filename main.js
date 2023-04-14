// JavaScript Modules => allow you to break up your code into separate files.This makes it easier to maintain a code-base.
// Modules are imported from external files with the import statement.using two fun^, 1. Export , 2. Import.

// import {message , user , test} from "./library.js";   // using alias name like(user as us)  call us.
// console.log(message);
// document.body.innerHTML = message;
// user("Indore");                        // pass argument in fun^
// let a = new test();                  // create object

// an other type use import method

import * as fun from "./library.js";   // using  * and alias (as) call all variable, function and class. 

 console.log(fun.message);

fun.user("Indore");
                    
let a = new fun.test();   

// Default function

import {default as app} from "./library.js";  

app();

import std from "./library.js";       

std ();



