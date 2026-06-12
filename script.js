let name="pranay";
var age=26;
const height="5.8";
console.log(name);
console.log(age);
console.log(height);
let a=10;
let b=20;
let sum=a+b;
console.log(a);
console.log(b);
console.log("sum of num a,b",+sum);
let muti=a*b;
console.log("multipl of num a,b",+muti);
let div=a/b;
let sub=b-a;
console.log("div of num a,b:"+div);
console.log("sub of num a,b:"+sub);
let age1=27;
console.log(age>age1);
console.log(age<age1);
console.log(age>=age1);
console.log(age<=age1);
console.log(age==age1);
console.log(age===age1);
if(age>age1){
    console.log(" age is mor the age1");

}
else{
    console.log("age is less than age1");
}
for(let i=0;i<=10;i++){
    console.log(i);
}
var num=11;
while(num<=20){
    console.log(num);
    num++;
}
var amount=20800;
console.log(amount);
if(amount>=500){
    var n=Math.floor(amount/500);

    console.log("500X"+n);
    amount=amount%500;

}
if(amount>=200){
    var k=Math.floor(amount/200);
    console.log("200X"+k);
    amount=amount%200;
}
if(amount>=100){
    var x=Math.floor(amount/100);
    console.log("100X"+x);
    amount=amount%100;
}

let user_name="pranay";
let user_password="pranay123";
if(user_name=="pranay"){
    if(user_password=="pranay123"){
        console.log("sing in to apply for the job");

    }
    else{
        console.log("incorrect password");
        console.log("place enter the right userpassword");
    }
}
else{
    console.log("incorrect username");
    console.log("place enter the right username");

}
console.log("hello word");


function cook(){
    console.log(" i like hava food");
}
cook();
function add( a, b){
    console.log(a+b);
}
add(10,20);
function muti(a,b){
    return a*b;
}
muti(10,20);

function num(n){

    
    if(n>10)
    {
        return ;
    }
    console.log(n);
    n=n+1;
    num(n);
}
num(1);
function guess(n) {

    let userGuess = Number(prompt("Enter a number:"));

    if (userGuess == n) {
        console.log("Congratulations! You guessed the number.");
    } else if (userGuess < n) {
        console.log("Too low! Try again.");
        guess(n);
    } else {
        console.log("Too high! Try again.");
        guess(n);
    }
}

let number = Math.floor(Math.random() * 100) + 1;
guess(number);
console.log("pranay");
let choclates=["melodi","fivestar","perk","kitkat","munch","alphenlebe"];
let sales={
    pranay :choclates[0],
    pava:choclates[1],
    uday:choclates[2],
    projek:choclates[3],
    c:choclates[4],
    a:choclates[5]
};
console.log(sales);
