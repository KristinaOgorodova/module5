'use strict'

const ads = document.querySelector('.ads');
ads.remove();

const book = document.querySelectorAll('.item');

book[0].replaceWith(book[1]);
book[3].after(book[0]);

const two = document.querySelectorAll('.props__item_two');
console.log(two);

const four = document.querySelectorAll('.props__item_four');
console.log(four);

four[3].after(four[0])
two[7].after(two[8])
two[7].after(two[9])

const itemsTitle = document.querySelectorAll('.item__title');
const propsList = document.querySelectorAll('.props__list');

propsList[1].before(itemsTitle[3]);
propsList[4].before(itemsTitle[4]);
propsList[5].before(itemsTitle[0]);

console.log(propsList);
propsList[2].replaceWith(propsList[4]);
itemsTitle[4].append(propsList[2]);















