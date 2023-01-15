// Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:

// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел

let first = prompt('Please enter your 1st digit');
let second = prompt('Please enter your 2nd digit');
let third = prompt('Please enter your 3rd digit');

alert(`Ваше среднее арифметическое =  ${(+first + (+second) + (+third)) / 3}`);