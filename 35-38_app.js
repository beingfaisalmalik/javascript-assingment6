function Function0()
{
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo3").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " "; 
  document.getElementById("demo10").innerHTML = " "; 
  document.getElementById("demo11").innerHTML = " ";
  document.getElementById("demo12").innerHTML = " ";
  document.getElementById("demo13").innerHTML = " ";
  document.getElementById("demo14").innerHTML = " ";
  document.getElementById("demo15").innerHTML = " ";


}
function Function1()
{
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo3").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
  document.getElementById("demo11").innerHTML = " ";
  document.getElementById("demo10").innerHTML = " ";
  document.getElementById("demo12").innerHTML = " ";
  document.getElementById("demo14").innerHTML = " ";
  document.getElementById("demo15").innerHTML = " ";
  var d  = new  Date();
  document.getElementById("demo1").innerHTML = "Current Date: "+" "+d;
}
function Function2(n, n2)
{
  document.getElementById("demo3").innerHTML = " ";
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
  document.getElementById("demo10").innerHTML = " ";
  document.getElementById("demo11").innerHTML = " ";
  document.getElementById("demo12").innerHTML = " ";
  document.getElementById("demo14").innerHTML = " ";
  document.getElementById("demo15").innerHTML = " ";
  var n = window.prompt("Enter Your First Name");
  var n2 = window.prompt("Enter Your Lastname");
   

  document.getElementById("demo2").innerHTML = "Welcome User: "+" "+n+""+n2;

}
function Function3()
{
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
  document.getElementById("demo10").innerHTML = " ";
  document.getElementById("demo11").innerHTML = " ";
  document.getElementById("demo12").innerHTML = " ";
  document.getElementById("demo14").innerHTML = " ";
  document.getElementById("demo15").innerHTML = " ";
var a= window.prompt("Enter another number: ", 0);
var b = window.prompt("Enter another number: ", 0);
var value1 = parseFloat(a) + parseFloat(b);

function sum1 (a, b)
{ 
  var value1 = parseFloat(a) + parseFloat(b);
   return value1;
}
 
   
   document.getElementById("demo3").innerHTML = "The Total Sum OF Two Numbers: "+" "+value1;
   sum1(a,b)
}
function Function4()
{
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo3").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
  document.getElementById("demo10").innerHTML = " ";
  document.getElementById("demo11").innerHTML = " ";
  document.getElementById("demo12").innerHTML = " ";
  document.getElementById("demo14").innerHTML = " ";

  document.getElementById("demo15").innerHTML = " ";
  var a= window.prompt("Enter First number: ", 0);
var b = window.prompt("Enter Second number: ", 0);
var oper = window.prompt("Enter Operator: ", 0);
function Calculator (num1,num2,operator)
{ 
  if (operator==='+')
  {
    var result = parseFloat(num1) + parseFloat(num2);
    document.getElementById("demo4").innerHTML = "The Result Of:"+" "+num1+operator+num2+"="+result;
  }
  else if (operator==='-')
  {
    var result = parseFloat(num1) - parseFloat(num2);
    document.getElementById("demo4").innerHTML = "The Result Of:"+" "+num1+operator+num2+"="+result;
  }
  else if (operator==='*')
  {
    var result = parseFloat(num1) * parseFloat(num2);
    document.getElementById("demo4").innerHTML = "The Result Of:"+" "+num1+operator+num2+"="+result;
  }
  else if (operator==='/')
  {
    var result = parseFloat(num1) / parseFloat(num2)
    document.getElementById("demo4").innerHTML = "The Result Of:"+" "+num1+operator+num2+"="+result;
  }
else{
  document.getElementById("demo4").innerHTML = "Wrong Operator:"+" "+operator;
}
}
Calculator(a,b,oper)

}
function Function5()
{
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo3").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
  document.getElementById("demo10").innerHTML = " ";
  document.getElementById("demo11").innerHTML = " ";
  document.getElementById("demo12").innerHTML = " ";
  document.getElementById("demo14").innerHTML = " ";
  document.getElementById("demo15").innerHTML = " ";
  

var a= window.prompt("Enter The Number: ", 0);
function sum1 (a)
{ 
  var value1 = parseFloat(a) * parseFloat(a);
  document.getElementById("demo3").innerHTML = "The Square OF:"+a +"= "+value1;
}
 
   
  
   sum1(a)
}
function Function6()
{
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
  document.getElementById("demo10").innerHTML = " ";
  document.getElementById("demo11").innerHTML = " ";
  document.getElementById("demo12").innerHTML = " ";
  document.getElementById("demo14").innerHTML = " ";
  document.getElementById("demo15").innerHTML = " ";
var a= window.prompt("Enter The Number: ", 0);
function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return document.getElementById("demo3").innerHTML = "The Factorial OF:"+n +"= "+answer;;
  } 


}
factorial(a); 

}
function Function7()
{
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
  document.getElementById("demo10").innerHTML = " ";
  document.getElementById("demo11").innerHTML = " ";
  document.getElementById("demo12").innerHTML = " ";
  document.getElementById("demo14").innerHTML = " ";
  document.getElementById("demo15").innerHTML = " ";
 
var a= window.prompt("Enter The Starting  Number: ");
var b= window.prompt("Enter The Ending  Number: ");

function Counting(num1, num2)
{
for (num1 = 0; num1 <= num2; num1++)
{
  
  console.log(num1)

}

}
document.getElementById("demo7").innerHTML = "Check The Console For Result";
Counting(a,b)
}
function Function8()
{
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
  document.getElementById("demo10").innerHTML = " ";
  document.getElementById("demo11").innerHTML = " ";
  document.getElementById("demo12").innerHTML = " ";
  document.getElementById("demo14").innerHTML = " ";
  document.getElementById("demo15").innerHTML = " ";
  var a= window.prompt("Enter The Base: ");
var b= window.prompt("Enter The Perpendicular: ");

  
function CalculateHypotense(base,perp)
{
  
  
  function CalculateSqaure(b2,p2)

  {
     base2 = b2 *b2
     perp2 = p2 *p2
     hypo = base2 + perp2
  document.getElementById("demo8").innerHTML = " The Hypotense`2:"+" "+hypo;
  }
  CalculateSqaure(base,perp)
}
CalculateHypotense(a,b)

}  
function Function9()
{
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo10").innerHTML = " ";
  document.getElementById("demo11").innerHTML = " ";
  document.getElementById("demo12").innerHTML = " ";
  document.getElementById("demo14").innerHTML = " ";
  document.getElementById("demo15").innerHTML = " ";
  var a= window.prompt("Enter The Width: ");
  var b= window.prompt("Enter The Height: ");
  
    
  function CalculateArea(width,height)

  {
    var value1 = parseFloat(width) * parseFloat(height);
  document.getElementById("demo9").innerHTML = "The Area  OF Rectangle:"+a +"= "+value1;
  }
  CalculateArea(a,b);
}
function Function10()
{
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
  document.getElementById("demo11").innerHTML = " ";
  document.getElementById("demo12").innerHTML = " ";
  document.getElementById("demo14").innerHTML = " ";
  document.getElementById("demo15").innerHTML = " ";
  var a= window.prompt("Enter The String: ");
function Palindrome_Checker(palandrome){
     var pstring = palandrome.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var count = 0;
    if(pstring==="") {
      document.getElementById("demo10").innerHTML =("Nothing found!");
      return false;
    }
    if ((pstring.length) % 2 === 0) {
      count = (pstring.length) / 2;
    } else {
      if (pstring.length === 1) {
        document.getElementById("demo10").innerHTML =("Entry is a palindrome.");
        return true;
      } else {
        count = (pstring.length - 1) / 2;
      }
    }

    for (var x = 0; x < count; x++) {
      if (pstring[x] != pstring.slice(-1-x)[0]) {
        document.getElementById("demo10").innerHTML =("Entry is not a palindrome.");
        return false;
      }
    }
    document.getElementById("demo10").innerHTML =("The entry is a palindrome.");
    return true;
  }
  Palindrome_Checker(a);

}
function Function11()
{
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
  document.getElementById("demo10").innerHTML = " ";
  document.getElementById("demo12").innerHTML = " ";
  document.getElementById("demo14").innerHTML = " ";
  document.getElementById("demo15").innerHTML = " ";
  var a = window.prompt("Enter A Sentence")
  function capital_maker(word)
{
  var array1 = word.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.getElementById("demo11").innerHTML =(capital_maker(a));

}
function Function12()
{
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
  document.getElementById("demo10").innerHTML = " ";
  document.getElementById("demo11").innerHTML = " ";
  document.getElementById("demo14").innerHTML = " ";
  document.getElementById("demo15").innerHTML = " ";
  var a = window.prompt('Enter The Sentence')
  function logest_word(sentence)
{
  var arr = sentence.match(/\w[a-z]{0,}/gi);
  var result = arr[0];

  for(var x = 1 ; x < arr.length ; x++)
  {
    if(result.length < arr[x].length)
    {
    result = arr[x];
    } 
  }
  return result;
}

document.getElementById("demo12").innerHTML = (logest_word(a)); 

}
function Function13()
{
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
  document.getElementById("demo10").innerHTML = " ";
  document.getElementById("demo11").innerHTML = " ";
  document.getElementById("demo12").innerHTML = " ";
  document.getElementById("demo14").innerHTML = " ";
  document.getElementById("demo15").innerHTML = " ";
  var a = window.prompt('Enter The Sentence')
  var b = window.prompt('Enter The Letter')
  function counter(word, character) 
{
 var count = 0;
 for (var pos = 0; pos < word.length; pos++) 
 {
    if (word.charAt(pos) == character) 
      {
      count += 1;
      }
  }
  return count;
}

document.getElementById("demo13").innerHTML =(counter(a,b));


}
function Function14()
{
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
  document.getElementById("demo10").innerHTML = " ";
  document.getElementById("demo11").innerHTML = " ";
  document.getElementById("demo12").innerHTML = " ";
  document.getElementById("demo13").innerHTML = " ";
  
  
  var a = window.prompt('Enter The Radius');
  function CalcCircumference(radius)
  {
    var  pie = 3.142;
    var two = 2;
    var circum = two*pie*parseFloat(radius);
    document.getElementById("demo14").innerHTML ="The Circumference OF The Circle:"+" "+ circum;
  }
  function CalcArea(radius)
  {
    var  pie = 3.142;
    var area =pie*parseFloat(radius)*parseFloat(radius);
    document.getElementById("demo15").innerHTML ="The Area OF The Circle:"+" "+ area;
  }
  CalcCircumference(a);
  CalcArea(a);
}
