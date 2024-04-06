//Question 01
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}
let numbers = [1, 2, 3, 4, 5, 6,7,8,9,10];
let evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);


//Question 02
function Person(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}
function filterPeopleOver30(people) {
    return people.filter(person => person.age > 30);
}
let people = [
    new Person('lina', 18, 'lina@gmail.com'),
    new Person('khaled', 32, 'khaled@gmail.com'),
    new Person('person', 51, 'person@gmail.com')
];

let peopleOver30 = filterPeopleOver30(people);
console.log(peopleOver30);


//Question 03
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        if (this.items.length == 0) {
            return "Underflow";
        }
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0;
    }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek()); 
console.log(stack.pop());  
console.log(stack.peek()); 


//Question 04
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        if(this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }
    front() {
        if(this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }
    isEmpty() {
        return this.items.length == 0;
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.front()); 
console.log(queue.dequeue());  
console.log(queue.front()); 


//Question 05
function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}
let str = "Hello, World!";
let noVowels = removeVowels(str);
console.log(noVowels); 


//Question 06
function uniqueElements(array1, array2) {
    let combinedArray = [...array1, ...array2];
    let uniqueArray = [...new Set(combinedArray)];
    return uniqueArray;
}
let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];
let uniqueArray = uniqueElements(array1, array2);
console.log(uniqueArray); 


