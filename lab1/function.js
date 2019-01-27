let addTotheNumner = (num) => {
    return (addThisMuch) => {
        return num + addThisMuch;
    }
}
let addTwe = addTotheNumner(12);
console.log(addTwe(55));
function printSquareUtil(num){
    for(let i = 0; i < num; i++){
        let num = i * i;
        console.log(num);
        // let function block 
    }
}
//https://github.com/syl20bnr/spacemacs/tree/master/layers/%2Blang/javascript
printSquareUtil(10);
let myStringArray = ["hello", "world", "js"];
let myNumArray = [1,2,3,4,5];
myStringArray.forEach((value) => {
    console.log(value);
});
let myNumArraySquared = myNumArray.map((x) => {
    return x * x;
});
console.log(myNumArraySquared);

var oddNumbers = myNumArray.filter((num) => {
    return num % 2 === 1; 
});
console.log(oddNumbers);

var sumOfodds = oddNumbers.reduce((currentTotal, newValue) =>{
    return currentTotal + newValue;
},0);
console.log(sumOfodds);
myNumArray.push(6);
console.log(myNumArray.join(" "));
