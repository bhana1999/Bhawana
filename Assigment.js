//Question - > Write a script in python or javascript to find the solution of the following problem.

let A =  288; //189 //288
let temp_str = A.toString();
let temp_number = 0;
let Flag = 0;
for (let i = 0; i < temp_str.length; i++)
    if (temp_number < parseInt(temp_str[i]))
        temp_number = parseInt(temp_str[i])
    else
    {
        Flag = 1
        break;
    }
if (Flag == 1)
    console.log("not valid")
else
    console.log("valid")
	
//Question - > Write a script in python or javascript that would take two numbers and generate the additional steps in a json format. 

var Result = {};
var temp = {};
let num1 = 1489; 
let num2 = 714;
let carry = "0";
let carrystring = "";
let sumstring = "";
num1_str = num1.toString();
num2_str = num2.toString();
let diff = num1_str.length - num2_str.length;
if (diff > 0)
{
    for (let i = 0; i < diff; i++)
        num2_str = "0" + num2_str
}
else
{
    for (let i = 0; i < diff; i++)
        num1_str = "0" + num1_str
}
for (let i = num1_str.length-1; i >= 0 ; i--)
{
    token = (parseInt(num2_str[i]) + parseInt(num1_str[i]) + parseInt(carry)).toString()
    if (parseInt(token) <= 9)
    {
        carry = "0"
        sumstring = token + sumstring
    }
    else
    {
        carry = token.slice(0,-1)
        sumstring = token.slice(-1) + sumstring
        carrystring = carry + carrystring
    }
    temp['carrystring'] = carrystring
    temp['sumString'] = sumstring
    let t = num1_str.length - i
    let key = "step" + t
    Result[key] = Object.assign({},temp);
}
console.log(Result)