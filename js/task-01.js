"use strict";

const categories = document.querySelector("#categories");

console.log("Number of categories:", categories.children.length);
console.log("");
[...categories.children].forEach(elem => {
    console.log("Category:", elem.firstElementChild.textContent);
    console.log("Elements:", elem.lastElementChild.children.length);
    console.log("");
});