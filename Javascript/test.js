//Basics of JS
/*
document.write("This is external js");
document.getElementById('th').innerHTML = "This is a para";
var a1 = 5;
var a11 = 45;
var a3 = "This is me";
document.write(a1+a11, "<br>");
document.write(a1, a11, "<br>")
console.log("This is console");

var age = prompt("Enter your age : ");
alert("Your age is ", age);
*/

//Basic Arithmetic Operators
/*
document.write("3 + 3  = ", 3+3, "<br>");
document.write("3 - 3  = ", 3-3, "<br>");
document.write("3 * 3  = ", 3*3, "<br>");
document.write("3 / 3  = ", 3/3, "<br>");
document.write("3 % 3  = ", 3%3, "<br>");
*/

//Basic App
/*
var cost = prompt("Enter the foodcost : ");
var no = prompt("No of People : ");
document.write("Bill of the Food : ", cost, "<br>");
document.write("Contribution of Each Person : ", no, "<br>" );
*/

//Basic Math Functions
/*
document.write("2^3 = ", Math.pow(2,3), "<br>");
document.write("abs(-81)", Math.abs(-81), "<br>");
document.write("sqrt(81)", Math.sqrt(81), "<br>");
document.write("ceil(4.6)", Math.ceil(4.6), "<br>");
*/

//Basic String Functions
/*
var str = "Coding";
document.write(str, "<br>");
document.write(str.length, "<br>");
document.write(str.indexOf("ding"), "<br>");
document.write(str.slice(1,4), "<br>");
*/

//if-else loop with relational & logical operators
/*
var num = prompt("Enter a Number : ");

if (num<50)
{

	document.write("Number is less then 50");
}

else if (num<100 && num>50)
{
	document.write("Number is between 50 & 100");
}

else if ((num<150 && num>100) || (num<200 && num>150))
{
	document.write("The or operator");
}

else 
{
	document.write("The number is greater than 200")
}
*/

//Switch case
/*
var num = prompt("Enter an number : ");
switch(num)
{
case "num<50":
	document.write("Number is less than 50");
	break;

case "num>50":
	document.write("Number is greater than 50");
	break;

default :
	document.write("Number is greater than 100");
}
*/

var num = 50;
while(num<50)
{
	if(num%2==0)
	{
		document.write(num, "<br>")
	}

}