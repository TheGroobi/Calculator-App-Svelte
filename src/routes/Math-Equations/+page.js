/** @type {import('./$types').PageLoad} */

import { writable } from 'svelte/store';

export const calcDisplay = writable('1231');
export function handleNumberClick(e, num) {
    if (!(num === 0)) {
        calcDisplay.update(calcNum => {
            if (calcNum.slice(-1) === '.') {
                //then disable the num with '.'
            }
            return calcNum += num;
            
        });
    }
    // if(num === '.') {
    //     return 0;
    //     //find if previous is also '.' if so return;
    // }
}
//remove 0 from the start if number !== 0
//max numbers in display is 10

// function add(num1, num2) {
//     return calcDisplay + num2;
// }

//on click button with number add number to display
// on click of function buttons change the num1 to num2 and do the function according to the symbol 