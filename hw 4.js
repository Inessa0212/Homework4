/* 1.  Given a number n (0 ≤ n ≤ 100) you should print the smallest positive number such that
its digits product is equal to n. */



// 2. Find the biggest common divisor of two inserted numbers.

function printTheBiggistCommon(num1,num2) { // заданные числа
  let result = '' ; // переменная для хранения результата
    for (let i = 1; i <= Math.min(num1,num2); i++) { // цикл  возврашает наименьшее чисел 
    if (num1 % i === 0 && num2 % i === 0) { // условия для цикла
       result = i; 
    }
  }
    return result;
}

// 3. Given a number. Print all prime factors of the number.

function primeFactors(inputNumber) {
  for (let i = 2; i <= inputNumber; i++) {
    while (inputNumber % i === 0) {
      console.log(i);
      inputNumber /= i;
    }
  }
}

/* 4. Enter a positive number. Calculate and print its factorial. ( n! = n * (n-1) * (n-2) * … * 3 * 2
 * 1 , 0! = 1 ) */

function primeFactorial(n) {
  if (n <= 0) {  // условие для 0
    return 1;
  } else {
    for (let i = 1; i <= n; i++) { //  срабатывает цикл 
        let result = n * primeFactorial(n - 1); // срабативает формула факториала 
    return result;  выводит результат 
    }
  }
}

/* 5.  Given a number n ( n &gt;= 0 ). Print n Fibonacci number. (Fibonacci series: 0, 1, 1, 2, 3,
5, 8 …, a k = a k-1 + a k-2 ) */

function numFibonacci(n) {
  if (n <= 0) {
  return n;
  } else {
    let num1 = 0;
    let num2 = 1;
  for (let i = 2; i <= n; i++) {
      let sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
  return num2;
  }
}

// 6.  Given a number n ( n &gt; 0 ). Print Fibonacci series up to n.

function numFibonacci(n) {
  if (n <= 1) {
  return n;
  } else {
    let num1 = 0;
    let num2 = 1;
  for (let i = 2; i <= n; i++) {
      let sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
  return num2;
  }
}
function serFibonacci(n) {
  for (let i = 0; numFibonacci(i) <= n; i++) {
    console.log(numFibonacci(i + `\n`));
  }
}
