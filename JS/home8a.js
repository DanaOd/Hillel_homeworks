// Створити скрипт який повинен виконувати наступне:

// питаємо у користувача, що він хоче зробити (add, sub, mult, div);
// питаємо у користувача два числа через кому;
// виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").

// додатково але не обовязково:

// запитувати юзера (add, sub, mult, div) і ввипадку якщо він вів щось інше вивести алертом

// "sorry, you did not enter any of the options"
// й запитати його знову, й так поки юзер не введе add або sub або mult або div.

// const whatToDo = prompt("що ти хочеш зробити - add, sub, mult, чи div");

const whatAction = prompt("що ти хочеш зробити - add, sub, mult, чи div");


const numberToCount = prompt("введіть 2 числа");
let numbers = numberToCount.split(" ").map((num) => Number(num));
let result = 0;


const add = (arr)=> arr[0] + arr[1];
const sub = (arr)=> arr[0] - arr[1];
const mult = (arr)=> arr[0] * arr[1];
const div = (arr)=> arr[0] / arr[1];


const showResult = (arr, action)=>{
    
    switch (whatAction) {
      case "add":
          return `${arr[0]} + ${arr[1]} = ${action(arr)}`;
    
      case "sub":
        sub(arr);
        return `${arr[0]} - ${arr[1]} = ${action(arr)}`;
    
      case "mult":
        sub(arr);
        return `${arr[0]} * ${arr[1]} = ${action(arr)}`;
    
      case "div":
        sub(arr);
        return `${arr[0]} / ${arr[1]} = ${action(arr)}`;

        default:
            alert("sorry, you did not enter any of the options");
            whatAction();
    }

}

showResult(numbers, add);





// const add = numbers.map(num=>{ result += num });
// const add = numbers[0]+ numbers[1];