

// 1. Write a loop to print numbers from 1 to 10.
for(let i = 1; i<=10; i++){
    console.log(i);
}

// 2. Write a loop to print even numbers from 1 to 20.
for (let i = 1; i<=20; i++){
    if(i % 2== 0){
        console.log(i);
    }
}

// 3. Write a loop to calculate and print the factorial of a number (let's say 5)
let factorial = 1;
for(i = 1; i<=5; i++){
    factorial = factorial*i;
}
console.log(factorial);

// 4. Write a loop to print the multiplication table of a number (let's say 7) up to 10
for(i = 1; i<=10; i++){
    console.log(i * 7);
}

// Write a loop to print the square of numbers from 1 to 10.
for(i=1; i<=10; i++){
    console.log(i*i);
}

// Write a loop to find and print the largest element in an array (let's say [3, 7, 2, 9, 5]).
let array = [3,8,9,5,4];
let largest = array[0];

for(i=1; i<=array.length; i++){
    if(array[i]>largest){
        largest = array[i]
    }
}
console.log(largest);
