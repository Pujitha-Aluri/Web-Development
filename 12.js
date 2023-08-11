n1=34;
n2=56
document.write("sum is ",n1+n2,"<br>")
 
function cal(){
    document.write(" Hello <br>")
}
cal()
cal()
cal()
function cal1(num1,num2){
    document.write(num1+num2,"<br>")
}

cal1(1,2)
cal1(3,4)

a=10
b="10"
document.write(a==b,"<br>") //compares only value
document.write(a===b) //compares value along with the datatype

for(i=0;i<=10;i++){
    document.write("<br>",i,"<br>")
}

var un=prompt("Enter username:")
var p=prompt("Enter password")

//Conditional Statements
if(un=="Admin" && p=="123"){
    document.write("Login successful")
}
else if(un=="Admin"||p=="123"){
    document.write("Enter correct credentials")
}
else{
    document.write("Enter")
}

//Array

let arr=[1,2,3,"hi"]
document.write("<br>",arr)
document.write("<br>",arr[2])