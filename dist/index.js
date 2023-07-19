"use strict";
// Basic types
let id = 5;
let company = 'Edward Guereque';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple 
let person = [1, 'Edward', true];
// Tuple Array
let employee;
employee = [
    [1, 'Edward'],
    [2, 'John'],
    [3, 'Brad']
];
// Union
let pid;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assersion
let cid = 1;
// Two ways to do this
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const edward = new Person(1, 'Edward');
const mike = new Person(2, 'Mike');
console.log(edward.id);
