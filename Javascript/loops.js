/**
 *  * JS LOOPS -- allow us to repeat a set of instructions multiple times;
 *         -- used to repeatedly execute a block of code until a specific condition is met 
 */

console.log('//=== JS LOOPS ---// ');

/**
 * For Loop 
 * 
 * for ([initialization] ; [condition] ; [arithmetic expression]) {
 *  //code that will be executed as long as the condition is trues
 *  }
 */
console.log('--- For Loop --- ');

for( let x = 0; x < 5 ; x++) {
    console.log(x); // print 0 - 4
}

// x = 0 --> 0 < 5 = true --> display 0 in the console --> 0++ = 0 + 1 = 1 (x = 1)
// x = 1 --> 1 < 5 = true --> display 1 in the console --> 1++ = 1+1 = 2 ( x = 2)
// ... 
// x = 5 -- > 5 < 5 = false --> stop the code 

/**
 * While loop
 * 
     while(condition) {
          //code block
     }
 */

     console.log('--- While Loop --- ');

let count = 0;
while(count < 10) {
    count++; // 0 + 1
    console.log(count);
}

let my_num = 1;
while(my_num <= 5 ) 
{
    console.log('Count: ', my_num);
    my_num++; // 1 + 1
}  

/** do..while loop -- executes the code block at least one, then checks the condition. If ture, it repeats.
 * 
    do {
        // code statement
    } while (condition)
 */

    console.log('--- Do...While Loop --- ');

let j = 1;

do {
    console.log('Do-while count: ', j);
    j++;
} while( j <= 5 )