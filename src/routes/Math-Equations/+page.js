/** @type {import('./$types').PageLoad} */

import { writable } from 'svelte/store';
import { onDestroy, onMount } from "svelte";

export const calcDisplay = writable('0');
// @ts-ignore
let num1;
num1 = calcDisplay.subscribe(calcNum => {
    num1 = calcNum;
    return num1 = Number(num1);
})
// @ts-ignore
let num2;
num2 = calcDisplay.subscribe(calcNum => {
    num2 = calcNum;
    return num2 = Number(num2);
})


// @ts-ignore
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
    return calcDisplay;
}
// @ts-ignore


export function handleActionClick(actionInput) {
    const arr = [num1, actionInput, num2];
    switch (actionInput) {
        case '=':
            calcDisplay.update(calcNum => {
                return calcNum = num1 + num2;
            })
        break;
        case '+':
            calcDisplay.update(calcNum => {
                return calcNum = num1 + num2;
            })
        break;
    }
    //@ts-ignore
    console.log(arr);
}

// function handleClick () {
//     if (this.classList.contains(''))
// }
//TO DO 
//max numbers in display is 10
// create an empty array[] for storing num1, actionInput, num2
// 
