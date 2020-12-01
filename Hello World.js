QUS-
Task

A greeting function is provided for you in the editor below. It has one parameter, parameter variable . Perform the following tasks to complete this challenge:

Use console.log() to print Hello, World! on a new line in the console, which is also known as stdout or standard output. The code for this portion of the task is already provided in the editor.
Use console.log() to print the contents of parameter variable (i.e., the argument passed to main).
You've got this!

Input Format

Data Type   	Parameter	                 Description
string		    parameter variable         A single line of text containing one or more space-separated words.
Output Format

Print the following two lines of output:

On the first line, print Hello, World! (this is provided for you in the editor).
On the second line, print the contents of .
Sample Input 0

Welcome to 10 Days of JavaScript!
Sample Output 0

Hello, World!
Welcome to 10 Days of JavaScript!



ANS-
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a lin
    console.log(parameterVariable);
}



function main() {
    const parameterVariable = readLine();
    
    greeting(parameterVariable);
}
