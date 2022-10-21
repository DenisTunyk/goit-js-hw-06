"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElem = document.querySelector("#ingredients");

// const prod = ingredients.map(item => `<li class="item">${item}</li>`).join("");
// ulElem.insertAdjacentHTML('beforeend', prod);


const arr = [];
for (let i = 0; i < ingredients.length; i += 1){
  console.log(ingredients[i]);
  const li = document.createElement('li');
  li.classList.add("item");
  li.textContent = ingredients[i];
  arr.push(li);
}
ulElem.append(...arr);
 
