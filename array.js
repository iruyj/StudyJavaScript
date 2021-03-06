'use strict';

// Array ๐ : ์ ์ธ๋ ๊ณณ์ผ๋ก ๊ฐ์ ๊ด๋ จํจ์๋ ์ค๋ช๋ณด๊ธฐ 

// 1. Declaration : ๋ฐฐ์ด์์ฑ
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['์ฌ๊ณผ' ,'๋ง๊ณ '];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

// 3. Looping over an array
// print all fruits

// a. for 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
for (const fruit of fruits) {
    console.log(fruit);
}
// c. forEach
// ์ฝ๋ฐฑํจ์๋ฅผ ๋ฐ์์จ๋ค
//forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// ๋ฐฐ์ด ์์ดํ ๊ฐ๊ฐ callback ํจ์๋ฅผ ํธ์ถํด์ค๋ค 
fruits.forEach(function(fruit, index) {
    console.log
});

// ์คํ๋ฌธ์ฅ์ด ํ์ค์ผ ๊ฒฝ์ฐ ์๋ก์ฐ(=>)๋ฅผ ์ฐ๊ณ  ๊ฐ๋ก ์์ด๋๋จ
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.puth('๊ฐ ','๋ณต์ญ์');
console.log(fruits);

// pop: remove an item from the end
// ์ง์์ง๋ ์์ดํ์ด ๋ฆฌํด์ด๋จ
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// shift : pop, push ์ ๋นํด ์๋๊ฐ ํ๋ฌ๋ฆฌ๋ค
// unshift : add an item to the benigging
fruits.unshift('๋ธ๊ธฐ','๋ ๋ชฌ');
console.log(fruits);

// shift : remove an item from the benigging
// ์์์๋ถํฐ ๋ฐ์ดํฐ๋ฅผ ์ญ์ ํ๋ ๊ฒ์ ๊ต์ฅํ ๋๋ฆฌ๋ค
fruits.shift();
fruits.shift();
console.log(`์ง์ด ํ ๊ณผ์ผ : ${fruits}`);

// splice : remove an item by index position
// ์ค๊ฐ์ ์๋ ์์ดํ ์ง์ฐ๊ฑฐ๋ ์ฝ์ํ๊ธฐ
// Array<string>.splice(start: number, deleteCount?: number): string[] (+1 overload)
/* <์ธ์>
* ์์ํ๋ ์ธ๋ฑ์ค๋ฒํธ,
* ๋ช๊ฐ์ง์ธ๊ฑด์ง(deleteCount์ ?๊ฐ ์๊ธฐ ๋๋ฌธ์ ์ง์ ํด๋ ๋๊ณ  ์ํด๋๋จ)
* but, deleteCount ๋ฅผ ์ง์ ํ์ง ์์ผ๋ฉด ์ง์ ํ ์ธ๋ฑ์ค๋ถํฐ ๋๊น์ง ๋ค์ง์ด๋ค.
* ์ถ๊ฐ๋ก ๊ทธ ๋ค์ ๊ทธ์๋ฆฌ์ ๋ฃ์ item๋ค์ ์จ๋๋๋ค*/
fruits.push('๐','๐');
fruits.splice(1);
console.log(fruits);
fruits.splice(1, 1, '๐','๐ฅ');
console.log(fruits);

// combine two arrays : ๋ฐฐ์ด ๋๊ฐ ํฉ์น๊ธฐ 
// concat(...items: ConcatArray<T>[]): T[];
const fruits2 = ['๐','๐'];
const newFruits = fruits.concat(fruits2); 
console.log(fruits);

// 5. Searching
// find the index
// ์๋ ๊ฐ์ ๊ฒ์ํ๋ฉด -1์ด ๋ฐํ๋จ
// ๊ฒ์ํ๋ฉด ์ ์ผ ์์ ์๋ ์ฐพ๋๊ฐ์ ์์น๊ฐ ๋ฐํ๋จ
console.log(fruits);
console.log(fruits.indexOf('๐'));
console.log(fruits.indexOf('๐ฅ'));
console.log(fruits.indexOf('๐'));

// lastIndexOf
// ๊ฒ์ํ๋ฉด ์ ์ผ ๋ค์ ์๋ ์ฐพ๋๊ฐ์ ์์น๊ฐ ๋ฐํ๋จ
console.clear();
fruits.push('๐');
console.log(fruits);
console.log(fruits.lastIndexOf('๐'));