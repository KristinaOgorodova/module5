'use strict'

const ads = document.querySelector('.ads');
ads.remove();

const book = document.querySelectorAll('.item');

book[0].replaceWith(book[1]);
book[3].after(book[0]);

const propList = document.querySelectorAll('.props__list');
console.log(propList);

const clone = propList[4].cloneNode(true);

console.log(clone)

propList[4].replaceWith(propList[2]);


const two = document.querySelectorAll('.props__item_two');
console.log(two);

const four = document.querySelectorAll('.props__item_four');
console.log(four);

four[3].after(four[0])
two[7].after(two[8])
two[7].after(two[9])
















