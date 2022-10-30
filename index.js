'use strict'

const ads = document.querySelector('.ads');
ads.remove();

const propList = document.querySelectorAll('.item');

console.log(propList);

propList[0].replaceWith(propList[1]);
propList[4].replaceWith(propList[0]);


