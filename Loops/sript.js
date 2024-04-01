// for(let i =1; i<=5; i++){
//     console.log("hello world");
// }
// calculate sum 1 to 5





// sum=0;
// for(let i = 0; i<=5;i++){
//     sum=sum+i;
// }
// console.log(sum);






// while loop

// let i = 1;
// while(i<=5) {
//     console.log(i);
//     i++
// }






// do while loop

// let i = 20;
// do{
//     console.log("this is do while loop")
//     i++;
// } while(i<=10);







// for of loop

// let str = "AbhishekGupta";

// let size = 0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }






// for in loop

// let student={
//     name: "Abhishek Gupta",
//     age : 22,
//     cgpa: 8,
//     isPass: true,
// };
// for(let key in student){
//     console.log("key=",key, "value=",student[key]);
// }







// Practice Questions

// Question no. 1 :- print all even numbers from 0 to 100.

// for(let i =0; i<=100;i++){
//     if(i%2===0){
//     console.log(i);


//     }
// }








// Question No.2:- Create a Game where you start with any random game number. Ask the user to keep the guessing th game number untill the user enters the correct value.

let gameNum = 25;
let userNum = prompt("guess the gamNume : ");

while(userNum !=gameNum){
    userNum = prompt("You enterd the wrong value please guess the correct value");
}
prompt("congaratulation you entered the right number",userNum)

