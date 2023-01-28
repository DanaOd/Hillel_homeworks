
const whatAction = ()=>{
    return prompt("що ти хочеш зробити - add, sub, mult, чи div");
}



const numberToCount = prompt("введіть 2 числа");
let numbers = numberToCount.split(" ").map((num) => Number(num));
let result = 0;


const add = (arr)=> arr[0] + arr[1];
const sub = (arr)=> arr[0] - arr[1];
const mult = (arr)=> arr[0] * arr[1];
const div = (arr)=> arr[0] / arr[1];


const showResult = (arr, action)=>{
    action = whatAction();
    
    switch (whatAction) {
      case "add":
          return `${arr[0]} + ${arr[1]} = ${action(arr)}`;
    
      case "sub":
        return `${arr[0]} - ${arr[1]} = ${action(arr)}`;
    
      case "mult":
        return `${arr[0]} * ${arr[1]} = ${action(arr)}`;
    
      case "div":
        return `${arr[0]} / ${arr[1]} = ${action(arr)}`;

        default:
            alert("sorry, you did not enter any of the options");
            whatAction();
    }

}

showResult(numbers, add);
// showResult(numbers, sub);

// console.log(showResult(numbers));





// const add = numbers.map(num=>{ result += num });
// const add = numbers[0]+ numbers[1];