

const numberToCount = prompt("введіть 2 числа");
let numbers = numberToCount.split(" ").map((num) => Number(num));
let result = 0;


const whatAction = (arr)=>{
const question = prompt("що ти хочеш зробити - add, sub, mult, чи div");
console.log(question);

    switch (question) {
        case "add":
            console.log('adding')
            return console.log((arr)=> arr[0] + arr[1]);
      
        case "sub":
            return sub();
      
        case "mult":
            return mult();
      
        case "div":
            return div();

          default:
              alert("sorry, you did not enter any of the options");
            //   whatAction();
      }

};

const sub = (arr)=> arr[0] - arr[1];
const mult = (arr)=> arr[0] * arr[1];
const div = (arr)=> arr[0] / arr[1];




const showResult = (arr, action)=>{
    return `${arr[0]} ${action} ${arr[1]} = ${action(arr)}`
}

showResult(numbers, whatAction);





// const add = numbers.map(num=>{ result += num });
// const add = numbers[0]+ numbers[1];