/** @type {import('./$types').PageLoad} */

import { writable } from 'svelte/store';

export const calcDisplay = writable('0');

export function handleNumberClick(numInput) {
    calcDisplay.update(calcNum => {
        if (calcNum.includes('.')) {
            if (typeof numInput === 'number') {
                return calcNum += numInput;
            }
            return calcNum;
        } else if (calcNum.slice(0) === '0' && numInput === 0) {
            return calcNum;
        } else if (calcNum.slice(0) === '0' && numInput === '.') {
            return calcNum += numInput;
        } else {
            if(calcNum[0] === '0') {
                calcNum += numInput;
                return calcNum = calcNum.slice(1);
            } else {
                return calcNum += numInput;
            }
        }
    })
}

export function handleActionClick(actionInput) {
    console.log(calcDisplay)
}
//function that stores the number1 the symbol pressed and the number 2 in an array 
//[num1, symbol, num2]
// 

//remove 0 from the start if number !== 0

//max numbers in display is 10

// function add(num1, num2) {
//     return calcDisplay + num2;
// }

//on click button with number add number to display
// on click of function buttons change the num1 to num2 and do the function according to the symbol 