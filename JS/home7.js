const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let posQuantity = 0;
let posSum = 0;
let posMultiply = 1;

let negQuantity = 0;

//--------

let posEven = 0;
let posOdd = 0;


let posEvenSum = 0;
let posOddSum = 0;
//--------



for (const num of arr){
    if (num>0){

// Знайти суму та кількість позитивних елементів.
// Знайти добуток позитивних елементів.
        posQuantity = posQuantity+1;
        posSum +=num;
        posMultiply = posMultiply*num;
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
        if (num%2 === 0){
            posEven = posEven+1;
            posEvenSum = posEvenSum+num;
            
    // Знайти кількість непарних позитивних елементів.
    // Знайти суму непарних позитивних елементів.
        } else {
            posOdd = posOdd+1;
            posOddSum = posOddSum+num;
        }

    } else {
        // Визначити кількість негативних елементів.
        negQuantity = negQuantity+1;


    }
}


console.log(` В масиві ${posQuantity} позитивних елементів на сумму ${posSum}.
Їх добуток складає ${posMultiply}.
З инх парних елементів ${posEven}  на сумму ${posEvenSum}
Непарних - ${posOdd} на сумму ${posOddSum}.

Також у масиві негативних елементів: ${negQuantity}
`)

let min = 0;
let max = 0;
// Знайти максимальний елемент масиву та його порядковий номер.
// Знайти мінімальний елемент масиву та його порядковий номер.

// Знайти найбільший серед елементів масиву, остальні обнулити.
