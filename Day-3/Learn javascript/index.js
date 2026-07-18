// <------------- Templates literal ------------------->


var name = "Priyanshu Banoudha"
let age = 200

console.log(`My name is ${name}
                age ${age}`);


//<---------------------- Arrow function -------------------------------->

// arrow function
 
let fun1 = (val) => {
    return (val *2)
}
console.log(fun1(2));  


//semi function 

let cal1 = function (val1,val2){
    return (val1+val2)
}
console.log(cal1(3,9));



let add = (val1,val2) => val1+val2
console.log(add(1,15));

let mult = (val1,val2) => val1*val2
console.log(mult(15,1));

let divi = (val1,val2) => val1/val2
console.log(divi(5,15));

let subs = (val1,val2) => val1-val2
console.log(subs(15,16));

let square = (val2) => val2*val2
console.log(square(10));

let cube = (val2) => val2*val2*val2
console.log(cube(10));

let factorial = (val) => {

}



// default parameter
 
let add = (val1 = 10,val2 =30,val3 = 70) => val1+val2+val3
console.log(add());

let fun = (str = "srm",str1 ="cem") => {
    return str+str1
}
console.log(fun("Priyanshu"," Banoudha"));
console.log(fun());


// <-------------------- spread operator , rest -------------------------------->


// rest ,when passed with variable 
// spread ,when passed with object



let rest = (...numbers) =>{
    return Math.max(...numbers)
}

console.log(rest(10,582,52,50,52,5));

let rest1 = (...name) =>{
    return name
}

console.log(rest1("hello","my","name","is","dash"));


// <----------------------map---------------------------------->

// operation perform karta array ke sare element 

let useMap = (...values) => {
        return values.map(num => num+1)
}

console.log(useMap(1,2,3,4,3,5,6,8,2,8,5,1,5,2,));

// <-----------------------filter------------------------------>

// filter kr do condition ke hisaab se 

let usefilter = (...value)=> {
    return value.filter(num => num %2 == 0)

}
console.log(usefilter(1,2,3,4,5,6,7,8,9,10,11));

let usefilter1=(...value) =>{
    return value.filter(str => str === 'is')
}
console.log(usefilter1("hello","this","is",'filter'));



// <------------------------- Reduce -------------------------->


// operation perform krna hai sab pe magar return kare ek value 


let useReduc = (...value) => {
    return value.reduce((num1,num2) => num1*num2 , 1)
}
console.log(useReduc(1,2,3,4,5,6,7,8,9,10,11));


//   task 

// create a array in 

 

let startEndData = (...names) => {
    return names.filter(n => n.toLowerCase().endsWith('a'));
};

console.log(startEndData("hello", "this", "is", "filter", "cocacola"));


// <----------------------------- Destructuring ---------------------------------------->


let student = {
    "name" : "Priyanshu",
    "age"  : "20",
    "college" : "srmcem"
}


 //name1 = student.name       //ES5
const {name : name1 ,age,college} = student   //ES6
console.log(name1,age,college);





// <------------------------------Loops forin------------------------------------------->
//jab index lenaho  to forin ,jab value lena ho to forof do ko combine kr do to foreach ban jata hai 

let student = {
    "name" : "anshu",
    "age"  : "200",
    "college" : "sr"
}


for (const key in student){
    console.log(key);
    
}
console.log("<------------------------------>");
for (const name in student){
    console.log(student[name])
}
    

// <-----------------------forof-------------------------------->

for (const element of Object.keys(student)) {
    console.log(element);
    
}

for(const val of Object.values(student)){
    console.log(val);
    
}
    

//<---------------------- foreach ----------------------->


Object.entries(student).forEach((key,value) => {
    console.log(key,value);})

Object.entries(student).forEach((key )=>{
    console.log(key);
    
})
    

//<---------------- Array ------------------>
  
let arr = [1,2,3,4,5,6,7,8,9]

arr.pop()
console.log(arr);

arr.push(3)
console.log(arr);

arr.push([10,11,12,13])

console.log(arr);

console.log(arr[9][0]);
arr.push([9,0])

console.log(arr);


// student management  create obj id, name , course , college 
// add student 
//delete student 


let studentsData = []

let studentObject = (id , name , course , college ) => {
    const newStudent = {id : id , name : name , course : course , college : college }
    studentsData.push(newStudent)
    
}

let deleteStudent = () => {
    studentsData.pop()
}


let deleteById = (id) => {

}


studentObject(66,"Vinod","B-tech","srmcem")
studentObject(66,"Vinod","B-tech","srmcem")
console.log(studentsData);
deleteStudent();
console.log(studentsData);





//blocksy 



// <--------------------------  classes ----------------------------->


// 1) declaring a class 
class students {
    constructor(name , age) {
        this.name = name ;
        this.age = age ;
    }
    
     greet() {
        console.log(`Hello, I am ${this.name}`);
        
    }
    
}
const s1 = new students("anshu",20)
console.log(s1.name);
s1.greet


// <------ Instance Method ------->
// Methods belong to every object created from the class.

*
class Calculator {
    add(a,b) {
        return a + b
    }
    subtract(a,b){
        return a-b;
    }
}

const calc = new Calculator();

console.log(calc.add(10, 5));
console.log(calc.subtract(10, 5));

//  <------ Static Method ------->
// Static methods belong to the class itself, not to its instances.



class MathUtils {
    static square(num) {
        return num * num;
    }
}

console.log(MathUtils.square(5));

Output:

25

// ❌ This won't work:

const m = new MathUtils();
m.square(5);



// <------ Inheritance ------->

class Animal  {
    speaks(){
        console.log("Hello");
    }
}
class Dog extends Animal {
    bark(){
        console.log("woof");
        
    }
}
const d = new Dog () ;
d.speaks();
d.bark()


// <------ super ------->
// Use super() to call the parent class constructor.

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}

const d = new Dog("Dodo", "Labrador");

console.log(d.name);
console.log(d.breed);


// <------ Method Overloading ------->
// A child class can provide its own implementation of a method.

 
    class Animal {
    speak() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof!");
    }
}

const d = new Dog();
d.speak();



// <------ Getter and Setter Method ------->

class Student {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

const s = new Student("Anshu");

console.log(s.name);

s.name = "Rahul";

console.log(s.name);





//  Class Expression

// Just like functions, classes can also be expressions.

const Person = class {
    sayHi() {
        console.log("Hi");
    }
};

const p = new Person();
p.sayHi();





    // Private Fields (#)

// Private fields can only be accessed inside the class.

class BankAccount {
    balance = 1000;

    showBalance() {
        console.log(this.balance);
    }
}

const account = new BankAccount();

account.showBalance();

Output:

1000

// This will cause an error:

console.log(account.#balance);
// 11. Static Fields
class Student {
    static school = "ABC School";
}

console.log(Student.school);
