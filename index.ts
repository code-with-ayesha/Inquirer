
import inquirer from 'inquirer'

let answers = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "enter first number"
    },
    {
        name: "num2",
        type: "number",
        message: "enter second number"
    },
    {
        name: "operation",
        type: "list",
        choices:["addition", "subtraction", "division", "multiplication"],
    },
]);

if(answers.operation==="addition"){
    console.log(`The sum of two numbers = ${answers.num1+answers.num2}`)
}
else if(answers.operation==="subtraction"){
    console.log(`The differrence of two numbers = ${answers.num1-answers.num2}`)
}
else if(answers.operation==="division"){
    console.log(`The division of two numbers = ${answers.num1/answers.num2}`)
}
else if(answers.operation==="multiplication"){
    console.log(`The multiplication of two numbers = ${answers.num1*answers.num2}`)
}


