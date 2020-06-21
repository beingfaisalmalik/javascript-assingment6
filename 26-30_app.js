function Function1()
{
  
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo3").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";

    var number2 = window.prompt("PLEASE ENTER A NUMBER")
   var number = Math.abs(number2);
  var number3 = Math.floor(number);
  var number4 = Math.round(number);
  var number5 = Math.ceil(number);
    function myFunction() {

        document.getElementById("demo1").innerHTML ="Number:"+ number+"<br>"+"Floor"+number3+"<br>"+"Round"+number4+"<br>"+"Ciel"+number5;
      }
myFunction();
}
function Function2()
{
  
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo3").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";

  var n = window.prompt("PLEASE ENTER A NUMBER")
  var n2 = Math.sign(n);
  if(n2==-1)
  {
    var number3= Math.round(n);
 var number4 = Math.floor(n);
 var number5 = Math.ceil(n);
 document.getElementById("demo2").innerHTML ="Number:"+ n+"<br>"+"Floor"+number4+"<br>"+"Round"+number3+"<br>"+"Ciel"+number5;
  }
  else{
    alert("PLease Enter A Negative Number")
    document.getElementById("demo2").innerHTML = " ";
  }
        
}

function Function3()
{
  
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  var n = window.prompt("PLEASE ENTER A NUMBER TO FIND IT's ABSOLUTE VALUE")
  var n2 = Math.abs(n);
  document.getElementById("demo3").innerHTML = "The Absolute Value Of :"+" "+n+" ="+" "+n2;
 
}
function Function4()
{
  
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo3").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
 
  var n1 = Math.floor(Math.random() * 6) + 1;
  var n2 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("demo4").innerHTML = "The 1st Random Dice  Value :"+" "+n1+" <br>"+"The 2nd Random Dice  Value :"+" "+n2;
 
}
function Function5()
{
  
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo3").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
 
  var n1 = Math.floor(Math.random() *10 ) + 1;
  var n2 = Math.floor(Math.random() * 10) + 1;
  if(n1<6){
     n1="HEADS";
     document.getElementById("demo5").innerHTML = "The 1st Random Dice  Value :"+" "+n1+" <br>"+"The 2nd Random Dice  Value :"+" "+n2;
  }
  else {
    n1="TAILS";
    document.getElementById("demo5").innerHTML = "The 1st Random Dice  Value :"+" "+n1+" <br>"+"The 2nd Random Dice  Value :"+" "+n2;
 }
 if(n2<=6){
  n2="HEADS";
  document.getElementById("demo5").innerHTML = "The 1st Random Dice  Value :"+" "+n1+" <br>"+"The 2nd Random Dice  Value :"+" "+n2;
}
else{
 n2="TAILS";
 document.getElementById("demo5").innerHTML = "The 1st Random Dice  Value :"+" "+n1+" <br>"+"The 2nd Random Dice  Value :"+" "+n2;
} 
}
function Function6()
{
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo3").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
 
  var n2 = Math.floor(Math.random() * 100) + 1;
  document.getElementById("demo6").innerHTML = "The Number Generated Between 1 To 100:"+" "+n2;
}  
function Function8()
{
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo3").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
 
  var n2 = window.prompt("PLEASE  ENTER A NUMBER")


  var  n3 = Math.floor(Math.random() * 10) + 1;
   if(n2==n3)
     {
       alert("Congractulations")

     }
  else{
    alert("Try Again")
  }
   
} 
function Function7()
{
  document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo3").innerHTML = " ";
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";

  var weight = window.prompt("PLEASE ENTER YOUR WEIGHT");
  parseInt(weight);
  document.getElementById("demo7").innerHTML = "Your Weight Is: "+" "+weight;
}
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
}

