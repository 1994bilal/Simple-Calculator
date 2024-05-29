import inquirer from "inquirer";

//Asking Questions from Users through inquirer

let answers = await inquirer.prompt([
    {message:"Enter First Number", type:"number", name:"firstNumber" },
    {message:"Enter Second Number",type:"number",name:"secondNumber"},
    {
        message:"Select one operator to perform operatrion",
        type:"list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division"],
    }

]);




if(answers.operator==="Addition"){
    console.log(answers.firstNumber + answers.secondNumber);
}

else if(answers.operator==="Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber);

}

else if(answers.operator==="Multiplication"){
console.log(answers.firstNumber * answers.secondNumber);
}

else if(answers.operator==="Division"){
    console.log(answers.firstNumber / answers.secondNumber);

}

else{
    console.log("Invalid number Given");
}

