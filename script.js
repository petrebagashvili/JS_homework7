const numbers = [3,7,12,5,8];
console.log(`current numbers: ${numbers}`);
const squareNum = numbers.map(num => num * num);
console.log(`squarenumbers : ${squareNum}`);
const evenNum = numbers.filter(num => num %2 ===0)
console.log(`even numbers : ${evenNum}`);
const sumNum = numbers.reduce((acc,num) => acc + num,0)
console.log(`sum of numbers : ${sumNum}`);
for (let i = 0; i < numbers.length; i++) {
    const checkNum = numbers[i];
    if (checkNum > 10 && checkNum %2 === 0) {
        console.log(`true`);
    } else {
        console.log(`false`);
    }
    console.log(checkNum);
}
