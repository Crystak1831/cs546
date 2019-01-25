const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let result = 0;
    arr.forEach(value =>{
        result += value * value;
    });
    return result;
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    if(num < 1)
        return 0;
    if (num == 1)
        return 1;
    return questionTwo(num - 1) + questionTwo( num - 2);
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    
    let result = 0;
    for(let i = 0; i < text.length; i++){
        if(/[aeiou]/i.test(text[i]))
            result++;
    }
    return result;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if(num < 0)
        return NaN;
    num = Math.floor(num);
    let result = 1;
    for(let i = num; i > 0; i--, num--)
        result *= num;
    return result;
}

module.exports = {
    firstName: "Guangqi", 
    lastName: "Qing", 
    studentId: "10430202",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
