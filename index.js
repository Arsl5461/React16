// var a=12;
// var a = 100;

// let b=15;
// b=16;

// const c=100;


// console.log(b);

// const a="Arslan";
// const b=23;
// const c=b+" "+a;
// console.log(c)

// If age is less than 20 so print you are young and if age is greater than 20 print you are adult
// const age=35;
// if(age<20){
//     console.log("You are young!")
// }
// else if(age>20 && age<30){
//     console.log("You Are Adult!")
// }
// else{
//     console.log("You are Senior Citizen!")
// }

// const marks=60;

// if(marks>=90 && marks<100){
//     console.log("You got A grade!")
// }
// else if(marks>=80 && marks<=90){
//     console.log("You got B  grade")
// }
// else if(marks>=70 && marks<=80){
//     console.log("You got C  grade")
// }
// else if(marks>=60 && marks<=70){
//     console.log("You got D  grade")
// }
// else if(marks>=50 && marks<=60){
//     console.log("You got B  grade")
// }
// else{
//     console.log("You are Fail!")
// }

// Hoisting
// For Loop
// For Each Loop
// Array
// Array index
// Object
// Functions






// Var => It can redecalre and reinitilize as well
// Let => It can be reinitilize buyt cannot be redecalre
// Const => It cannot be reinitilize and redeclare as well


// const user=[
// {
//     name:"Arslan Akmal",
//     age:27,
//     profession: "MERN STACK DEVELOPER",
//     brithday:"19-07-1996",
//     phone:"03074254897",

// },
// {
//     name:"Bilal Akmal",
//     age:25,
//     profession: "Business DEVELOPER",
//     brithday:"26-06-1998",
//     phone:"03174311047",

// },
// {
//     name:"Ali Akmal",
//     age:20,
//     profession: "Student",
//     brithday:"03-01-2004",
//     phone:"03021845861",

// },
// ]
// const userName="Arslan Akmal"
// const userAge=27
// const filtered=user.filter((user)=>user.name!==userName || user.age!==27)
// console.log(filtered)



// user.forEach((user)=>{
//     console.log(user.name)
// })
// user.map((user)=>{
// console.log(user.name);
// })
// function add(a,b){
//     console.log("Arslan Akmal")
//     return a+b;
// }

// const result=add(4,5);
// console.log(result)

// Create a simple calculator using functions and Es6
// Es5  Function
// function add(){

// }
// Es6 Function
// const add=()=>{
//    console.log("Arslan akmal") 
// }

const dataFunc = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      return json
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  (async ()=> {
    const data = await dataFunc();
    if (data) {
        data.map((item)=>{
            console.log(item.title)
        })
      const filteredArray = data.filter((product) => product.category === "men's clothing");
      console.log(filteredArray);
    }
    else{
        console.log("Arslan Akmal")
    }
  })();
 
    

//  const filteredArray= data.filter((product)=>product.category="men's clothing")
//  console.log(filteredArray)
// const age=27
// console.log(`My name is Arslan Akmal.My age is:${data}`)








