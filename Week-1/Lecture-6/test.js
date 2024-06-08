var x =14;
{
	let x =20;
	console.log(x);
}
console.log(x);

//arrow function
const a = (x,y)=> x+y;
console.log(a(20,43));
 //spread operation -> to expand an array
const q1=["Jan","Feb","Mar"];
const q2=["Apr","May","Jun"];
const q3=["Jul","Aug","Sep"];
const q4=["Oct","Nov","Dec"];

const year=[...q1,...q2,...q3,...q4];
console.log(year);

const myNumbers =[17,23,03,06];
let maxValue = Math.max(...myNumbers);
console.log(maxValue);
// for loop
const myNumber =[17,23,03,06];
let sum = 0;
for(let num of myNumber){
    sum = sum + num;
}
console.log(sum);

const name ="Bruhadev";
let text = "";
for(let ch of name) {
    text += ch + " " ;
}
console.log(text);
//map
const fruits = new Map([["apples",500],["bananas",300],["oranges",700]]);
console.log(fruits);
console.log(fruits.get("bananas"));

//sets
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("a");

console.log(letters);
//classes
class Car {
	constructor(name,mfgYear){
		this.name = name;
		this.mfgYear = mfgYear;
	}
}
const myCar1 = new Car("Mercedes",2022);
const myCar2 = new Car("BMW",2020);
const myCar3 = new Car("porsche",2021);

console.log(myCar1,myCar2,myCar3);

//Promises
const myFunction =()=>{
return myPromise = new Promise((resolve , reject)=>{
	setTimeout(()=>{
		console.log("This is Inside Promise");
		resolve();
	},2000);
});
};
myFunction()
.then(()=>{
	console.log("Resolved");
})
.catch(()=>{
	console.error("Rejected");
})


//Object
const person={
  firstName:"Bruhadev",
  lastName:"Kandimalla",
  age: 20,
  eyecolor: "black"
};
let id = Symbol("id");
person[id] = 12203561;

console.log(person);



//default value
const addTwoNumber=(a,b=10)=>a+b;
console.log(addTwoNumber(10));


// Function rest operator
const addNumbers =(...args)=>{
	let sum =0;
	for(let arg of args){
		sum += arg;
	}
	return sum;
};
console.log(addNumbers(10,20,35,46,55,64));