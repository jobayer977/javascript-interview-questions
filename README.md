 ## Table of Contents

 - ### [00 Guide](#00-guide)
   - [Can I redeclare let and const variables?](#can-i-redeclare-let-and-const-variables)
   - [Difference between Function Scope vs Block Scope in JavaScript?](#difference-between-function-scope-vs-block-scope-in-javascript)
   - [Difference between Local and Global Variable ?](#difference-between-local-and-global-variable)
   - [Difference between var and let in JavaScript?](#difference-between-var-and-let-in-javascript)
   - [How garbage collection works in JavaScript ?](#how-garbage-collection-works-in-javascript)
   - [List down some of the features of ES6 ?](#list-down-some-of-the-features-of-es6)
   - [What are global variables ?](#what-are-global-variables)
   - [What are  namespaces?](#what-are-namespaces)
   - [What are PWAs used for?](#what-are-pwas-used-for)
   - [What are raw strings?](#what-are-raw-strings)
   - [What are some unique features of JavaScript ?](#what-are-some-unique-features-of-javascript)
   - [What are the benefit of event delegation?](#what-are-the-benefit-of-event-delegation)
   - [What does dynamic mean in JavaScript?](#what-does-dynamic-mean-in-javascript)
   - [What does it mean that JavaScript is "dynamic"?](#what-does-it-mean-that-javascript-is-dynamic)
   - [What is ES6 ?](#what-is-es6)
   - [what is function declaration and function expression ?](#what-is-function-declaration-and-function-expression)
   - [What is Hoisting ?](#what-is-hoisting)
   - [What is JavaScript?](#what-is-javascript)
   - [What is polyfill used for?](#what-is-polyfill-used-for)
   - [What is scope of variable in JavaScript ?](#what-is-scope-of-variable-in-javascript)
   - [What is shallow copied in javascript?](#what-is-shallow-copied-in-javascript)
   - [What is Stack overflow in Javascript?](#what-is-stack-overflow-in-javascript)
   - [What is the aim of the let keyword?](#what-is-the-aim-of-the-let-keyword)
   - [What is the Call Stack in JavaScript ?](#what-is-the-call-stack-in-javascript)
   - [What is the creation phase and execution phase in Javascript?](#what-is-the-creation-phase-and-execution-phase-in-javascript)
   - [What is the difference between DOM and BOM?](#what-is-the-difference-between-dom-and-bom)
   - [What is the difference between java and javascript](#what-is-the-difference-between-java-and-javascript)
   - [What is the difference between Shallow and Deep copy](#what-is-the-difference-between-shallow-and-deep-copy)
   - [What is the Temporal Dead Zone (TDZ) in JavaScript?](#what-is-the-temporal-dead-zone-tdz-in-javascript)
   - [What is use strict mode?](#what-is-use-strict-mode)
   - [What paradigm is Javascript ?](#what-paradigm-is-javascript)
   - [when does  document load  get executed?](#when-does-document-load-get-executed)
   - [when does DOMContentLoaded get executed?](#when-does-domcontentloaded-get-executed)
   - [Why should we use ES6 classes?](#why-should-we-use-es6-classes)
- ### [02 Asynchronous Javascript](#02-asynchronous-javascript)
   - [How do you load CSS and JS files dynamically ?](#how-do-you-load-css-and-js-files-dynamically)
   - [How do you run multiple promises together?](#how-do-you-run-multiple-promises-together)
   - [Polyfill promise.all function in js ?](#polyfill-promiseall-function-in-js)
   - [What are the 3 states of promise?](#what-are-the-3-states-of-promise)
- ### [03 Control flow](#03-control-flow)
   - [How to Scoping variables in JavaScript switch statement?](#how-to-scoping-variables-in-javascript-switch-statement)
   - [What are falsy values in JavaScript?](#what-are-falsy-values-in-javascript)
   - [What is strict mode?](#what-is-strict-mode)
   - [What is the purpose of the finally?](#what-is-the-purpose-of-the-finally)
   - [What is the use of break and continue statement in JavaScript?](#what-is-the-use-of-break-and-continue-statement-in-javascript)
- ### [04 Loops and iteration](#04-loops-and-iteration)
   - [Differences between for(..in) and for(..of) statement in JavaScript?](#differences-between-forin-and-forof-statement-in-javascript)
   - [How do you create an infinite loop?](#how-do-you-create-an-infinite-loop)
   - [What is for...of statement](#what-is-forof-statement)
   - [What is the difference between ( for... in ) and ( for... of ) statements?](#what-is-the-difference-between-for-in-and-for-of-statements)
   - [Why we use do while loop in JavaScript?](#why-we-use-do-while-loop-in-javascript)
- ### [05 Functions](#05-functions)
   - [What is the first-class function in Javascript?](#what-is-the-first-class-function-in-javascript)
   - [How do higher order functions work ?](#how-do-higher-order-functions-work)
   - [How to Use the Call, Apply, and Bind ?](#how-to-use-the-call-apply-and-bind)
   - [What are default values in the destructuring assignments?](#what-are-default-values-in-the-destructuring-assignments)
   - [What are Events in JavaScript?](#what-are-events-in-javascript)
   - [What does the isNaN () function?](#what-does-the-isnan-function)
   - [What is a arrow function in JavaScript?](#what-is-a-arrow-function-in-javascript)
   - [What is a pure function ?](#what-is-a-pure-function)
   - [What is a rest parameter ?](#what-is-a-rest-parameter)
   - [what is arrow function?](#what-is-arrow-function)
   - [What is currying function in JavaScript ?](#what-is-currying-function-in-javascript)
   - [What is destructuring assignment ?](#what-is-destructuring-assignment)
   - [What is eval used for ?](#what-is-eval-used-for)
   - [What is function default parameters?](#what-is-function-default-parameters)
   - [What is function rest parameters?](#what-is-function-rest-parameters)
   - [What is IIFE(Immediately Invoked Function Expression) ?](#what-is-iifeimmediately-invoked-function-expression)
   - [What is memoization ?](#what-is-memoization)
   - [What is recursion and why it is used?](#what-is-recursion-and-why-it-is-used)
   - [What is the arguments object?](#what-is-the-arguments-object)
   - [What is the purpose of setTimeout() function in JavaScript ?](#what-is-the-purpose-of-settimeout-function-in-javascript)
   - [What is the use of preventDefault method](#what-is-the-use-of-preventdefault-method)
   - [What is throttling?](#what-is-throttling)
   - [When closures are created in JavaScript ?](#when-closures-are-created-in-javascript)
   - [Where is anonymous function used?](#where-is-anonymous-function-used)
   - [Why callback function is used?](#why-callback-function-is-used)
- ### [06 Expressions and operators](#06-expressions-and-operators)
   - [Difference Between undefined and null ?](#difference-between-undefined-and-null)
   - [Difference TypeError and ReferenceError ?](#difference-typeerror-and-referenceerror)
   - [How in operator works in javascript ?](#how-in-operator-works-in-javascript)
   - [How to delete an object property ?](#how-to-delete-an-object-property)
   - [What does "!--" do in JavaScript?](#what-does-do-in-javascript)
   - [What is a debugger statement?](#what-is-a-debugger-statement)
   - [What is == and === in JavaScript?](#what-is-and-in-javascript)
   - [What is assignment expression ?](#what-is-assignment-expression)
   - [What is destructuring assignment?](#what-is-destructuring-assignment)
   - [What is immutability?](#what-is-immutability)
   - [What is NaN property?](#what-is-nan-property)
   - [What is nullish assignment?](#what-is-nullish-assignment)
   - [What is the ternary operator ?](#what-is-the-ternary-operator)
   - [What undefined property indicates?](#what-undefined-property-indicates)
   - [What’s the double exclamation sign for in JavaScript?](#whats-the-double-exclamation-sign-for-in-javascript)
- ### [07 Numbers and dates](#07-numbers-and-dates)
   - [Generate Random Number between 1 and 10 ?](#generate-random-number-between-1-and-10)
   - [How do you check a value is a number?](#how-do-you-check-a-value-is-a-number)
   - [How do you find the minimum and the maximum number of the array of numbers?](#how-do-you-find-the-minimum-and-the-maximum-number-of-the-array-of-numbers)
   - [How do you find the absolute value of a number?](#how-do-you-find-the-absolute-value-of-a-number)
   - [How to avoid scientific notation for large numbers in JavaScript?](#how-to-avoid-scientific-notation-for-large-numbers-in-javascript)
   - [What is BigInt?](#what-is-bigint)
   - [What uses parseFloat and parseInt?](#what-uses-parsefloat-and-parseint)
- ### [08 String](#08-string)
   - [How can repeat a string n times?](#how-can-repeat-a-string-n-times)
   - [How can we remove whitespace from a string?](#how-can-we-remove-whitespace-from-a-string)
   - [How do you make string first letter capitalized?](#how-do-you-make-string-first-letter-capitalized)
   - [How do you replace a specific part of a string?](#how-do-you-replace-a-specific-part-of-a-string)
   - [How to check a word in exists on a string?](#how-to-check-a-word-in-exists-on-a-string)
   - [What are tagged templates ?](#what-are-tagged-templates)
   - [What is the difference between staring startWith and starting endWith methods?](#what-is-the-difference-between-staring-startwith-and-starting-endwith-methods)
- ### [09 Regular expressions](#09-regular-expressions)
   - [when we should use regular expressions?](#when-we-should-use-regular-expressions)
- ### [10 Indexed collections](#10-indexed-collections)
   - [Differences between Objects and Maps ?](#differences-between-objects-and-maps)
   - [How can we check a value is a Array or not?](#how-can-we-check-a-value-is-a-array-or-not)
   - [How can we concatenated nested arrays?](#how-can-we-concatenated-nested-arrays)
   - [How do you check whether an array includes a particular value or not](#how-do-you-check-whether-an-array-includes-a-particular-value-or-not)
   - [How to check whether there is a specific value in the Array?](#how-to-check-whether-there-is-a-specific-value-in-the-array)
   - [How we can merge nested arrays in javascript?](#how-we-can-merge-nested-arrays-in-javascript)
   - [What is the purpose of Array reduce method?](#what-is-the-purpose-of-array-reduce-method)
   - [What is the purpose of some method in arrays ?](#what-is-the-purpose-of-some-method-in-arrays)
   - [What is the purpose of the array slice method ?](#what-is-the-purpose-of-the-array-slice-method)
   - [What is the use case of array concat method?](#what-is-the-use-case-of-array-concat-method)
- ### [11 Keyed collections](#11-keyed-collections)
   - [Deference between Array and Set in javascript?](#deference-between-array-and-set-in-javascript)
   - [What is difference between Map and Object?](#what-is-difference-between-map-and-object)
   - [What is Map object?](#what-is-map-object)
   - [What is the purpose of the Set in javascript?](#what-is-the-purpose-of-the-set-in-javascript)
- ### [12 Working with objects](#12-working-with-objects)
   - [Difference between getOwnPropertyNames vs Object.keys ?](#difference-between-getownpropertynames-vs-objectkeys)
   - [How can access an object's  values?](#how-can-access-an-objects-values)
   - [How can we set an object's prototype in JavaScript ?](#how-can-we-set-an-objects-prototype-in-javascript)
   - [How do you get objects all prototypes ?](#how-do-you-get-objects-all-prototypes)
   - [How do you get property descriptors of an object](#how-do-you-get-property-descriptors-of-an-object)
   - [How Prototype inheretated with Object.create() ?](#how-prototype-inheretated-with-objectcreate)
   - [What is Optional chaining ?](#what-is-optional-chaining)
   - [What happens if you define a property in an object, when a property with the same name is defined in the object's prototype?](#what-happens-if-you-define-a-property-in-an-object-when-a-property-with-the-same-name-is-defined-in-the-objects-prototype)
   - [What is prototype chain ?](#what-is-prototype-chain)
   - [What is constructor function?](#what-is-constructor-function)
   - [What is getter and setter in javascript?](#what-is-getter-and-setter-in-javascript)
   - [What is Object.assign() do ?](#what-is-objectassign-do)
   - [What is object in javascript?](#what-is-object-in-javascript)
   - [What is Object property descriptor?](#what-is-object-property-descriptor)
- ### [13 Class](#13-class)
   - [How can we define a private method in the javascript class?](#how-can-we-define-a-private-method-in-the-javascript-class)
   - [How do we set a property or method private in javascript?](#how-do-we-set-a-property-or-method-private-in-javascript)
   - [Is Class Declaration hoisted to the top?](#is-class-declaration-hoisted-to-the-top)
   - [What is a constructor method](#what-is-a-constructor-method)
   - [What is Abstraction in OOP ?](#what-is-abstraction-in-oop)
   - [What is class in javascript?](#what-is-class-in-javascript)
   - [What is Encapsulation in JavaScript?](#what-is-encapsulation-in-javascript)
   - [What is static method in javascript?](#what-is-static-method-in-javascript)
   - [What are the 4 pillars of OOP?](#what-are-the-4-pillars-of-oop)
- ### [14 Promises](#14-promises)
   - [Is it possible to chain promises after getting an Error?](#is-it-possible-to-chain-promises-after-getting-an-error)
   - [What are the cons of promises?](#what-are-the-cons-of-promises)
   - [What does promise all do?](#what-does-promise-all-do)
   - [What is a promise?](#what-is-a-promise)
   - [What is a promise.race() ?](#what-is-a-promiserace)
   - [What is Polymorphism in JavaScript ?](#what-is-polymorphism-in-javascript)
   - [What is promise chaining give an example?](#what-is-promise-chaining-give-an-example)
   - [What promise chaining ?](#what-promise-chaining)
- ### [15 Iterators and generators](#15-iterators-and-generators)
   - [What is iterable?](#what-is-iterable)
- ### [16 Meta Programming](#16-meta-programming)
   - [What is purpose of proxies in javascript?](#what-is-purpose-of-proxies-in-javascript)
- ### [17 modules](#17-modules)
   - [Difference between default export and named export ?](#difference-between-default-export-and-named-export)
   - [What are dynamic imports?](#what-are-dynamic-imports)
   - [What is defer in javascript?](#what-is-defer-in-javascript)
   - [What is type="module" in the <script> tag?](#what-is-typemodule-in-the-script-tag)
- ### [18 Client-side web APIs](#18-client-side-web-apis)
   - [How can we communicate between two different tabs?](#how-can-we-communicate-between-two-different-tabs)
   - [How do I modify the url without reloading the page](#how-do-i-modify-the-url-without-reloading-the-page)
   - [How to access DOM from web worker?](#how-to-access-dom-from-web-worker)
   - [How to get a specific query param value from an URL?](#how-to-get-a-specific-query-param-value-from-an-url)
   - [What are server-sent events?](#what-are-server-sent-events)
   - [What is cookies ?](#what-is-cookies)
   - [What is IndexedDB used for?](#what-is-indexeddb-used-for)
   - [What is Service Worker ?](#what-is-service-worker)
   - [What is the use case of session storage in the web application?](#what-is-the-use-case-of-session-storage-in-the-web-application)
   - [What is web storage?](#what-is-web-storage)
   - [Why do we use setInterval in JavaScript?](#why-do-we-use-setinterval-in-javascript)
   - [Why do we use web workers?](#why-do-we-use-web-workers)
- ### [19 Closures](#19-closures)
   - [What are closures?](#what-are-closures)
   - [What are closures scope chains?](#what-are-closures-scope-chains)
- ### [Coding Exercise](#coding-exercise)
   - [What is the output of below code](#what-is-the-output-of-below-code)
   - [What is the output of below code](#what-is-the-output-of-below-code)
  <br/><br/><br/><br/> 

 # 00 Guide
 
 
## Can I redeclare let and const variables?

No, you cannot redeclare let and const variables. If you do, it throws below error

```properties
Uncaught SyntaxError: Identifier 'someVariable' has already been declared
```
 

   
 ## Difference between Function Scope vs Block Scope in JavaScript?

**Function Scope**:
variables defined inside a function are not accessible outside the function.

```javascript
function foo() {
 var a = 1;
 function bar() {
  console.log(a); // 1
 }
 bar();
}

foo(); // 1
```

**Block Scope :**

This scope restricts the variable that is declared inside a specific block, from access by the outside of the block. The let & const keyword facilitates the variables to be block scoped.

```javascript
if (true) {
 let a = 1;
 console.log(a); // 1
}
console.log(a); // ReferenceError: a is not defined
```
 

   
 ## Difference between Local and Global Variable ?

**KEY DIFFERENCE**

- Local variable is declared inside a function or block scope whereas Global variable is declared outside the function.
- Local variables are created when the function has started execution and is lost when the function terminates, on the other hand, Global variable is created as execution starts and is lost when the program ends.
- Local variable doesn’t provide data sharing whereas Global variable provides data sharing.
- Local variables are stored on the stack whereas the Global variable are stored on a fixed location decided by the compiler.
 

   
 ## Difference between var and let in JavaScript?  

The main difference between let and var is that scope of a variable defined with let is limited to the block in which it is declared while variable declared with var has the global scope. So we can say that var is rather a keyword which defines a variable globally regardless of block scope.

Also, one difference between var and let is variable with var can be redeclared to some other value while variable could not be redeclared if it is defined with let.
 

   
 ## How garbage collection works in JavaScript ?

In JavaScript, the memory management process is automated. The browser takes care of that thing for us. When a variable function or object is created in javascript the memory space is created for the reading and write operations. after the operations are done and no longer references are connected to the variable then the garbage collector release the variables from memory spaces. The Garbage Collection mechanism in JavaScript is governed by two algorithms

 **Reference Counting Algorithm**
It determines the usefulness of an object by finding out if the object is being referenced by some other object or not.

**Mark and Sweep Algorithm.**
If an object is having zero references then it is effectively unreachable. So it is fit to be a garbage.
 

   
 ## List down some of the features of ES6 ?

Below are the list of some new features of ES6,

- Support for constants or immutable variables
- Block-scope support for variables, constants and functions
- Arrow functions
- Default parameters
- Rest and Spread Parameters
- Template Literals
- Multi-line Strings
- Destructuring Assignment
- Enhanced Object Literals
- Promises
- Classes
- Modules
 

   
 ## What are global variables ?

Global variables are those that are available throughout the length of the code without any scope. The var keyword is used to declare a local variable but if you omit it then it will become global variable


```javascript
msg = "Hello"; // var is missing, it becomes global variable
``` 

   
 ## What are  namespaces?

The namespace is a programming paradigm it's used to avoid variable naming collisions. Help to organize code into logical groups. JavaScript does not provide namespace by default. However, we can replicate this functionality by making a global object which can contain all functions and variables.

**Example**

```javascript
const service = {
 get: function () {
  // Get Api Implemented
 },
 put: function () {
  // put Api Implemented
 },
 post: function () {
  // post Api Implmented
 }
};

service.get();
service.post();
```
 

   
 ## What are PWAs used for?

Progressive Web Apps (PWAs) are web apps that use service workers, manifests, and other web-platform features in combination with progressive enhancement to give users an experience on par with native apps.
 

   
 ## What are raw strings?

 It's used to get the raw string form of template literals without processing to escape sequences (e.g. \n).

```javascript
var str = `Hello world \n Jon Snow`;
console.log(str);
// Hello world
//  Jon Snow

var rawStr = String.raw`Hello world \n Jon Snow`;
console.log(rawStr); //Hello world \n Jon Snow

```
 

   
 ## What are some unique features of JavaScript ?

There are at least three great things about JavaScript:

1. Full integration with HTML/CSS.
2. Simple and easy to understand syntax.
3. Supported by all modern browsers and enabled by default in all modern browsers. 

   
 ## What are the benefit of event delegation?

Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

- No need to add many handlers.
- When adding or removing elements, no need to add/remove handlers.
 

   
 ## What does dynamic mean in JavaScript?

JavaScript is a loosely typed or dynamic language because variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned/reassigned with values of all types.

```javascript
    let age = 50; // age is a number now
    age = "old"; // age is a string now
    age = true; // age is a boolean
```
 

   
 ## What does it mean that JavaScript is "dynamic"?

JavaScript is called a dynamic language because it doesn't just have a few dynamic aspects, pretty much everything is dynamic.

All variables are dynamic (both in type and existance), and even the code is dynamic. You can create new variables at runtime, and the type of variables is determined at runtime
 

   
 ## What is ES6 ?

ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.
 

   
 ## what is function declaration and function expression ?

**Function Declaration**
A function created with a function declaration is a Function object and has all the properties, methods and behavior of Function

```javascript
function add(a, b) {
 return a + b;
}
```

**Function Expression**
A Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

```javascript
const add = function (a, b) {
 return a + b;
};
```
 

   
 ## What is Hoisting ?

In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 

It allows us to call functions before even writing them in our code. 

Note: JavaScript only hoists declarations, not the initializations.

JavaScript allocates memory for all variables and functions defined in the program before execution. [Reference](https://www.geeksforgeeks.org/javascript-hoisting/) 

   
 ## What is JavaScript?
Javascript is a synchronized single-threaded programming language.  

   
 ## What is polyfill used for?

Polyfills allow web developers to use an API regardless of whether or not it is supported by a browser, and usually with minimal overhead. Typically they first check if a browser supports an API, and use it if available, otherwise using their own implementation.
 

   
 ## What is scope of variable in JavaScript ?

The scope of a variable is the region of your program in which it is defined. JavaScript variables have only two scopes.

- **Global Variables** − A global variable has global scope which means it can be defined anywhere in your JavaScript code
- **Local Variables** − A local variable will be visible only within a function or block (let,const) where it is defined. Function parameters are always local to that function
 

   
 ## What is shallow copied in javascript?

A shallow copy is a copy of the object itself. It does not copy the properties of the object. It just copies the reference to the object.

```javascript
const obj = {
 a: 1,
 b: 2
};

const obj2 = obj;
obj2.a = 2;

console.log(obj2); // {a: 2, b: 2}
console.log(obj); // {a: 2, b: 2}

```
 

   
 ## What is Stack overflow in Javascript?

The call stack has a maximum size assigned. Stack Overflow occurs when the number of function calls added to the stack increases the stack’s maximum limit (the call stack has a maximum size). A classic example to cause such a situation is Recursion. Recursion is a process in which a function calls itself until a terminating condition is found.

```javascript
function recursion(){ 
    recursion(); //a function calling itself 
}
recursion();
```

![stack overflow](./stack-overflow.png)
 

   
 ## What is the aim of the let keyword?

let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope.

```js
    function varTest() {
    var x = 1;
    {
        var x = 2;  // same variable!
        console.log(x);  // 2
    }
    console.log(x);  // 2
    }

    function letTest() {
    let x = 1;
    {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
    }

```  
 

   
 ## What is the Call Stack in JavaScript ?

The call stack is used by JavaScript to keep track of multiple function calls. It is like a real stack in data structures where data can be pushed and popped and follows the Last In First Out (LIFO) principle. We use call stack for memorizing which function is running right now. The below example demonstrates the call stack.

![callstack](./call-stack.png)
 

   
 ## What is the creation phase and execution phase in Javascript?

**Creation Phase**
It picks all function declarations and stores them in memory with their reference.  Also picks all variables and assigns undefined to them.

**Execution Phase**
In that phase read the code line by line and assigns variable values. and execute functions.
 

   
 ## What is the difference between DOM and BOM?

They're just different objects you're dealing with:

**DOM**

 The DOM is the **Document object model** which is deals with the document, the HTML elements themselves, e.g `document` and all traversal you would do in it, events, etc.

 **BOM**

 The BOM is the Browser Object Model, which deals with browser components aside from the document, like history, location, navigator and screen (as well as some others that vary by browser).

|BOM|DOM|
|--|--|
|Is Browser Object Model| Is Document Object Model |
|Used for access and manipulation of the browser window |Used to manipulate the HTML document.
|No standard set of rules, each browser has its own standards for implementing BOM | Has a set standard of rules to be used across documents.
 

   
 ## What is the difference between java and javascript

Both are totally unrelated programming languages and no relation between them. Java is statically typed, compiled, runs on its own VM. Whereas Javascript is dynamically typed, interpreted, and runs in a browser and nodejs environments. Let's see the major differences in a tabular format,

| Feature | Java | JavaScript |
|---- | ---- | -----
| Typed | It's a strongly typed language | It's a dynamic typed language |
| Paradigm | Object oriented programming | Prototype based programming |
| Scoping | Block scoped | Function-scoped |
| Concurrency | Thread based | event based |
| Memory | Uses more memory | Uses less memory. Hence it will be used for web pages |
 

   
 ## What is the difference between Shallow and Deep copy

**Shallow Copy:** Shallow copy is a bitwise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

```javascript
var empDetails = {
  name: "John",
  age: 25,
  expertise: "Software Developer",
};
```

to create a duplicate

```javascript
var empDetailsShallowCopy = empDetails; //Shallow copying!
```

if we change some property value in the duplicate one like this:

```javascript
empDetailsShallowCopy.name = "Johnson";
```

The above statement will also change the name of empDetails, since we have a shallow copy. That means we're losing the original data as well.

**Deep copy:** A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

```javascript
var empDetails = {
  name: "John",
  age: 25,
  expertise: "Software Developer",
};
```

Create a deep copy by using the properties from the original object into new variable

```javascript
var empDetailsDeepCopy = {
  name: empDetails.name,
  age: empDetails.age,
  expertise: empDetails.expertise,
};
```

Now if you change empDetailsDeepCopy.name, it will only affect empDetailsDeepCopy & not empDetails
 

   
 ## What is the Temporal Dead Zone (TDZ) in JavaScript ?

A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.

```js
    function somemethod() {
        console.log(counter1); // undefined
        console.log(counter2); // ReferenceError
        var counter1 = 1;
        let counter2 = 2;
    }
```
 

   
 ## What is use strict mode?

ECMAScript 5 introduced the concept of "strict mode" . It allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions . Its main purpose is to do more checking.

**With Strict Mode**

```javascript
    'use strict';
    username = 'Jon';
    console.log(username);
    // Uncaught ReferenceError: username is not defined
```
**WithOut Strict Mode**

```javascript
    username = 'Jon';
    console.log(username);
    //Jon
``` 

   
 ## What paradigm is Javascript ?

JavaScript is a multi-paradigm language, supporting imperative/procedural programming, Object-Oriented Programming and functional programming. JavaScript supports Object-Oriented Programming with prototypical inheritance.
 

   
 ## when does  document load  get executed?

The load event is fired when the whole page has loaded, including all dependent resources(stylesheets, images). 

   
 ## when does DOMContentLoaded get executed?

when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading 

   
 ## Why should we use ES6 classes?

ES6 classes are syntactic sugar for the prototypical class system we use today. They make code more concise and self-documenting, which is reason enough to use them.

- The syntax is more clear and less error-prone
- The syntax is also way more clean and easier to understand.
- Setting up inheritance is really easy.
- You can inherit from Array, which wasn't possible before.
- In a subclass, calling a parent's function is very easy: just type super.

**WithOut ES6 class:**

```javascript
    var Foo = (function () {
    function Foo(bar) {    
        this._bar = bar;
    }

    Foo.prototype.getBar = function () {
        return this._bar;
    }

    return Foo;
    })();
```

**With ES6 class:**
The syntax is also way more clean and easier to understand.

```javascript
class Foo {
    constructor(bar) {
        this._bar = bar;
    }

    getBar() {
        return this._bar;
    }
}
```
 

# 02 Asynchronous Javascript
 
 ## How do you load CSS and JS files dynamically ?

You can create both link and script elements in the DOM and append them as children to the head tag. Let's create a function to add script and style resources as below,

```javascript
function loadAssets(filename, filetype) {
  if (filetype == "css") {
    // External CSS file
    var fileReference = document.createElement("link");
    fileReference.setAttribute("rel", "stylesheet");
    fileReference.setAttribute("type", "text/css");
    fileReference.setAttribute("href", filename);
  } else if (filetype == "js") {
    // External JavaScript file
    var fileReference = document.createElement("script");
    fileReference.setAttribute("type", "text/javascript");
    fileReference.setAttribute("src", filename);
  }
  if (typeof fileReference != "undefined")
    document.getElementsByTagName("head")[0].appendChild(fileReference);
}
```
 

   
 ## How do you run multiple promises together?

Handle multiple promises and complete each one before starting the next one. The `Promise.all` It takes an array of promises and returns a single promise.

```javascript
const promiseOne = new Promise((resolve, reject) => {
 setTimeout(() => {
  resolve('one');
 }, 1000);
});

const promiseTwo = new Promise((resolve, reject) => {
 setTimeout(() => {
  resolve('two');
 }, 2000);
});

const promiseThree = new Promise((resolve, reject) => {
 setTimeout(() => {
  resolve('three');
 }, 3000);
});

const resolved = Promise.all([promiseOne, promiseTwo, promiseThree]).then((results) => {
 console.log(results);
});

```
 

   
 ## Polyfill promise.all function in js ?

```javascript
function all(promises) {
 return new Promise((resolve, reject) => {
  let count = 0;
  let results = [];
  promises.forEach((promise, index) => {
   promise
    .then((result) => {
     results[index] = result;
     count++;
     if (count === promises.length) {
      resolve(results);
     }
    })
    .catch(reject);
  });
 });
}
```

```javascript
const promiseOne = new Promise((resolve, reject) => {
 setTimeout(() => {
  resolve('one');
 }, 1000);
});

const promiseTwo = new Promise((resolve, reject) => {
 setTimeout(() => {
  resolve('two');
 }, 2000);
});

const promiseThree = new Promise((resolve, reject) => {
 setTimeout(() => {
  resolve('three');
 }, 3000);
});

const resolved = all([promiseOne, promiseTwo, promiseThree]).then((results) => {
 console.log(results);
});

```
 

   
 ## What are the 3 states of promise?

**Pending**
the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to fetch(), and the request is still being made.

**Fulfilled**
The asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called.

**Rejected**
The asynchronous function has failed. When a promise is rejected, its catch() handler is called.
 

# 03 Control flow
 
 ## How to Scoping variables in JavaScript switch statement?

when you declare variable in case statements, they would hoisted to the switch statement. I would show you a very simple way to make sure the variables you declare in your case statements can only be accessed from that block.

One important point to remember is that each case statement is not a block. Variables declared anywhere within the switch statement is locally scoped to the switch statement.

```js
    let number  = 2;

    switch (number) {
        case 1: 
            let message = "first number";
            console.log(message)
            break;
        case 2:
            let message = "second number";
            console.log(message)
            break;
    case 3:
            let message = "third number";
            console.log(message)
            break;
        default
            let message = "second number";
            console.log(message)
            break;
    }

    //This throws a syntax error: identifier "message" 
    //has already been declared
```

There are cases where you might need yo hold different variable values in each of the case statements. It's possible to keep a variable scoped to the case statement. There's a very easy fix for this, Let's solve this

```js
    let number  = 2;

    switch (number) {
        case 1: { // braces make the case statement a block
            let message = "number" + number; // this remains in this block
            console.log(message)
            break;
        }
        case 2: {
            let message =  "number" + number; // this is a valid syntax
            console.log(message)
            break;
        }
        case 3: {
            let message = "number" + number; 
            console.log(message)
            break;
        }
        default
            let message =  "number" + number;
            console.log(message)
            break;
    }
```

By wrapping a block in braces, any variable declared within that block is only visible within the block,and is garbage collected once the block ends.

With this syntax, each of these variables are declared within a block, scoped away from each other. They can only be accessed from within the case scope and thrown away once the block ends.

[Reference](https://dev.to/robogeek95/scoping-variables-in-the-switch-statement-1gig)
 

   
 ## What are falsy values in JavaScript?

Those are Essentials falsy values in Javascript.

```javascript
false
undefined
null
NaN
0
+0
-0
""
''
``
```
 

   
 ## What is strict mode?

Strict mode is a way to tell the JavaScript engine to be more strict when running your code. Strict mode changes some of the ways that JavaScript treats your code to be more predictable and to prevent you from making errors. Strict mode is not a way to enforce the coding style of your code, but it can help you to be more predictable.

Strict mode can be enabled by adding the strict mode directive at the beginning of your code or before any statement which you want to be in strict mode.

**Global scope strict mode**

```javascript
'use strict';
```

**Local scope strict mode**

```javascript
function foo() {
 'use strict';
 return this;
}

```
 

   
 ## What is the purpose of the finally?

The final statement executes after the try..catch statement gets a pass. Regardless of the result. If get an error on the catch block or closed on the try block. it will always get executed.

```javascript
var result = 18;
try {
 if (result > 10) {
  throw new Error('result is too large');
 }
} catch (e) {
 console.log(e);
} finally {
 console.log('finally');
}

```

**Output**

```properties
 Error: result is too large
 finally
```
 

   
 ## What is the use of break and continue statement in JavaScript?

**Break Statement**
The break statement is used at an instance whereby satisfying the condition being specified, the whole loop gets skipped and it takes you out of the loop. In other words, the loop is stopped

```javascript
for (i=1; i<=8; i++){
  if (i === 5) break;
  console.log(i);
}
```

**Continue**
Let’s consider a situation where we are in a loop and we desire to break one iteration whenever a specified condition occurs and then we continue with the next iteration in the loop.

The Continue statement is going to fulfill that desire for us. Unlike break, the continue statement “jumps over” to the next iteration/execution of the loop.

Whenever a continue statement takes place, the loop condition is checked to see if the condition is satisfied or true and if so, it goes towards the next iteration.

```javascript
for (i = 1; i < 8; i++) {
  if (i === 3 || i === 4)
  continue;
  console.log(i);
}
```
 

# 04 Loops and iteration
 
 ## Differences between for(..in) and for(..of) statement in JavaScript?

**for (..in) loop**
The JavaScript for (..in) statement loops through the enumerable properties of an object. The loop will iterate over all enumerable properties of the object.

```javascript
    const obj = {
        a: 1,
        b: 2,
        c: 3
    };

    for (let key in obj) {
        console.log(key);
    }
```

**for (..of) loop**
This for (..of) statement lets you loop over the data structures that are iterable such as Arrays, Strings, Maps, Node Lists, and more. It calls a custom iteration hook with instructions to execute on the value of each property of the object.

```javascript
    const obj = {
        a: 1,
        b: 2,
        c: 3
    };

    for (let key of Object.entries(obj)) {
     console.log(key);
    }

```
 

   
 ## How do you create an infinite loop?

We can create an infinity loop using for loop without expression and also a while loop gave the starting condition true.

```javascript
    for (;;) {}
    while (true) {}
```
 

   
 ## What is for...of statement

The JavaScript for of statement loops through the values of an iterable object. It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

```javascript
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

// BMW
// Volvo
// Mini
```
 

   
 ## What is the difference between ( for... in ) and ( for... of ) statements?

**for in** loops over enumerable property names of an object.

```javascript
var obj = {
 a: 1,
 b: 2,
 c: 3
};

for (var key in obj) {
 console.log(key);
}

// a
// b
// c

```

**for of** (new in ES6) does use an object-specific iterator and loops over the values generated by that.

```javascript
var obj = {
 a: 1,
 b: 2,
 c: 3
};

for (let item of Object.entries(obj)) {
 console.log(item);
}

// Output:
// [ 'a', 1 ]
// [ 'b', 2 ]
// [ 'c', 3 ]

```
 

   
 ## Why we use do while loop in JavaScript?

The do..while loop is the variant of the while loop. It's executed once before checking the condition is true. Then it will repeat the condition as long as the condition is true.

```javascript
let number = 1;

do {
 number++;
 console.log(number);
} while (number < 10);

```
 

# 05 Functions
 
 ## What is the first-class function in Javascript?

A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

**Example**

```js
    function sayHello() {
    return "Hello, ";
    }
    function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
    }
    // Pass `sayHello` as an argument to `greeting` function
    greeting(sayHello, "JavaScript!");
    // Hello, JavaScript!
```   

   
 ## How do higher order functions work ?

A function that receives another function as an argument or that returns a new function or both is called Higher-order functions. Higher-order functions are only possible because of the First-class function.

```js
   const greet =  function(name){
      return function(m){
      
         console.log(`Hi!! ${name}, ${m}`);
      }
   }
   
   const greet_message = greet('ABC');
   greet_message("Welcome To GeeksForGeeks")
```

We can also call the function like this also — greet(‘ABC’)(‘Welcome To GeeksForGeeks’), It will also give the same output.

```console
Hi!! ABC, Welcome To GeeksForGeeks
``` 

   
 
### How to Use the Call, Apply, and Bind ?

#### Call  

Call invokes the function and allows you to pass in arguments one by one.

```js  
    const user = {
        name: 'Jobayer Hossain',
    }

    function greet(greet, ask) {
        return `Hello ${greet} ${this.name} ${ask}`
    }

    const userJonCall = greet.call(user, 'Sir,', 'How are you ?')
    // Hello Sir, Jobayer Hossain How are you ?

```

#### Apply  

Apply invokes the function and allows you to pass in arguments as an array.

```js  
    const user = {
        name: 'Jobayer Hossain',
    }

    function greet(greet, ask) {
        return `Hello ${greet} ${this.name} ${ask}`
    }

    
    const userJonApply = greet.apply(user, ['Sir', 'How are your?'])
    // Hello Sir, Jobayer Hossain How are you?

```

#### Bind  

Bind returns a new function, allowing you to pass in a this array and any number of arguments.

```js  
    const user = {
        name: 'Jobayer Hossain',
    }

    function greet(greet, ask) {
        return `Hello ${greet} ${this.name} ${ask}`
    }
    
    const userJonBind = greet.bind(user)
    const userJonResponse = userJonBind('Sir', 'How are your?')
    // Hello Sir, Jobayer Hossain How are you ?

```
 

   
 ## What are default values in the destructuring assignments?

When destructuring happens the property's initial value was undefined now we can assign an initial value to the restructuring property instant of holding it undefined.

**Arrays destructuring:**

```javascript
var x, y, z;

[x = 2, y = 4, z = 6] = [10];
console.log(x); // 10
console.log(y); // 4
console.log(z); // 6
```

**Objects destructuring:**

```javascript
var { x = 2, y = 4, z = 6 } = { x: 10 };

console.log(x); // 10
console.log(y); // 4
console.log(z); // 6
```
 

   
 ## What are Events in JavaScript?

Javascript has events that provide a dynamic interface to a webpage. These events are connected to elements in the Document Object Model(DOM). 

   
 ## What does the isNaN () function?

The isNaN() function is used to determine whether a value is an illegal number (Not-a-Number) or not. i.e, This function returns true if the value equates to NaN. Otherwise it returns false.

```javascript
isNaN("Hello"); //true
isNaN("100"); //false
``` 

   
 
### What is a arrow function in JavaScript?

Arrow functions have a few important distinctions in how they work that distinguish them from traditional functions, as well as a few syntactic enhancements. The biggest functional differences are that arrow functions do not have their own this binding or prototype and cannot be used as a constructor. Arrow functions can also be written as a more compact alternative to traditional functions, as they grant the ability to omit parentheses around parameters and add the concept of a concise function body with implicit return.

#### Cleaner Syntax

```js  
    const sum = (a, b) => {
        return a + b
    }
    sum(10, 10) // 20
```

#### `this` Bindings

```js  
    const sum = () => {
        return this
    }
    sum() // [object Window]
```

### Constructor

```js
    const person = () => {}
    const p = new person()
   // Uncaught TypeError: person is not a constructor
```  
 

   
 ## What is a pure function ?

A Pure function is a function where the return value is only determined by its arguments without any side effects. 

```js 
   function sum(a, b) {
      return a + b;
   }

   sum(10,20) // 30

``` 

   
 ## What is a rest parameter ?

Rest parameter is a way to provide handled uncountable params in a function. It's useful when we don't know how many parameters are coming from it's accept all unknown parameters as an array of values.

```javascript
    function getNames(...rest) {
        console.log(rest);
    }

    console.log(getNames('John', 'Doe', 'Jane', 'Doe'));
    // ['John', 'Doe', 'Jane', 'Doe']
```
 

   
 ## what is arrow function?

Arrow function is a function expression that has a shorter syntax than function declaration. And it is also a function expression that has no name. Arrow function does not have own this, arguments, super, or new.target.

```javascript
function add(a, b) {
 return a + b;
}

const add = (a, b) => {
 return a + b;
};

```
 

   
 ## What is currying function in JavaScript ?

It is a technique in functional programming, transforming of the function of multiple arguments into several functions of a single argument in sequence. It is also called nested function is ECMAScript


```js

    // Noncurried version
    const add = (a, b, c)=>{
        return a+ b + c
    }
    console.log(add(2, 3, 5)) // 10

    // Curried version
    const addCurry =(a) => {
        return (b)=>{
            return (c)=>{
                return a+b+c
            }
        }
    }
    console.log(addCurry(2)(3)(5)) // 10

``` 

   
 ## What is destructuring assignment ?

The destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables.

```javascript
var [one, two, three] = ["JAN", "FEB", "MARCH"];

console.log(one); // "JAN"
console.log(two); // "FEB"
console.log(three); // "MARCH"
```

```javascript
var { name, age } = { name: "John", age: 32 };

console.log(name); // John
console.log(age); // 32
```
 

   
 ## What is eval used for ?

The eval() function evaluates JavaScript code represented as a string and returns its completion value. The source is parsed as a script.

```javascript
    console.log(eval('2 + 2'));
    // 4
```
 

   
 ## What is function default parameters?

 Default parameters are parameters that are set to a default value if they are not passed to the function. Default parameters are useful for functions that have optional parameters. Default parameters are also useful for functions that have multiple parameters with default values.

```javascript
// Example
function greet(name = 'Anonymous') {
 console.log('Hello ' + name + '!');
}

greet(); // Hello Anonymous!
```
 

   
 ## What is function rest parameters?

Rest parameters are used to represent an indefinite number of arguments. Rest parameters are not mandatory. It is useful when you want to represent an indefinite number of arguments as an array.

```javascript
function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```
 

   
 ## What is IIFE(Immediately Invoked Function Expression) ?

IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

```js
    (function () {
    // logic here
    })();
```

The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below,

```js
    (function () {
        var message = "IIFE";
        console.log(message);
        })();
    console.log(message); //Error: message is not defined
``` 

   
 ## What is memoization ?

Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache. Let's take an example of adding function with memoization,

```javascript
    const memoizAddition = () => {
    let cache = {};
    return (value) => {
        if (value in cache) {
        console.log("Fetching from cache");
        return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
        } else {
        console.log("Calculating result");
        let result = value + 20;
        cache[value] = result;
        return result;
        }
    };
    };
    // returned function from memoizAddition
    const addition = memoizAddition();
    console.log(addition(20)); //output: 40 calculated
    console.log(addition(20)); //output: 40 cached
``` 

   
 ## What is recursion and why it is used?

A function that calls itself is called a recursive function. In some ways, recursion is analogous to a loop. Both execute the same code multiple times, and both require a condition (to avoid an infinite loop, or rather, infinite recursion in this case).

```javascript
const factorial = function fac(n) {
 return n < 2 ? 1 : n * fac(n - 1);
};

factorial(3);
 

   
 ## What is the arguments object?

The arguments object is an array-like object containing the arguments passed to a function.  The arguments object is a local variable within a function and is not accessible from outside the function.

```javascript
// Example
function sum() {
 var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
 return sum;
}
sum(1, 2, 3); // 6
```
 

   
 ## What is the purpose of setTimeout() function in JavaScript ?

The setTimeout() method allows you to execute a piece of code after a certain amount of time has passed. You can think of the method as a way to set a timer to run JavaScript code at a certain time.

For example, the code below will print "Hello World" to the JavaScript console after 2 seconds have passed:

```javascript
    setTimeout(function(){
        console.log("Hello World");
    }, 2000);

    console.log("setTimeout() example...");
```

You can also pass additional parameters to the setTimeout() method that you can use inside the function as follows:

```javascript
    function greeting(name, role){
    console.log(`Hello, my name is ${name}`);
    console.log(`I'm a ${role}`);
    }

    setTimeout(greeting, 3000, "Nathan", "Software developer");
```
 

   
 ## What is the use of preventDefault method

The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur. For example, prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyperlink are some common use cases.

```javascript
document
  .getElementById("link")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });
```
 

   
 ### What is throttling?
Throttling is a technique used to limit the execution of an event handler function, even when this event triggers continuously due to user actions. The common use cases are browser resizing, window scrolling etc.
The below example creates a throttle function to reduce the number of events for each pixel change and trigger scroll event for each 100ms except for the first event.
```js
const throttle = (fn, limit) => {
	let isThrottled = false
	return (...args) => {
		if (isThrottled) return
		isThrottled = true
		fn.apply(this, args)
		setTimeout(() => {
			isThrottled = false
		}, limit)
	}
}
const sum = (a) => {
	console.log(a)
	return a + 10
}
const throttled = throttle(() => sum(10), 1000)
document.body.addEventListener('click', () => throttled())
``` 

   
 ## When closures are created in JavaScript ?

When an inner function uses the outer function's variable, then closer is created in javascript.

```javascript
// Closure is not created example
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

// Closure is created example
function addSquares(a, b) {
    function square(x) {
        return a * x;
    }
    return square(a) + square(b);
}
```
 

   
 ## Where is anonymous function used?

Anonymous functions are often arguments being passed to higher-order functions, or used for constructing the result of a higher-order function that needs to return a function. If the function is only used once, or a limited number of times, an anonymous function may be syntactically lighter than using a named function. An anonymous function can be useful for creating IIFE(Immediately Invoked Function)

```javascript
function (optionalParameters) {
  //do something
}

const myFunction = function(){ //Anonymous function assigned to a variable
  //do something
};

[1, 2, 3].map(function(element){ //Anonymous function used as a callback function
  //do something
});
```
 

   
 ## Why callback function is used?

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

**Here is a quick example:**

```javascript
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```
 

# 06 Expressions and operators
 
 ## Difference Between undefined and null ?

`undefined` is a variable that refers to something that doesn't exist, and the variable isn't defined to be anything. `null` is a variable that is defined but is missing a value.

```javascript
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```
 

   
 ## Difference TypeError and ReferenceError ?

A **ReferenceError** occurs when you try to use a variable that doesn't exist at all.

A **TypeError** occurs when the variable exists, but the operation you're trying to perform is not appropriate for the type of value it contains. In the case where the detailed message says "is not defined", this can occur if you have a variable whose value is the special undefined value, and you try to access a property of it.
 

   
 ## How in operator works in javascript ?

It is used to check if a value is present in an array or not. It returns true if the value is present in the array and false if not.

 **Array Example**

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(1 in arr); // true
console.log(6 in arr); // false
```

**Example Object**

```javascript
const obj = {
 name: 'John',
 age: 30
};
console.log('name' in obj); // true
console.log('age' in obj); // true
console.log('job' in obj); // false
```
 

   
 ## How to delete an object property ?

Using the delete operator. THe delete operator deletes a property from an object. It returns true if the property was deleted, false if the property was not found.

```javascript
var person = {
 name: 'John',
 age: 30
};

delete person.age;

console.log(person.age); // undefined

```
 

   
 ## What does "!--" do in JavaScript?

That's not a special operator, it's 2 standard operators one after the other:

- A prefix decrement (--)
- A logical not (!)

```javascript
x = 1;
if (!x) // false
if (!--x) // becomes 0 and then uses the NOT operator,
          // which makes the condition to be true
```
 

   
 ## What is a debugger statement?

The debugger keyword is turned on, It stops the execution of JavaScript code. Otherwise, it has no effect.
 

   
 ## What is == and === in JavaScript?

The == and === operators are used to check the equality of two operands. The ‘==’ operator tests for abstract equality i.e. it does the necessary type conversions before doing the equality comparison.
But the ‘===’ operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, when compared, it will return false.

**==**

```javascript
var a = 1;
var b = '1';

if (a == b) {
 console.log('EQUAL');
} else {
 console.log('NOT EQUAL');
}
// output: EQUAL
```

**===**

```javascript
var a = 1;
var b = '1';

if (a === b) {
 console.log('EQUAL');
} else {
 console.log('NOT EQUAL');
}
// output: NOT EQUAL
```
 

   
 ## What is assignment expression ?

Assignment expression is an expression that has a left hand side and a right hand side. The left hand side is the variable that is assigned a value. The right hand side is the value that is assigned to the variable.

**Example:**

```javascript
var x = 5;
var y = x;
console.log(y); // 5
```

 **Example:**

```javascript
var x = 5;
var y = x;
x = 10;
console.log(y); // 5
```
 

   
 ## What is destructuring assignment?

Destructuring assignment is a JavaScript feature that allows you to assign values to variables from arrays and objects. It is done by destructuring the array or object and then assigning the variables. It is useful when you want to assign a value to a variable from an array or object. For example, you can assign the first and last name of a person to separate variables.

 **Object Example:**

```javascript
const person = {
 firstName: 'John',
 lastName: 'Doe'
};

const { firstName, lastName } = person;
console.log(firstName); // John
console.log(lastName); // Doe

```

**Array Example:**

```javascript
const people = ['John', 'Doe', 'Jane', 'Doe'];
const [firstName, lastName, ...rest] = people;
console.log(firstName); // John
console.log(lastName); // Doe
console.log(rest); // ['Jane', 'Doe']
```
 

   
 
## What is immutability?

Immutability is the property of data that never changes. It is the property of data that never changes. For example, a person's name is immutable. If you change a person's name, you can't change it back.

```javascript
'use strict';
const person = {
	name: 'John',
	age: 30
};
// Make it immutable
Object.freeze(person);
```
 

   
 ## What is NaN property?

The NaN property is a global property that represents "Not-a-Number" value. i.e, It indicates that a value is not a legal number. It is very rare to use NaN in a program but it can be used as return value for few cases 

   
 ## What is nullish assignment?

The nullish assignment is a special operator that allows you to assign a value to a variable if the value is null or undefined. It is used to avoid the need to use an if statement to check if a variable is null or undefined. For example: var x = y ?? 'default'; // x is set to y if y is not null or undefined, otherwise x is set to 'default'.

```javascript
var x = false;
var result = x ?? 'default';
console.log(result); // false
```

```javascript
var x = undefined;
var result = x ?? 'default';
console.log(result); // default
```
 

   
 ## What is the ternary operator ?

The ternary operator is a short hand for an if statement. It is used to check if a condition is true or false and execute a different code block depending on the result. The syntax is: condition ? true code block : false code block.

**Example In ternary operator:**

```javascript
var age = prompt('What is your age?');
var ageInNumber = parseInt(age);

var message = ageInNumber >= 18 ? 'You are old enough to drive' : 'You are not old enough to drive';
console.log(message);

```

**Example In if statement:**

```javascript
var age = prompt('What is your age?');
var ageInNumber = parseInt(age);

if (ageInNumber >= 18) {
 console.log('You are old enough to drive');
} else {
 console.log('You are not old enough to drive');
}

```
 

   
 ## What undefined property indicates?

A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value.

```javascript
    let x;
    if (typeof x === 'undefined') {
    // these statements execute
    }
```
 

   
 ## What’s the double exclamation sign for in JavaScript?

it's short way to cast a variable to be a boolean (true or false) value. The !! ensures the resulting type is a boolean (true or false).

```javascript
    console.log(!!"foo") --> true
    console.log(!!null) --> false
```
 

# 07 Numbers and dates
 
 ## Generate Random Number between 1 and 10 ?

```javascript

var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
```
 

   
 ## How do you check a value is a number?

The `isNaN()` method determines whether a value is an illegal number. If the value is not a number, then the method returns true. Otherwise, it returns false.

**Example**

```javascript
var x = '5';
var y = 'Hello';

console.log(isNaN(x)); // false
console.log(isNaN(y)); // true
```
 

   
 ## How do you find the minimum and the maximum number of the array of numbers?

There are various ways to solve this problem. One of the simplest ways is to use built-in functions. and the other way is to use a loop and if-else statement.

**Using built-in functions**

```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var min = Math.min.apply(Math, numbers);
var max = Math.max.apply(Math, numbers);

console.log(min); // 1
console.log(max); // 10
```

**Using a loop and if-else statement.**

```javascript
var min = numbers[0];
var max = numbers[0];

for (var i = 0; i < numbers.length; i++) {
 if (numbers[i] < min) {
  min = numbers[i];
 }
 if (numbers[i] > max) {
  max = numbers[i];
 }
}

console.log(min); // 1
console.log(max); // 10
```
 

   
 ## How do you find the absolute value of a number?

Yes, it is. The `abs()` method returns the absolute value of a number. for example, the `abs()` method returns the absolute value of -5: 5.

```javascript
var x = -5;
Math.abs(x); // 5
```
 

   
 ## How to avoid scientific notation for large numbers in JavaScript?

To avoid scientific notation, use the `toFixed(n)` method. The `toFixed(n)` method rounds a number to n decimal places. For example, the following code rounds the number to two decimal places:

```javascript
var x = 12.3456;
var y = x.toFixed(2);
console.log(y); // 12.35
```
 

   
 ## What is BigInt?

BigInt is a new data type in JavaScript that allows you to store very large numbers. For example, you can store a number with more than 53 bits of precision.

```javascript
var a = BigInt(1234567890123456789012345678901234567890);
var b = BigInt(1234567890123456789012345678901234567890);

console.log(a + b); // 1234567890123456789012345678901234567891

```
 

   
 ## What uses parseFloat and parseInt?

`parseFloat` and parseInt are used to convert a string to a number. parseFloat converts a string to a floating point number and parseInt converts a string to an integer. It is important to note that parseFloat and parseInt do not convert a string to a number if the string contains a decimal point. for example, parseFloat("1.2") will return 1.2 and parseInt("1.2") will return 1.

**Example**

```javascript
var num = '1.2';

parseFloat(num); // 1.2
parseInt(num); // 1
```
 

# 08 String
 
 ## How can repeat a string n times?

We can use the repeat method. Repeat method takes a string and a number and returns a new string that is n times the original string.

```javascript
var str = 'Hello';
var n = 3;

var newStr = str.repeat(n);
console.log(newStr); // HelloHelloHello
```
 

   
 ## How can we remove whitespace from a string?

use the string built-in method .trim() method to remove whitespace from a string. But be careful, this method only removes whitespace from the beginning and end of the string.

```javascript
var str = '   Hello World   ';
str.trim(); // returns "Hello World"
```
 

   
 ## How do you make strings first letter capitalized?

The first letter of the string is capitalized using the `toUpperCase()` method. So first we need to get the first letter of the string and then we can use the `toUpperCase()` method to capitalize it.

**Example:**

```javascript
var str = 'hello world';
var firstLetter = str.charAt(0);
var restOfString = str.slice(1);
var capitalizedString = firstLetter.toUpperCase() + restOfString; //
console.log(capitalizedString); // Hello World
```

**Explanation:**

We get the first letter of the string and then we use the `toUpperCase()` method to capitalize it. We then concatenate the capitalized letter with the rest of the string using the `slice()` method. The `slice()` method returns a new string from the original string based on the start and end index provided.
 

   
 ## How do you replace a specific part of a string?

Use the replace method. The replace method takes two arguments: the first is the string to be replaced, and the second is the string to replace it with and returns a new string. For example, if you wanted to replace the word "hello" with "goodbye", you would use the replace method like this: "hello".replace("hello", "goodbye");

```javascript
var str = 'hello world';
var newStr = str.replace('hello', 'goodbye');
// newStr: "goodbye world"
```
 

   
 ## How to check a word in exists on a string?

There are various ways to check a word in exist on string on not. but the most efficient way is to use includes method.

**Using includes method**

```javascript
var str = "Hello World"
console.log(str.includes("World")) // true
```

**Using indexOf method**

```javascript
var str = "Hello World"
console.log(str.indexOf("World")) // 6
```

**Using search method**

```javascript
var str = "Hello World"
console.log(str.search("World")) // 6
```

**Using match method**

```javascript
var str = "Hello World"
console.log(str.match("World")) // ["World"]
```
 

   
 ## What are tagged templates ?

Tagged templates are an enhanced form of literal templates. It allows parsing templates with a function. The function accepts the first parameter as an array of strings and the remaining parameters as expression values.

**Example**

```javascript
    var user1 = "John";
    var skill1 = "JavaScript";
    var experience1 = 15;

    var user2 = "Kane";
    var skill2 = "JavaScript";
    var experience2 = 5;

    function myInfoTag(strings, userExp, experienceExp, skillExp) {
    var str0 = strings[0]; // "Mr/Ms. "
    var str1 = strings[1]; // " is a/an "
    var str2 = strings[2]; // "in"

    var expertiseStr;
    if (experienceExp > 10) {
        expertiseStr = "expert developer";
    } else if (skillExp > 5 && skillExp <= 10) {
        expertiseStr = "senior developer";
    } else {
        expertiseStr = "junior developer";
    }

    return `${str0}${userExp}${str1}${expertiseStr}${str2}${skillExp}`;
    }

    var output1 = myInfoTag`Mr/Ms. ${user1} is a/an ${experience1} in ${skill1}`;
    var output2 = myInfoTag`Mr/Ms. ${user2} is a/an ${experience2} in ${skill2}`;

    console.log(output1); // Mr/Ms. John is a/an expert developer in JavaScript
    console.log(output2); // Mr/Ms. Kane is a/an junior developer in JavaScript
```
 

   
 ## What is the difference between staring startWith and starting endWith methods?

startWith method checks if the string starts with the given string. and `endWith()` method checks if the string ends with the given string.

**Example:**

```javascript
var str = 'Hello World';
str.startsWith('Hello'); // true
str.endsWith('World'); // true

str.startsWith('World'); // false
str.endsWith('Hello'); // false

```
 

# 09 Regular expressions
 
 ## when we should use regular expressions?

Yes, we should use regular expressions when we want to match a pattern against a string. or operate search and replace operations on a string. or validate a string against a pattern. regular expressions can be a better choice than string methods.
 

# 10 Indexed collections
 
 
## Differences between Objects and Maps ?

### 1. Keys on objects are strings, on maps keys are of any type

Indeed objects are collections of key-value pairs but the key can only be a string. While the key of a Map can be of any type.

If for example, we use a number as a key in an object literal, that number is converted to a string and used as the key.

Because the key is converted to a string we get the same result when trying to get value for the 1 number value or for the '1' string value.  

```js  
    const obj = {
        1: 'One',
    }
    console.log(obj[1]) // One

    const map = new Map()
    map.set(1, 'One')
    console.log(map.get(1)) // One
    console.log(map.get('1')) // undefined
```  

When using maps the key can be of any type so the 1 number key is different from the '1' string key

```js  
    const map = new Map()
    map.set(1, 'One')
    console.log(map.get(1)) // One
    console.log(map.get('1')) // undefined
```  

The key is unique in both cases. There cannot be two properties in an object with the same key or two entries in a map with the same key.  

### 2. Maps preserve the order of their keys, objects do not

The original order of key-value pairs is preserved in maps, while in objects it is not.

```js  
    const gamesObj = {
    2: 'Tzolkin',
    1: 'Citadels',
    };
    const keys = Object.keys(gamesObj);
    console.log(keys);
    //["1", "2"];
    const keyValuePairs = Object.entries(gamesObj);
    console.log(keyValuePairs);
    //["1", "Citadels"]
    //["2", "Tzolkin"]
```  

Notice that when the object is created the key 2 comes before the key 1. When retrieving all the keys 2 comes after 1.

Below is a similar collection built with the Map constructor. This time the initial order is preserved.

```js  
    const gamesMap = new Map([
    [2, 'Tzolkin'],
    [1, 'Citadels']
    ])
    const keys = gamesMap.keys();
    console.log(keys);
    //MapIterator {2, 1}
    const keyValuePairs = gamesMap.entries();
    console.log(keyValuePairs);
    //MapIterator {2 => "Tzolkin", 1 => "Citadels"}

```  
 

   
 ## How can we check a value is a Array or not?

The Array.isArray() method determines whether the passed value is an Array object.

```javascript
var arr = [1, 2, 3];
console.log(Array.isArray(arr)); // true

var obj = {};
console.log(Array.isArray(obj)); // false

```
 

   
 ## How can we concatenated nested arrays?

The flat method is used to flatten an array. It takes an optional parameter which is the depth of the flattening. By default it flattens the array to one level. if we pass Infinity, it flattens the array to all levels.

```javascript
var arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat(Infinity)); // [1, 2, 3, 4, 5, 6]

```
 

   
 ## How do you check whether an array includes a particular value or not

The Array#includes() method is used to determine whether an array includes a particular value among its entries by returning either true or false. Let's see an example to find an element(numeric and string) within an array.

```javascript
var numericArray = [1, 2, 3, 4];
console.log(numericArray.includes(3)); // true

var stringArray = ["green", "yellow", "blue"];
console.log(stringArray.includes("blue")); //true
```
 

   
 ## How to check whether there is a specific value in the Array?

There are many ways we can determine where a specific value exists in the target array. The `includes` method in Javascript is one of the most convenient ways to find out whether a value exists in an array or not.

**Example**

```javascript
if (numbers.includes(3)) {
 console.log('found it');
}
```
 

   
 ## How we can merge nested arrays in javascript?

use `reduce` method and use `concat` method to merge arrays.

```javascript
const nestedArr1 = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9, [10, 11, 12]]
];
const nestedArr2 = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9, [10, 11, 12]],
 [13, 14, 15]
];

function mergeArrays(arr1, arr2) {
 return normalizeNestedArray(arr1).concat(normalizeNestedArray(arr2));
}

function normalizeNestedArray(arr) {
 return arr.reduce((acc, curr) => {
  if (Array.isArray(curr)) {
   return acc.concat(normalizeNestedArray(curr));
  } else {
   return acc.concat(curr);
  }
 }, []);
}

mergeArrays(nestedArr1, nestedArr2);
```

**Explanation**
First we normalize the nested arrays by reducing the array to a single array. then we merge the arrays. and finally we normalize the merged array.
 

   
 ## What is the purpose of Array reduce method?

The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It takes two arguments: the reducer function and an initial value. The reducer function takes two arguments: the accumulator and the current value to be transformed. The accumulator is the result of the last call to the reducer function, or the initial value if this is the first call. The current value is the value of the current element being processed in the array. The reducer function must return the accumulator. It is useful for transforming an array to a single value.

```javascript
var array = [1, 2, 3, 4, 5];
var sum = array.reduce(function (accumulator, currentValue) {
 return accumulator + currentValue;
}, 0);
console.log(sum); // 15
```
 

   
 ## What is the purpose of some method in arrays ?

The some() method is used to test whether at least one element in the array passes the test implemented by the provided function. The method returns a boolean value. Let's take an example to test for any odd elements,

```javascript
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var odd = (element) => element % 2 !== 0;

console.log(array.some(odd)); // true (the odd element exists)
```
 

   
 ## What is the purpose of the array slice method ?

The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.

```javascript
    let arrayIntegers = [1, 2, 3, 4, 5];
    let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
    let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
    let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
``` 

   
 ## What is the use case of array concat method?

To merge two or more arrays. It don't change the original array and return a new array.

```javascript
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var arr3 = arr1.concat(arr2);
// arr3 = [1, 2, 3, 4, 5, 6]

```
 

# 11 Keyed collections
 
 
## Deference between Array and Set in javascript?

Array is a collection of values and Set is a collection of unique values. Removing duplicates from an array is a O(n) operation and from a set is a O(1) operation.

**Example**

```javascript
var arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
var set = new Set(arr);
// console.log(set); // Set {1, 2, 3, 4, 5}
// console.log(arr); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

// Remove an item from an array
arr.splice(0, 1);
// console.log(arr); // [2, 3, 4, 5, 1, 2, 3, 4, 5]
set.delete(1);
// console.log(set); // Set {2, 3, 4, 5}

```
 

   
 ## What is difference between Map and Object?

Map is a data structure which helps in storing the data in the form of pairs. The pair consists of a unique key and a value mapped to the key. It helps prevent duplicity.
Object follows the same concept as that of map i.e. using key-value pair for storing data. But there are slight differences which makes map a better performer in certain situations.

Few basic differences are as follows:

- In Object, the data-type of the key-field is restricted to integer, strings, and symbols. Whereas in Map, the key-field can be of any data-type (integer, an array, even an object!)
- In the Map, the original order of elements is preserved. This is not true in case of objects.
 

   
 ## What is Map object?

A map is an object that holds key-value pairs. Each key is unique on the map. The value can be any type, even another map. A map is an iterable object. It has a forEach() method, which can be used to iterate over all key-value pairs in the map. The map is a collection of key-value pairs.

- 1. The map is used to store data in key-value pairs.
- 2. Map keys are unique. and can be set in any kind of data type.
- 3. Maps keys are stored in insertion order.
- 4. The map is iterable.

```javascript
var map = new Map();
map.set('1', 'a');
map.set('2', 'b');
map.set('3', 'c');

// Iterate over all key-value pairs in the map
map.forEach(function (value, key) {
 console.log(key + ' = ' + value);
});
// 1 = a
// 2 = b
// 3 = c

```
 

   
 ## What is the purpose of the Set in javascript?

The Set is a data structure that stores unique values of any type. It is a collection of values. It is a collection of values that are not duplicated. And have useful built-in methods for manipulating the collection.

**Example**

```javascript
var set = new Set();
set.add(1);
set.add(2);
set.add(2);

for (let value of set) {
 console.log(value);
}
// Output:
// 1
// 2

```
 

# 12 Working with objects
 
 ## Difference between getOwnPropertyNames vs Object.keys ?

 getOwnPropertyNames returns only enumerable properties, Object.keys returns all properties.

```javascript
var obj = {
 a: 1,
 b: 2,
 c: 3
};
```

**Object keys**

Object keys returns all enumerable properties of an object. It does not return non-enumerable properties.

```javascript
console.log(Object.keys(obj)); // ['a', 'c']
```

**Object getOwnPropertyNames**

getOwnPropertyNames returns all properties of an object.

```javascript
console.log(Object.getOwnPropertyNames(obj)); // [ 'a', 'b', 'c' ]

```
 

   
 ## How can access an object's  values?

There are two ways to access an object's values. One is using the dot notation and the other is using the bracket notation.

```javascript
var person = {
 name: 'John',
 age: 30
};

// Dot notation
console.log(person.name);

// Bracket notation
console.log(person['name']);

```
 

   
 ## How can we set an object's prototype in JavaScript ?

**Using `Object.create`**
The `Object.create()` method created a new object and allows you to specify an object that will be used as the new objects' prototype.

Here's an example:-

```javascript
const personPrototype = {
  greet() {
    console.log('hello!');
  }
}

const carl = Object.create(personPrototype);
carl.greet(); // hello!
```

Here we create an object personPrototype, which has a greet() method. We then use Object.create() to create a new object with personPrototype as its prototype. Now we can call greet() on the new object, and the prototype provides its implementation.
 

   
 ## How do you get objects all prototypes ?

Ans: The object `getPrototypeOf()` method accept an object as parameter an  return all prototypes properties this object.

```javascript
const myObject = {
 city: 'Paris',
 greet() {
  console.log(`Hello ${this.city}`);
 }
};

Object.getPrototypeOf(myObject);

```
 

   
 ## How do you get property descriptors of an object

You can use the Object.getOwnPropertyDescriptors() method which returns all own property descriptors of a given object. The example usage of this method is below,

```javascript
   const newObject = {
   a: 1,
   b: 2,
   c: 3,
   };
   const descriptorsObject = Object.getOwnPropertyDescriptors(newObject);
   console.log(descriptorsObject.a.writable); //true
   console.log(descriptorsObject.a.configurable); //true
   console.log(descriptorsObject.a.enumerable); //true
   console.log(descriptorsObject.a.value); // 1
```
 

   
 ### How Prototype inheretated with Object.create() ?
`Object.create()` Inherit prototypes from the targeted object and create a new object. the first parameter is for targeted object prototypes and the second parameter is for property descriptors (optional).
```js 
const extractJSON = {
	extractProperties: function () {
		let properties = []
		for (let key in this) {
			if (this.hasOwnProperty(key)) {
				properties.push(key)
			}
		}
		return properties
	},
	extractValues: function () {
		let values = []
		for (let key in this) {
			if (this.hasOwnProperty(key)) {
				values.push(this[key])
			}
		}
		return values
	},
}
const userInfoProperties = Object.create(extractJSON)
userInfoProperties.name = 'John'
userInfoProperties.age = 30
userInfoProperties.extractProperties() //   ['name', 'age']
userInfoProperties.extractValues() //   ['John', 30]
``` 

   
 
## What is Optional chaining?

Optional chaining is the safe way to get access to nested object properties even if the intermediary property doesn't exist.
 

As an example let's say we have an empty user object when we access the `user.name` it returns undefined because we know in the user object name property doesn't exist. but if we attempt to access the firstName property in the nested name object it throws an Error. Becouse we attempt to access an undefined values property that might not exist.


At some point, we might expect the undefined instant of not getting an error. In Javascript we can use the `.?` syntax to check the left part for `null/undefined` and allowing to safely access nested properties.


```js
const  user  =  {}
console.log(user.name) // undefined
console.log(user.name.age) // Property 'name' does not exist on type '{}'.
console.log(user.name?.age) // undefined
``` 

   
 ## What happens if you define a property in an object, when a property with the same name is defined in the object's prototype?

 Let's see:

```javascript
const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function() {
  console.log('something else!')
};

myDate.getYear(); // 'something else!'

```

When we call getYear() the browser first looks in myDate for a property with that name, and only checks the prototype if myDate does not define it. So when we add getYear() to myDate, then the version in myDate is called.
 

   
 
### What is prototype chain ?

Prototypes are the means of inheritance in JavaScript. The prototype of an object would also have a prototype object. This continues until we reach the top level when there is no prototype object.

This is called prototype chaining or prototype chain in JavaScript.

![prototype-chain-js](./images/prototype-chain-js.jpg)

 

   
 ## What is constructor function?

A constructor function is a function that is used to create objects. The new keyword is used to call the constructor function and use the constructor as a blueprint to create an object.

**Note: It it convention to use capital letters for constructor function names.**

```javascript
function Person(name, age) {
 this.name = name;
 this.age = age;
}

var john = new Person('John', 30);
var jane = new Person('Jane', 32);
var mark = new Person('Mark', 25);

```
 

   
 ## What is getter and setter in javascript?

 The getter and setter is a function that is used to get and set the value of a property. In Object Oriented Programming, the getter and setter is a method that is used to get and set the value of a property. The main benefit of using getter and setter is that we can implement some logic before and after getting and setting the value of a property.

**Example without getter and setter:**

```javascript
var person = {
 firstName: 'John',
 lastName: 'Doe',
 fullName: function () {
  return this.firstName + ' ' + this.lastName;
 }
};
console.log(person.fullName()); // John Doe
```

**Example with getter and setter:**

```javascript
var person = {
 firstName: 'John',
 lastName: 'Doe',
 get fullName() {
  return this.firstName + ' ' + this.lastName;
 }
};
console.log(person.fullName); // John Doe
```
 

   
 ## What is Object.assign() do ?

Used to copy the values and properties from one or more source objects to a target object and then return modified target object.

```javascript
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };

    const returnedTarget = Object.assign(target, source);

    console.log(target);
    // expected output: Object { a: 1, b: 4, c: 5 }

    console.log(returnedTarget);
    // expected output: Object { a: 1, b: 4, c: 5 }
```
 

   
 ## What is object in javascript?

Object is a collection of key-value pairs. this useful when we want to store data in a structured way. we can access the data using key.

```javascript
var person = {
 name: 'John',
 age: 30,
 isMarried: false
};

console.log(person.name); // John

```
 

   
 ## What is Object property descriptor?

 Object property descriptor is an object that describes the property of an object and its behavior. the object property descriptor is an object with the following properties: value, writable, enumerable, configurable.

```javascript
'use strict';
const person = {
 name: 'John',
 age: 30,
 isMarried: false
};

Object.defineProperty(person, 'name', {
 value: 'Jack',
 writable: false,
 enumerable: false,
 configurable: false
});
console.log(person.name);

```

**Value:** The value property is a data property that stores the value of the property.

```javascript
console.log(person.name); // Jack

```

**Writable:** The writable property is a boolean property that determines whether the property can be changed.

```javascript
person.name = 'Jill';
// => error : Uncaught TypeError: Cannot assign to read only property 'name' of object

```

**Enumerable:** The enumerable property is a boolean property that determines whether the property can be enumerated by a for-in loop.

```javascript
for (const item of Object.entries(person)) {
 console.log(item);
}
// ['age', 30]
// ['isMarried', false]

```

**Configurable:** The configurable property is a boolean property that determines whether the property can be deleted.

```javascript
delete person.name;
// Uncaught TypeError: Cannot delete property 'name

```
 

# 13 Class
 
 ## How can we define a private method in the javascript class?

We can use the following syntax: #methodName to define a private method. it will be private to the class and can be accessed only from the class itself and not from outside the class.

```javascript
class Person {
 #name;
 #age;
 constructor(name, age) {
  this.#name = name;
  this.#age = age;
 }
 getName() {
  return this.#name;
 }
 getAge() {
  return this.#age;
 }
}

var person = new Person('John', 30);
console.log(person.getName()); // John
console.log(person.getAge()); // 30
console.log(person.#name); //  Private field '#name' must be declared in an enclosing clas
console.log(person.#age); //  Private field '#age' must be declared in an enclosing clas

```
 

   
 ## How do we set a property or method private in javascript?

JavaScript proposal, in the standard, that provides language-level support for private properties and methods.

Privates should start with #. They are only accessible from inside the class.

```javascript
class Person {
 #age = 0;
 name = '';
 constructor(name) {
  this.name = name;
 }

 getAge() {
  return this.#age;
 }

 setAge(age) {
  this.#age = age;
 }
}

const person = new Person('John');
person.setAge(30);
console.log(person.#age);
// Uncaught SyntaxError: Private field '#age' must be declared in an enclosing class (

```
 

   
 ## Is Class Declaration hoisted to the top?

 No , it is not hoisted. It behaves like let and const keyword in javascript.
 

   
 ## What is a constructor method

The constructor method is a special method for creating and initializing an object created within a class. If you do not specify a constructor method, a default constructor is used. The example usage of constructor would be as below,

```javascript
class Employee {
  constructor() {
    this.name = "John";
  }
}

var employeeObject = new Employee();
console.log(employeeObject.name); // John
```
 

   
 ## What is Abstraction in OOP ?

Making coffee with a coffee machine is a good example of abstraction.
You need to know how to use your coffee machine to make coffee. You need to provide water and coffee beans, switch it on and select the kind of coffee you want to get.
The thing you don’t need to know is how the coffee machine is working internally to brew a fresh cup of delicious coffee. You don’t need to know the ideal temperature of the water or the amount of ground coffee you need to use.
Someone else worried about that and created a coffee machine that now acts as an abstraction and hides all these details. You just interact with a simple interface that doesn’t require any knowledge about the internal implementation.

```javascript
class CoffeeMachine {
 constructor(power, capacity) {
  this.power = power;
  this.capacity = capacity;
  this.waterAmount = 0;
 }
 getWaterAmount() {
  return this.waterAmount;
 }
 setWaterAmount(amount) {
  this.waterAmount = amount;
 }
 getPower() {
  return this.power;
 }
 getCapacity() {
  return this.capacity;
 }
 getTimeToBoil() {
  return (this.waterAmount * 80) / this.power;
 }
 boil() {
  this.waterAmount = 0;
 }
 makeCoffee(amount) {
  this.waterAmount += amount;
  if (this.waterAmount > this.capacity) {
   console.log('Too hot!');
   this.boil();
  }
 }
}

const coffeeMachine = new CoffeeMachine(10000, 400);
coffeeMachine.makeCoffee(200);

```
 

   
 ## What is class in javascript?

Class is a blueprint of an object. It is a template for an object. We can create many objects from a class. A class can have properties and methods. The class can also inherit properties and methods from another class and have access to override them. The class has the constructors method that is called when we create an object from a class. Constructors are used to initializing the properties of the object.

```javascript
class Person {
 constructor(name, age) {
  this.name = name;
  this.age = age;
 }
 sayHello() {
  console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
 }
}

var person1 = new Person('John', 30);
person1.sayHello();
// Output: Hello, I am John and I am 30 years old.
```
 

   
 ## What is Encapsulation in JavaScript?

Encapsulation is a mechanism that allows an object to hide its internal state and behavior from other objects.

```javascript
class Person {
 #name = 'Nathan';

 getName() {
  return this.#name;
 }

 setName(name) {
  this.#name = name;
 }
}

const person = new Person();
console.log(person.getName()); // Nathan
console.log(person.#name); // Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class.

```
 

   
 ## What is static method in javascript?

 A static method in JavaScript is a method that has a static keyword prepended to itself. Such methods cannot be accessed through instantiated objects but could be accessed through the class name. This is because static methods belong to the class directly. Inheritance even applies to static methods. Also, these methods can be invoked by non-static methods and even constructors. Static methods are used to create utility functions and create objects that contain default information.

**Example**

```javascript
class MyClass {
 static myStaticMethod() {
  return 'static';
 }
}

MyClass.myStaticMethod(); // 'static'

const myClass = new MyClass();
myClass.myStaticMethod(); // TypeError: myStaticMethod is not a function

```
 

   
 ## What are the 4 pillars of OOP?

- 1. Abstraction
- 2. Encapsulation
- 3. Inheritance
- 4. Polymorphism
 

# 14 Promises
 
 ## Is it possible to chain promises after getting an Error?

Yes, It is possible to chain after a failure. which is useful to accomplish a task after a failure.

```javascript
new Promise((resolve, reject) => {
 console.log('Initial');

 resolve();
})
 .then(() => {
  throw new Error('Something failed');
  console.log('Do this');
 })
 .catch(() => {
  console.error('Do that');
 })
 .then(() => {
  console.log('Do this, no matter what happened before');
 });

```
 

   
 ## What are the cons of promises?

- It makes little complex code.
- You need to load a polyfill if ES6 is not supported. 

   
 ## What does promise all do?

The Promise.all() method is actually a method of Promise object (which is also an object under JavaScript used to handle all the asynchronous operations), that takes an array of promises(an iterable) as an input. It returns a single Promise that resolves when all of the promises passed as an iterable, which have resolved or when the iterable contains no promises. In simple way, if any of the passed-in promises reject, the Promise.all() method asynchronously rejects the value of the promise that already rejected, whether or not the other promises have resolved. 

```javascript
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
    });

    Promise.all([promise1, promise2, promise3]).then((values) => {
        console.log(values);
        // expected output: Array [3, 42, "foo"]
    });
```

[Reference](https://www.geeksforgeeks.org/javascript-promise-all-method/)
[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) 

   
 ## What is a promise?

A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection. Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked
 

   
 ## What is a promise.race() ?

The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // expected output: "two"
});

```

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) 

   
 ## What is Polymorphism in JavaScript ?

When a method has the same name but a different implementation in different classes - is called polymorphism.

```javascript
class Animal {
 constructor(name) {
  this.name = name;
 }
 getName() {
  return this.name;
 }
}

class Dog extends Animal {
 constructor(name) {
  super(name);
 }
 getName() {
  return this.name + ' is a dog';
 }
}

class Cat extends Animal {
 constructor(name) {
  super(name);
 }
 getName() {
  return this.name + ' is a cat';
 }
}

var dog = new Dog('Fido');
var cat = new Cat('Mimi');

console.log(dog.getName());
console.log(cat.getName());

```
 

   
 ## What is promise chaining give an example?

A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. We accomplish this by creating a promise chain.

```javascript
    const getNumber = new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(10);
        }, 100);
    });
    getNumber
        .then((number) => {
            console.log(number); // 11
            return number + 1;
        })
        .then((number) => {
            console.log(number); // 12
            return number + 1;
        })
        .then((number) => {
            console.log(number);
            return number + 1; // 13
        });
// 11
// 12
// 13

```
 

   
 ## What promise chaining ?

Promise chaining is a way to chain promises together. This is useful when you want to execute multiple asynchronous operations in sequence. The following example shows how to use promise chaining to execute multiple asynchronous operations in sequence.

**Example**

```javascript

var promise1 = new Promise(function (resolve, reject) {
 setTimeout(function () {
  resolve(1);
 }, 1000);
});

var promise2 = new Promise(function (resolve, reject) {
 setTimeout(function () {
  resolve(2);
 }, 2000);
});

var promise3 = new Promise(function (resolve, reject) {
 setTimeout(function () {
  resolve(3);
 }, 3000);
});

promise1
 .then(function (result) {
  console.log(result); // 1
  return promise2;
 })
 .then(function (result) {
  console.log(result); // 2
  return promise3;
 })
 .then(function (result) {
  console.log(result); // 3
 });

```
 

# 15 Iterators and generators
 
 ## What is iterable?

Iterable is an object that has a next method. This method returns an object with a value and done properties. The value property is the next value in the sequence and the done property is a boolean that is true if there are no more values in the sequence. The next method is used to get the next value in the sequence.
 

# 16 Meta Programming
 
 ## What is purpose of proxies in javascript?

Proxy is a function that takes two arguments, the first is the object to be proxied and the second is the handler object. The handler object has properties that define the behavior of the proxy.

```javascript
const handler = {
 get: function (target, name) {
  console.log(`Getting ${name}`);
  console.log(target);
  return name in target ? target[name] : 'N/A';
 }
};

const target = {
 name: 'John',
 age: 30
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // John

```
 

# 17 modules
 
 ## Difference between default export and named export ?

default export is used when we want to export only one thing from a module. and named export is used when we want to export multiple things from a module.
 

   
 ## What are dynamic imports?

Dynamic import is a function that allows us to load modules on demand by using promise or async await syntax. The main advantage is to reduce bundle size. and response size. speed up user experience.

```javascript
import("./Module").then((Module) => Module.method());
```
 

   
 ## What is defer in javascript?

The defer is a Boolean value, used to indicate that script is executed after the document has been parsed. It works only with external scripts (i.e., works only when we are specifying the src attribute in `<script>` tag).
 

   
 ## What is type="module" in the `<script>` tag?

It tells the browser that the script is a module. Now we can use the import and export keywords. import and export are used to import and export modules. This is useful for bundling and splitting code.It is also useful for lazy loading.

```javascript
<script type="module">
    import {someVar, someFunc} from './module.js';
    console.log(someVar + someFunc());
</script>
```
 

# 18 Client-side web APIs
 
 ## How can we communicate between two different tabs?

Use BroadcastChannel Web API to communicate between two different tabs BroadcastChannel is a Web API that allows you to send and receive messages between different tabs.

```javascript
const bc = new BroadcastChannel('test_channel');

bc.onmessage = function (event) {
 console.log(event.data);
};

document.body.addEventListener('click', () => {
 bc.postMessage('hello');
});
```
 

   
 ## How do I modify the url without reloading the page

The window.location.url property will be helpful to modify the url but it reloads the page. HTML5 introduced the history.pushState() and history.replaceState() methods, which allow you to add and modify history entries, respectively. For example, you can use pushState as below,

```javascript
window.history.pushState("page2", "Title", "/page2.html");
```
 

   
 ## How to access DOM from web worker?

The web worker's browser's DOM cannot be accessed, for reasons of execution thread safety. However, postmessages can establish communication with the browser window. So DOM can be updated based on postmessage.

**Example**

```html
<html>
 <body>
  <h1 id="time">Time:</h1>
 </body>
 <script>
  const time = document.getElementById('time');
  const worker = new Worker('worker.js');
  worker.onmessage = (e) => {
   time.innerHTML = e.data;
  };
 </script>
</html>

```

`worker.js`

```javascript
setInterval(() => {
 postMessage(new Date().toLocaleString());
}, 1000);
```

**Output**

```nginx
8/9/2022, 1:08:24 AM  
```
 

   
 ## How to get a specific query param value from an URL?

The `new URL` object provides a way to handle a URL string. It accepts an URL string and this object contains `searchParams` property which can be used to extract a query params value.

**Example**

```javascript
    const url = new URL('https://domain.com?page=1&take=20');
    console.log(url.searchParams.get('page'));
    // 1
```
 

   
 ## What are server-sent events?

Server-Sent Events is a server push technology enabling a client to receive automatic updates from a server via an HTTP connection, and describes how servers can initiate data transmission towards clients once an initial client connection has been established.

- SSE is based on the plain HTTP
- It is limited to pure text data, no binaries allowed

```javascript
    const eventSource = new EventSource("https://server.domain");

    eventSource.addEventListener("message", (event) => {
    // "event.data" is a string
    const data = JSON.parse(event.data);
    
    // Prints whatever was sent by the server
    console.log(data);
    });
```

[Reference](https://vhudyma-blog.eu/a-complete-guide-to-server-sent-events-in-javascript/) 

   
 ## What is cookies ?

 Cookies are small pieces of data that are stored on the user's computer.  Cookies are widely used in websites to remember the user's preferences and to track the user's browsing activity.

```javascript
document.cookie = 'username=John Doe';
```

**Set a max age of 30 days**

```javascript
document.cookie = 'username=John Doe; max-age=2592000';

```

**Get the cookie**

```javascript
document.cookie; // 'username=John Doe'

```
 

   
 ## What is IndexedDB used for?

IndexedDB is a way for you to persistently store data inside a user's browser. Because it lets you create web applications with rich query abilities regardless of network availability, your applications can work both online and offline.

[Reference](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB) 

   
 ## What is Service Worker ?

A service worker is a script that runs independently in the browser background. On the user side, it can intercept its network requests and decide what to load (fetch).
Service workers mainly serve features like background sync, push notifications and they are commonly used for’offline first’ applications, giving the developers the opportunity to take complete control over the user experience.

- **You can dominate Network Traffic!**
You can manage all network traffic of the page and do any manipulations.
Is it really possible to dominate all network traffic? Yes! For example, when the page requests to a CSS file, you can send plain text as a response or when the page requests to an HTML file, you can send png file as a response. Of course, you can send true response too :)

- **You can “Cache”!**
You can cache any request/response pair with Service Worker and Cache API and you can access these offline content anytime

- **You can manage Push Notifications!**
You can manage push notifications with Service Worker and show any information message to the user

- **You can continue!**
Although Internet connection is broken, you can start any process with Background Sync of Service Worker
 

   
 ## What is the use case of session storage in the web application?

Session storage creates a session for the user and stores the data in the browser. And the date is disappears when the user closes the browser. The use case would be let's say we went to show an popup for first time when the user is entering the website. We want to show the popup only once. So we can use session storage.

```javascript
const sessionStorage = window.sessionStorage;
sessionStorage.setItem('isFirstTime', 'false');
const isFirstTime = sessionStorage.getItem('isFirstTime');
if (isFirstTime === 'false') {
 // do something
}

```
 

   
 ## What is web storage?

Web storage is a way to store data on a web browser. There are many different types of web storage all are useful to personalize the user experience. Persisting previous site activity. Saving data and assets locally so that the user does not have to re-download them.
 

   
 ## Why do we use setInterval in JavaScript?

 The `setInterval()` method, offered  repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. A function to be executed every delay milliseconds. The first execution happens after delay milliseconds.

 ```javascript
 setInterval(() => {
    console.log('Hello');
    }, 1000);

    // Hello
    // Hello
    // Hello
    // Hello
    // .......
 ```
 

   
 ## Why do we use web workers?

Web workers are designed to let you run big jobs without freezing up the page. For example, imagine you want to do some complex calculations when someone clicks a button. If you start doing the job right away, you’ll tie everything up. The person using the page won’t be able to scroll or click anything. They might even get the dreaded “this page is unresponsive” error message.

![web-worker-page-unresponsive](./images/web-worker-page-unresponsive.png)

**worker.js**

```javascript
    function clock() {
        setInterval(() => {
            postMessage(`tick ${new Date().toLocaleTimeString()}`);
        }, 1000);
    }
clock();

```

**index.js**

```javascript
const w = new Worker('./worker.js');
    w.onmessage = function (event) {
        console.log(event.data);
    };
```
 

# 19 Closures
 
 ## What are closures?

closure is a function that has access to the variables of its outer function even after the outer function has returned. Also  Closure is concept of function + lexical environment in which function it was created . so every function declared within the another function then it has access to the scope chain of outer function and the variables created within the scope of outer function will not get destroyed.

```javascript
function outerFunction(arg) {
 var outerVar = arg;
 return function innerFunction(innerArg) {
  return outerVar + innerArg;
 };
}

var innerFunction = outerFunction(10);
console.log(innerFunction(20)); // 30
console.log(innerFunction(30)); // 50
```
 

   
 ## What are closures scope chains?

Closures are functions that have access to the outer function’s variables even after the outer function has returned. This is useful when you want to return a function from a function and you want to be able to access the outer function’s variables. Every closure has three scopes: its scope, the outer function’s scope, and the global scope.
 

# Coding Exercise
 
 
## Write a `sum` method which will work properly when invoked using either syntax below.

```javascript
console.log(sum(2, 3)); // Outputs 5
console.log(sum(2)(3)); // Outputs 5
```

<details>
    <summary>Answer</summary>

```javascript
function sum(x) {
	if (arguments.length === 2) {
		return arguments[0] + arguments[1];
	} else {
		return function (y) {
			return x + y;
		};
	}
}
```

</details>
 

   
 
## What is the output of below code ?

```javascript
var arr1 = 'john'.split('');
var arr2 = arr1.reverse();
var arr3 = 'jones'.split('');
arr2.push(arr3);

console.log('array 1: length=' + arr1.length + ' last=' + arr1.slice(-1));
console.log('array 2: length=' + arr2.length + ' last=' + arr2.slice(-1));
```

<details>
    <summary>Answer</summary>

```javascript
// array 1: length=5 last=j,o,n,e,s
// array 2: length=5 last=j,o,n,e,s
```

</details>
 

