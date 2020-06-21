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

}
function Function1(){
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
    var d = new Date();
document.getElementById("demo1").innerHTML = d;
}

function Function2(){
    document.getElementById("demo1").innerHTML = " ";
    document.getElementById("demo3").innerHTML = " ";
    document.getElementById("demo4").innerHTML = " ";
    document.getElementById("demo5").innerHTML = " ";
    document.getElementById("demo6").innerHTML = " ";
    document.getElementById("demo7").innerHTML = " ";
    document.getElementById("demo8").innerHTML = " ";
    document.getElementById("demo9").innerHTML = " "; 
    document.getElementById("demo10").innerHTML = " "; 
    document.getElementById("demo11").innerHTML = " ";
    document.getElementById("demo12").innerHTML = " ";
    function show_now(){
        var my_month=new Date()
        
        
        var month_name=new Array(12);
        month_name[0]="January"
        month_name[1]="February"
        month_name[2]="March"
        month_name[3]="April"
        month_name[4]="May"
        month_name[5]="June"
        month_name[6]="July"
        month_name[7]="August"
        month_name[8]="September"
        month_name[9]="October"
        month_name[10]="November"
        month_name[11]="December"
        
        document.getElementById("demo2").innerHTML =    ("Current month = " + month_name[my_month.getMonth()]); 
        }
  show_now();
}
function Function3(){
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
    var d = new Date();
    var n = d.getDay()
    if(n==1)
    {

    document.getElementById("demo3").innerHTML = "Mon";
    }
    if(n==2)
    {

    document.getElementById("demo3").innerHTML = "Tue";
    }
    if(n==3)
    {

    document.getElementById("demo3").innerHTML = "Wed";
    }
    if(n==4)
    {

    document.getElementById("demo3").innerHTML = "Thur";
    }
    if(n==5)
    {

    document.getElementById("demo3").innerHTML = "Fri";
    }
    if(n==6)
    {

    document.getElementById("demo3").innerHTML = "Sat";
    }
    if(n==7)
    {

    document.getElementById("demo3").innerHTML = "Sun";
    }

}
function Function4(){
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
    var d = new Date();
    var n = d.getDay()
    if(n==1)
    {

    document.getElementById("demo4").innerHTML = " It's Monday";
    }
    if(n==2)
    {

    document.getElementById("demo4").innerHTML = "It's Tuesday";
    }
    if(n==3)
    {

    document.getElementById("demo4").innerHTML = "It's Wednesday";
    }
    if(n==4)
    {

    document.getElementById("demo4").innerHTML = "It's Thursday";
    }
    if(n==5)
    {

    document.getElementById("demo4").innerHTML = "It's Friday";
    }
    if(n==6)
    {

    document.getElementById("demo4").innerHTML = "Its Fun Day";
    }
    if(n==7)
    {

    document.getElementById("demo4").innerHTML = "Its Funday";
    }

}
function Function5(){
    document.getElementById("demo2").innerHTML = " ";
    document.getElementById("demo1").innerHTML = " ";
    document.getElementById("demo3").innerHTML = " ";
    document.getElementById("demo4").innerHTML = " ";
    document.getElementById("demo6").innerHTML = " ";
    document.getElementById("demo7").innerHTML = " ";
    document.getElementById("demo8").innerHTML = " ";
    document.getElementById("demo9").innerHTML = " "; 
    document.getElementById("demo10").innerHTML = " "; 
    document.getElementById("demo11").innerHTML = " ";
    document.getElementById("demo12").innerHTML = " ";
    var d = new Date();
     
    var date = d.getUTCDate();
    var month = d.getUTCMonth() + 1; // Since getUTCMonth() returns month from 0-11 not 1-12
    var year = d.getUTCFullYear();
     
    var dateStr = date;
      if(dateStr<16){
        document.getElementById("demo5").innerHTML = ("First 15 days of the month");
      }
      else{
        document.getElementById("demo5").innerHTML = ("Last days of the month")
      }
   
}
function Function6(){
    document.getElementById("demo2").innerHTML = " ";
    document.getElementById("demo1").innerHTML = " ";
    document.getElementById("demo3").innerHTML = " ";
    document.getElementById("demo4").innerHTML = " ";
    document.getElementById("demo5").innerHTML = " ";
    document.getElementById("demo7").innerHTML = " ";
    document.getElementById("demo8").innerHTML = " ";
    document.getElementById("demo9").innerHTML = " "; 
    document.getElementById("demo10").innerHTML = " "; 
    document.getElementById("demo11").innerHTML = " ";
    document.getElementById("demo12").innerHTML = " ";
    var dt = new Date();
var h = dt.getHours(),
  m = dt.getMinutes();
var time;
if (h == 12) {
  time = h + ":" + m + " PM";
} else {
  time = h > 12 ? h - 12 + ":" + m + " PM" : h + ":" + m + " AM";
}

document.getElementById("demo6").innerHTML = (`CURRENT TIME IS ${time}`);
}  
function Function7(){ 
    document.getElementById("demo2").innerHTML = " ";
    document.getElementById("demo1").innerHTML = " ";
    document.getElementById("demo3").innerHTML = " ";
    document.getElementById("demo4").innerHTML = " ";
    document.getElementById("demo6").innerHTML = " ";
    document.getElementById("demo5").innerHTML = " ";
    document.getElementById("demo8").innerHTML = " ";
    document.getElementById("demo9").innerHTML = " "; 
    document.getElementById("demo10").innerHTML = " ";
    document.getElementById("demo11").innerHTML = " ";
    document.getElementById("demo12").innerHTML = " "; 
    var LateDate = new Date(2020, 11, 31, 00,00, 00,0);
    document.getElementById("demo7").innerHTML = LateDate;
    
}  
function Function8(){ 
    document.getElementById("demo2").innerHTML = " ";
    document.getElementById("demo1").innerHTML = " ";
    document.getElementById("demo3").innerHTML = " ";
    document.getElementById("demo4").innerHTML = " ";
    document.getElementById("demo6").innerHTML = " ";
    document.getElementById("demo5").innerHTML = " "; 
    document.getElementById("demo7").innerHTML = " ";
    document.getElementById("demo9").innerHTML = " ";
    document.getElementById("demo10").innerHTML = " ";
    document.getElementById("demo11").innerHTML = " ";   
    document.getElementById("demo12").innerHTML = " ";
    var date1 = new Date("6/18/2015"); 
var date2 = new Date(); 
var Difference_In_Time = date2.getTime() - date1.getTime(); 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
var d = Math.round(Difference_In_Days);
  
document.getElementById("demo8").innerHTML =("Total number of days between dates  <br>"+ date1 + "<br> and <br>" + date2 + " is: <br> "+ d); 

}
function Function9(){ 
    document.getElementById("demo2").innerHTML = " ";
    document.getElementById("demo1").innerHTML = " ";
    document.getElementById("demo3").innerHTML = " ";
    document.getElementById("demo4").innerHTML = " ";
    document.getElementById("demo6").innerHTML = " ";
    document.getElementById("demo5").innerHTML = " "; 
    document.getElementById("demo7").innerHTML = " "; 
    document.getElementById("demo8").innerHTML = " "; 
    document.getElementById("demo10").innerHTML = " "; 
    document.getElementById("demo11").innerHTML = " ";
    document.getElementById("demo12").innerHTML = " ";
    var a = new Date();
    b = new Date("2015 dec 5");

alert(
    a + "\n" + 
    b + "\n" +
    "Seconds Passed Since Begining Of 2015: " +Math.round(((+a - +b) / 1000))
);

}
function Function10(){ 
    document.getElementById("demo2").innerHTML = " ";
    document.getElementById("demo1").innerHTML = " ";
    document.getElementById("demo3").innerHTML = " ";
    document.getElementById("demo4").innerHTML = " ";
    document.getElementById("demo6").innerHTML = " ";
    document.getElementById("demo5").innerHTML = " "; 
    document.getElementById("demo7").innerHTML = " "; 
    document.getElementById("demo8").innerHTML = " ";
    document.getElementById("demo9").innerHTML = " ";
    document.getElementById("demo11").innerHTML = " ";
    document.getElementById("demo12").innerHTML = " ";
    var d = new Date();
    var d2 = new Date();
    d.setHours(d.getHours() - 1);
    document.getElementById("demo10").innerHTML ="TIME RIGHT NOW:"+" "+d+"<br>"+"TIME ONE HOUR AHEAD:"+" "+d2;

}
function Function11(){ 
    document.getElementById("demo2").innerHTML = " ";
    document.getElementById("demo1").innerHTML = " ";
    document.getElementById("demo3").innerHTML = " ";
    document.getElementById("demo4").innerHTML = " ";
    document.getElementById("demo6").innerHTML = " ";
    document.getElementById("demo5").innerHTML = " "; 
    document.getElementById("demo7").innerHTML = " "; 
    document.getElementById("demo8").innerHTML = " ";
    document.getElementById("demo9").innerHTML = " ";
    document.getElementById("demo10").innerHTML = " ";
    document.getElementById("demo12").innerHTML = " ";
    var d = new Date();
    var d2 = new Date();
    d2.setFullYear(d.getFullYear()- 100);
   alert("DATE RIGHT NOW:"+" "+d+"\n"+"100 YEARS BACK:"+" "+d2); 
    document.getElementById("demo11").innerHTML ="DATE RIGHT NOW:"+" "+d+"<br>"+"100 YEARS BACK:"+" "+d2;
}
function Function12(){ 
    document.getElementById("demo2").innerHTML = " ";
    document.getElementById("demo1").innerHTML = " ";
    document.getElementById("demo3").innerHTML = " ";
    document.getElementById("demo4").innerHTML = " ";
    document.getElementById("demo6").innerHTML = " ";
    document.getElementById("demo5").innerHTML = " "; 
    document.getElementById("demo7").innerHTML = " "; 
    document.getElementById("demo8").innerHTML = " ";
    document.getElementById("demo9").innerHTML = " ";
    document.getElementById("demo10").innerHTML = " ";
    document.getElementById("demo11").innerHTML = " ";
  var age = window.prompt('Enter Your Age Please')
  var d = new Date();
  var n = d.getFullYear()-age;
  document.getElementById("demo12").innerHTML = "YOUR Birth YEAR:"+" "+n;

}