const lab1 = require("./lab1");
console.log("questionOne");
console.log(lab1.questionOne([1, 2, 3]));
console.log(lab1.questionOne([1, 3]));
console.log(lab1.questionOne([1, 2]));
console.log(lab1.questionOne([1, 2, 3,4]));
console.log(lab1.questionOne([1, 2, 3, 3])); 
// should output 14
console.log("questionTwo");
console.log(lab1.questionTwo(-1));
console.log(lab1.questionTwo(3));
console.log(lab1.questionTwo(5));
console.log(lab1.questionTwo(6));
console.log(lab1.questionTwo(7));
// should output 13 
console.log("questionThree");
console.log(lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere."));
console.log(lab1.questionThree("It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."));
// should output 196
console.log("questionFour");
console.log(lab1.questionFour(10));
console.log(lab1.questionFour(9));
console.log(lab1.questionFour(4.5));
console.log(lab1.questionFour(2));
console.log(lab1.questionFour(5));
// should output 3628800 
