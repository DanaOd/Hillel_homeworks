// Попросити юзера ввести три числа через кому.
// Створити з цього масив

let total = 0;
let numbers = prompt('введіть, будь ласка, три числа через кому');
numbers = numbers.split(',');
const numArr = [];

for (let num of numbers){
    num = Number(num);
    numArr.push(num);

    total+=num;
}

const min = Math.min(...numArr);
const max = Math.max(...numArr);

// Показати через alert:
// перший та останній елемент масиву

// console.log(numArr, min, max);
alert(` first number is ${numArr[0]}, last number is ${numArr[numArr.length-1]}.
 ${numArr[0]}+ ${numArr[1]}+ ${numArr[2]}
 min is ${min}, max is ${max}`);



// на наступному рядку в тому самому alert вивести
// через символ '+' всі числа які ввів юзер (використовуючи спеціальні функції масиву) та сума цих чисел;
// наступний знайдіть найменьше й найбільше число

// у вас повинно вийти, приклад при вводі 3, 5, 1:

// first number is 3, last number is 1.
// 3 + 5 + 1 = 9
// min is 1, max is 5

// PS. зверніть увагу на пробіли та переноси.

let entree = prompt('Please enter one of the numbers which you entered before?');

entree = Number(entree);


for (let i=0; i<numArr.length; i+=1){
    if (entree===numArr[i]){
        alert(`вы ввели номер по индексу ${i}`);
        break;
    } else if (numArr[i] === numArr[numArr.length-1]) {
        alert(`'Sorry, you did not enter this number!`);
    }
        
}