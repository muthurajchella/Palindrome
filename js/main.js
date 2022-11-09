let number = parseInt(prompt("Enter Palindrome Number"));
let sum = 0;
num2 = number;

while(number>0){
    let rem = number%10;
    sum = (sum*10)+rem;
    number = (number-rem)/10; 
}
// console.log(sum);
if(sum === num2){
    console.log("In This Number Is An Palindrome");
}else{
    console.log("In This Number Is Not A Palindrome");
}