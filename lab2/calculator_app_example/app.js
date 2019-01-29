const calculator = require("./calculator");
const prompt = require("prompt");

const operation = {
    name: "operation",
    description: `which operate do you want to do?`,
    type: 'string',
    //pattern: /^\w+$/,
    replace: '*',
    default: 'add',
    required: true
    // before: function(value){
    //     return 'v' + value;
    // }
};
function stringToOperation(str) {
    if(!str)
        return "add";
    if(str === "*" || str === "multiply")
        return "multiply";
    if(str === "/" || str === "divide")
        return "divide";
    if(str === "-" || str === "subtract")
        return "subtract";
    return "add";
}
const num1Prompt = {
    name: "num1",
    description: 'What is the first num',
    type: 'number',
    required: true
};
const num2Prompt = {
    name: "num2",
    description: 'What is the second num',
    type: 'number',
    required: true
};
const quitPrompt = {
    name: 'quit',
    description: 'Do you want to quit?',
    type: "boolean",
    required: true
};
function getInfo() {
    console.log("This is a calculator test!");
    prompt.start();
    prompt.get([operation, num1Prompt,num2Prompt,quitPrompt], function (err, result) {
        //
        // Log the results.
        //result = (operation: 'add')
        if(result){
            let operation = stringToOperation(result.operation);
            let num1 = result.num1;
            let num2 = result.num2;
            let quit = result.quit;
            let operationFunction = undefined; 
            switch(operation){
            case "multiply":
                operationFunction = calculator.mulTwoNumbers;
                break;
            case "divide":
                operationFunction = calculator.divideTwoNumbers;
                break;
            case "subtract":
                operationFunction = calculator.subtractTwoNumbers;
                break;
            case "add":
                operationFunction = calculator.addTwoNumbers;
                break;
            }
            result = operationFunction(num1, num2);
            console.log(`when you ${operation} ${num1} with ${num2} the result is ${result}`);
            if(!quit)
                getInfo();
        }else if(err)
            console.error(err);
    });
}
getInfo();
