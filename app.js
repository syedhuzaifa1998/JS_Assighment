
/*
    Name:Syed Huzaifa
    Roll:WM4333
    Email:syedhuzaifa9090@gmail.com
    Note: for denoting questions of each chapters i use ex or task 
    e.g task-1 , ex-1.
    
*/


        /*-----------Chapter-1----------- */

/* Task-1 */

    //alert("Assalam o alaikum !!\nWelcome to Online Shopping Hub");

/* Task-2 */

   //alert("Error!Please enter a valid password");

/* Task-3 */

  //alert("Welcome to JS land...\nHappy coding!");

/* Task-4 */

    /*
    alert("Welcome to JS Land...");
    alert("Happy Coding!");
    */

/* Task-5 */

  //alert("Hello...I can run JS through my web browser's console");





        /*-----------Chapter-2----------- */

/* Task-1 */


 //var username;


/* Task-2 */


/*
myName="Syed huzaifa";
alert(myName);
*/


/* Task-3 */


/*
var message;
message="Hello World";
alert(message);
*/


/* Task-4 */


/*
var name="Syed Huzaifa";
var age="22";
var email="syedhuzaifa9090@gmail.com";

alert("My name is "+name);
alert("My age is "+age);
alert("Email:"+email);
*/



/* Task-5 */

/* Task-6 */


/*
var email="syedhuzaifa9090@gmail.com";

alert("My email address is "+email);
*/


/* Task-7 */


/*
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from a book "+book);
*/


/* Task-8 */


//document.write("Yah! i can write HTML content through JavaScript");


/* Task-9 */


        /*-----------Chapter-3----------- */


/* Task-1 */


/*
var age;
age=22;
alert("I am "+age+" years old");
*/


/* Task-2 */


/* Task-3 */


/*
var birthyear=1998;
alert("My birth year is "+birthyear);
*/


/* Task-4 */


/*
        var temp=0;
        alert("Welcome Clothing Store..!!");

        while(temp==0)
        {
            var name=prompt("Enter your name","");
            if(name!="")
            temp++;
            else
            alert("Emty entry!!!");
        }
        temp=0;

        while(temp==0)
        {
            var product=prompt("Enter Product name to order","");
            if(product!="")
            temp++;
            else
            alert("Emty entry!!!");
        }
        temp=0;

        while(temp==0)
        {
            var Quantity=prompt("Enter quantity","");
            if(Quantity!="")
            temp++;
            else
            alert("Emty entry!!!");
        }

        document.write(name+" ordered "+Quantity+" "+product+" from XYZ Clothing Store.");

*/


        /*-----------Chapter-4----------- */


/* Task-1 */

        /*

        var name,age,phone;

        */

/* Task-2 */


        /*
        
        var 360_hotel;
        var my hotel;
        var %length;
        var #age;
        var alert;

        var hotel_360;
        var my_hotel;
        var length1;
        var _age;
        var alert1;
        
        */

/* Task-3 */
      

        /*

        document.write("A heading stating 'Rules for naming JS variables'");
        document.write("<br>"+"Variable name can only contain ,numbers,$ and _.For example:$my_1stVariable");
        document.write("<br>"+"Variable must begin with a letter , $ or _ .For example:$name, _name or name");
        document.write("<br>"+"Variable names are case sensitive");
        document.write("<br>"+"Variable names should not be JS keyword");

        */



        /*-----------Chapter-5----------- */



/* Task-1 */


        /*

        var temp=0;
        while(temp==0)
        {
            var num1=parseInt(prompt("Enter 1st number ",""));
            if(num1!=0)
            temp++;
            else
            alert("Empty entry..!!");

        }
        temp=0;
        while(temp==0)
        {
            var num2=parseInt(prompt("Enter 1st number ",""));
            if(num2!=0)
            temp++;
            else
            alert("Empty entry..!!");

        }
        var num3=num1 + num2;
        document.write("Sum of "+num1+" and "+num2+" is "+num3);

        */


/* Task-2 */


        /*
        
        var temp=0;
        while(temp==0)
        {
            var num1=parseInt(prompt("Enter 1st number ",""));
            if(num1!=0)
            temp++;
            else
            alert("Empty entry..!!");

        }
        temp=0;
        while(temp==0)
        {
            var num2=parseInt(prompt("Enter 2nd number ",""));
            if(num2!=0)
            temp++;
            else
            alert("Empty entry..!!");

        }

        var check=parseInt(prompt("Press 1 for Subtraction, 2 for Multiplication , 3 for Division , 4 for Modulus"));
        if(check==1)
        {
        var num3=num1 - num2;
        document.write("Subtraction of "+num1+" and "+num2+" is "+num3);
        }
        if(check==2)
        {
        var num3=num1 * num2;
        document.write("Multiplication of "+num1+" and "+num2+" is "+num3);
        }
        if(check==3)
        {
        var num3=num1 / num2;
        document.write("Division of "+num1+" and "+num2+" is "+num3);
        }
        if(check==4)
        {
        var num3=num1 % num2;
        document.write("Modulus of "+num1+" and "+num2+" is "+num3);
        }

        */


/* Task-3 */


        /*
        
        var v1;
        document.write("Value after variable declaration is: "+v1+"<br>");
        v1=27;
        document.write("Initial value: "+v1+"<br>");
        v1++;
        document.write("Value after increment is: "+v1+"<br>");
        document.write("Value after addition is: "+(v1+7)+"<br>");
        v1--;
        document.write("Value after decrement is: "+v1+"<br>");
        document.write("The reminder is: "+(v1%3)+"<br>");

        */


/*Task-5 */


/* 

var num=prompt("Enter a number to show its multiplication table","Enter here...");
var len1=prompt("Enter length multiplication table","Enter here...");

document.write("Multiplication table of "+num+" Length "+len1+"<br>");
for(a=1;a<=len1;a++)
{
    document.write(num+" "+"x"+" "+a+"="+" "+num*a+"<br>");
}

*/


/*Task-6 */


//  document.write("celcius to franheit");
 
//  var ctemp = prompt("enter the temp in celcius");
//   var cToFahr =( cTemp * 9 / 5 )+ 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);

//     document.write("franheit to celcius  ");
 
//  var fTemp = prompt("enter the temp in celcius");
//  var cTemp;
//  var cTemp = (fTemp - 32) * 5 / 9;
//  var message = fTemp+'\xB0F is ' + cTemp + '\xB0C.';
//    console.log(message);


/*Task-8 */


// document.write("MARKS SHEET");
// var total_marks = prompt("enter the total marks");
// document.write("total marks is : " + total_marks);
// var marks_obtained = prompt("enter the obtained marks");
// document.write("marks obtained is : " + marks_obtained);
// var precentage = (marks_obtained/total_marks ) *100;
// document.write("percentage is "+ precentage);


/*Task-11 */


// document.write(" Age calculator ");
// var current_year = prompt("enter current age");
// var birthyear = prompt("enter birth year");
// var age = current_year - birthyear;
// document.write("your age " + age);


/*Task-12 */


// var pi = 3.142;
// var radius = prompt("enter radius");
// var  Circumference  = 2*pi*radius;
// document.write("the Circumference is: " + Circumference);
// var  Area = pi * radius * radius;
// document.write("the area is:" + Area);



        /*-----------Chapter-6----------- */

//     document.write("RESULT");
// document.write("<br\>");
// document.write("<br\>");
// var a =10;
// document.write("the value of a is:\n\n"+ a );
//  var b = ++a;
//  document.write("<br\>");
//  document.write("<br\>");
// document.write("the value of ++a is:" + b);
// document.write("<br\>");
// document.write("now the value of a is:" + a);
// document.write("<br\>");
// document.write("<br\>");
// var c = a++;
// document.write("the value of a++ is:" + c);
// document.write("<br\>");
// document.write("now the value of a is:" + a);
// document.write("<br\>");
// document.write("<br\>");
// var d = --a;
// document.write("the value of --a is:" + d);
// document.write("<br\>");
// document.write("now the value of a is:" + a);
// document.write("<br\>");
// document.write("<br\>");
// var e= a--;
// document.write("the vale of a-- is:" + e );
// document.write("<br\>");
// document.write("the vale of a is:" + a);




//***********task 2***********

// var a = 2,b=1;

// var result=  --a - --b + ++b + b--; 
// document.write("result is " + result);

//***********task3**********
// var username = prompt("enter the name");
// document.write("The Username is " + username);


// //**************task5 **********
// var num = prompt("enter number");
// if (num)
// document.write("enter");


// ************task6***********
// document.write("Subject");
// document.write("\n\n\n\n\n");
// document.write("Total Marks ");
// document.write("\n\n\n\n\n");
// document.write("Obtained Marks ");
// document.write("\n\n\n\n\n");
// document.write("Precentage ");
// document.write("<br\>");


// var subject1 = prompt("enter subject 1 name");
// document.write("<br\>");
// document.write(subject1);
// document.write("\n\n\n\n\n\n");
// var total_marks_subject1= 100;
// document.write(total_marks_subject1);
// document.write("\n\n\n\n\n\n\n\n\n");
// var obtained_mark_subject1 = prompt("enter marks of subject 1");;
// document.write(obtained_mark_subject1);

// var subject2 = prompt("enter subject 2 name");
// document.write("<br\>");
// document.write(subject2);
// document.write("\n\n\n\n\n\n");
// var total_marks_subject2= 100;
// document.write(total_marks_subject2);
// document.write("\n\n\n\n\n\n\n\n\n");
// var obtained_mark_subject2 = prompt("enter marks of subject 2");;
// document.write(obtained_mark_subject2);

// var subject3 = prompt("enter subject 3 name");
// document.write("<br\>");
// document.write(subject3);
// document.write("\n\n\n\n\n\n\n\n\n");
// var total_marks_subject3= 100;
// document.write(total_marks_subject3);
// document.write("\n\n\n\n\n\n");
// var obtained_mark_subject3 = prompt("enter marks of subject 3");;
// document.write(obtained_mark_subject3);

// document.write("<br\>");
// document.write("\n\n\n\n\n\n\n\n\n\n\n\n\n");
// var total_marks = total_marks_subject1 + total_marks_subject2 +total_marks_subject3;
// document.write(total_marks);

// document.write("<br\>");
// var total = obtained_mark_subject1 + obtained_mark_subject2 +obtained_mark_subject3;
// document.write(total);


// document.write("<br\>");
//  var marks = (total/total_marks)*100;
//  document.write(marks);



        /*-----------Chapter-06-09----------- */



// document.write("RESULT");
// document.write("<br\>");
// document.write("<br\>");
// var a =10;
// document.write("the value of a is:\n\n"+ a );
//  var b = ++a;
//  document.write("<br\>");
//  document.write("<br\>");
// document.write("the value of ++a is:" + b);
// document.write("<br\>");
// document.write("now the value of a is:" + a);
// document.write("<br\>");
// document.write("<br\>");
// var c = a++;
// document.write("the value of a++ is:" + c);
// document.write("<br\>");
// document.write("now the value of a is:" + a);
// document.write("<br\>");
// document.write("<br\>");
// var d = --a;
// document.write("the value of --a is:" + d);
// document.write("<br\>");
// document.write("now the value of a is:" + a);
// document.write("<br\>");
// document.write("<br\>");
// var e= a--;
// document.write("the vale of a-- is:" + e );
// document.write("<br\>");
// document.write("the vale of a is:" + a);




// // ***********task 2***********

// var a = 2,b=1;

// var RESULT=  --a - --b + ++b + b--; 
// document.write("result is" + result);

// // ***********task3**********
// var username = prompt("enter the name");
// document.write("the username is " + username);


// //**************task5 **********



// // ************task6***********
// document.write("subject");
// document.write("\n\n\n\n\n");
// document.write("Total Marks");
// document.write("\n\n\n\n\n");
// document.write("obtained marks");
// document.write("\n\n\n\n\n");
// document.write("precentage");
// document.write("<br\>");

// var subject1 = prompt("enter subject 1 name");
// document.write("<br\>");
// document.write(subject1);
// document.write("\n\n\n\n\n\n");
// var total_marks_subject1= 100;
// document.write(total_marks_subject1);
// document.write("\n\n\n\n\n\n\n\n\n");
// var obtained_mark_subject1 = ("enter marks of subject 1");;
// document.write(obtained_mark_subject1);

// var subject2 = prompt("enter subject 2 name");
// document.write("<br\>");
// document.write(subject2);
// document.write("\n\n\n\n\n\n");
// var total_marks_subject2= 100;
// document.write(total_marks_subject2);
// var obtained_mark_subject2 = prompt("enter marks of subject 2");;
// document.write(obtained_mark_subject2);

// var subject3 = prompt("enter subject 3 name");
// document.write("<br\>");
// document.write(subject3);
// var total_marks_subject3= 100;
// document.write(total_marks_subject3);
// document.write("\n\n\n\n\n\n");
// var obtained_mark_subject3 = prompt("enter marks of subject 3");;
// document.write(obtained_mark_subject3);

// document.write("<br\>");
// document.write("\n\n\n\n\n\n\n\n\n\n\n\n\n");
// var total_marks = total_marks_subject1 + total_marks_subject2 +total_marks_subject3;
// document.write(total_marks);

// document.write("<br\>");
// var total = obtained_mark_subject1 + obtained_mark_subject2 +obtained_mark_subject3;
// document.write(total);


// document.write("<br\>");
//  var marks = (total/total_marks)*100;
//  document.write(marks);





        /*-----------Chapter-09-11----------- */

//**************task1********* */
// var city;
// document.write("enter the city name");
// if (city ==="karachi")
// {
//     document.write("Welcome to city of lights");

// }
// else{
//     document.write("another city ");
// }
// //****************task2********* */
// var gender;
// document.write("enter the gender");
// if( gender === man)
// {
//     document.write(" Good Morning Sir");
// }
// else if ( gender === female)
// {
//    document.write(" Good Morning Ma’am");
// }
// else{
//     document.write(" you have both features");
// }

// //****************task3********** */

// var colour;
// document.write("enter the color");
// if (color === "red")
// {
//     document.write("Must Stop ");
// }
// else if (color === "Yellow  ")
// {
//     document.write("Ready to move ");
// }
// else if (color === "green")
// {
//     document.write("Move now  ");
// }
// else{
//     document.write("there is no color which is in traffic signal");
// }

// //**********************task4********* */
// var fuel;
// document.write("input fuel in liter ");
// if (fuel == 0.25)
// {
//     document.write("Please refill the fuel in your car");
// }
// else {
//     document.write("your fuel is greater than 0.25");
// }

// //******************task5************** */
// var a = 4;
//  if (++a === 5)
//  { 
//      alert("given condition for variable a is true");
//  }

//  var b = 82;
//   if (b++ === 83)
//   { 
//       alert("given condition for variable b is true"); 
// }

// var c = 12;
//  if (c++ === 13)
//  { 
//      alert("condition 1 is true"); 
// } 
// if (c === 13)
// { 
//     alert("condition 2 is true");
//  } 
//  if (++c < 14)
//  { 
//      alert("condition 3 is true"); 
//     } 
//     if(c === 14)
//     { 
//         alert("condition 4 is true"); 
//     }
//     var materialCost = 20000; 
//     var laborCost = 2000;
//      var totalCost = materialCost + laborCost;
//       if (totalCost === laborCost + materialCost)
//       { 
//           alert("The cost equals");
//      }   

//      if (true)
//      { 
//          alert("True"); 
//         }

//     if("car" < "cat")
//             { 
//                 alert("car is smaller than cat"); 
//             }
// //*****************task6************** */
// var obtained_marks;
// var per;
// var total_marks=300;
// document.write("<br\>");
// document.write("total marks is" + total_marks);
// document.write("<br\>");
// document.write("enter the obtained marks");
// document.write("<br\>");
// pre = (obtained_marks/total_marks)*100;
// if (pre >=80)
// {
//     document.write("grade is A-ONE");
//     document.write("<br\>");
//     document.write("REMARKS IS Excellent");
// }
// else if( pre >=70)
// {
//     document.write("grade is A");
//     document.write("<br\>");
//     document.write("REMARKS IS GOOD");
// }
// else if( pre >=60)
// {
//     document.write("grade is B");
//     document.write("<br\>");
//     document.write("REMARKS IS you need to improve");
// }
// else if( pre < 60)
// {
//     document.write("grade is FAil");
//     document.write("<br\>");
//     document.write("REMARKS IS soory");
// }
// else {
//     document.write("no grade or remark");
    
// }
// //****************task7************** */
// var number = 6;
// document.write("enter the number range 1 to 10");
// if (number ===6){
//     document.write("bingo ")
// }
// else if (number === 7) 
// {
// document.write("Close enough to the correct answer");
// }
// else{
//     document.write("you enter number out of range");
// }
// //**************task8***************** */
//  var n;
//     document.write("enter the number");
//     if(n%3==0)
//     {
//            document.write("\n Its Divisible by 3");
//     }
//   else
//    {
//     document.write("\n Its Divisible by 3");
// }
// //*****************task9***************** */
//  var n;
//  document.write("enter number");
//  if (n%2 == 0)
//  {
//     document.write("the number is even");
//  }
//  else{
//     document.write("the number is odd");
//  }
// //*****************task10************ */
//  var temp;
//  document.write("enter tempeature");
//  if ( temp  > 40 )
//  {
//     document.write("It is too hot outside");
//  }
//  else if ( temp  > 30 )
//  {
//     document.write("The Weather today is Normal");
//  }
//  else if ( temp  > 20 )
//  {
//     document.write("Today’s Weather is cool");
//  }
//  else if ( temp  > 10 )
//  {
//     document.write("OMG! Today’s weather is so Cool");
//  }
//  else {
//     document.write("your temp is less than 10");
//  }
// //**************task11*************** */
// var num1;
// var num2;
// var op;
//  document.write("enter number 1");
//  document.write("enter number 2");
//  document.write("enter operator");
//  switch(op)
//     {
//         case '+':
//             document.write(  num1+num2);
//             break;

//         case '-':
//             document.write(num1-num2);
//             break;

//         case '*':
//             document.write (num1*num2);
//             break;

//         case '/':
//             document.write (num1/num2);
//             break;

//         default:
//             document.write( "Error! operator is not correct");
//             break;}


        /*-----------Chapter-12-3----------- */


//     var ch;
// 	document.write("enter any chacter")

 
//     if(ch>=65&&ch<=90)
//     {
// document.write("You entered an uppercase character");
//     }
// 	else if(ch>=48&&ch<=57){
//     document.write("You entered a digit");
//     }
// 	else if(ch>=97&&ch<=122){
//             document.write("You entered a lowercase character");
            
//     }
// 	else{
//             document.write("You entered a special character");
            
//     }


//     var num;
    
//     /* Input number from user */
//     document.write("Enter any number: ");
//     if(num > 0)
//     {
//         document.write("Number is POSITIVE");
//     }
//     else if(num < 0)
//     {
//         document.write("Number is NEGATIVE");
//     }
//     else
//     {
//         document.write("Number is ZERO");
//     }

//     var num1, num2;
// num1 = prompt("Input the First integer", "0");
// num2 = prompt("Input the second integer", "0");
                                                 
// if(parseInt(num1, 10) > parseInt(num2, 10)) 
//   { 
//     document.write("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   
// else
//   if(parseInt(num2, 10) > parseInt(num1, 10)) 
//   {
//     document.write("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else
//   {
//     document.write("The values "+ num1+ " and "+num2+ " are equal.");
//   }






        /*-----------Chapter-14-16----------- */


    /*
        Ex-1

        var arr_stu_name=[];

        */


        /*
        Ex-3

        var arr1=["Faaiz","Talha","Huzaifa","Natesh"]
        alert(arr1);
        */


        /*
        Ex-4

        var arr_number=[23,12,34,27];
        */


        /*
        Ex-5

        var arr_boolean=[true,false];
        */


        /*
        Ex-6

        var arr_mixed=["Huzaifa",27,98,"Syed",89];
        */



        /*
        Ex-7

       var arr1=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","Ph.d"];
        document.write("Qualifications:"+"<br>");
        
        for(var a=0;a<arr1.length;a++)
        {
            document.writeln((1+a)+")"+arr1[a]);
            document.write("<br>");
           
        }
        */ 


        /*
        Ex-8

        var sname=["Faaiz Shaikh","Talha Kaimkhani","Syed Huzaifa"];
        var smarks=[398,430,390];
        var total=500;

        for(var a=0;a<sname.length;a++)
        {
            var per=(smarks[a]/total)*100;
            document.write("Score of "+sname[a]+" is "+smarks[a]+".Percentage:"+per+"%"+"<br>");
        }
        */



       
        /*
        Ex-9
        */

        /*
        var org_arr=["Green","Purple","Orange","Grey","Pink"];
        document.write("Original Colour Array: ");
        for(var a=0;a<org_arr.length;a++)
        {
            document.write("<br>"+org_arr[a]);
        }
        */


        /*

        Update-a

        */
        
        /*
        var upd_a = prompt("What color you wants to add to the beginning", "<name goes here>");
        
        org_arr.unshift(upd_a);
        if(upd_a!=null)
        {
            document.write("<br>"+"<br>"+"Colour Array with Update_a:(New element added at start)");
        for(var a=0;a<org_arr.length;a++)
        {
            document.write("<br>"+org_arr[a]);
            
        }
        }
        */



         /*
        
        Update-b

        */

        /*
        var upd_b = prompt("What color you wants to add to the end", "<name goes here>");
        
        org_arr.push(upd_b);
        if(upd_b!=null)
        {
            document.write("<br>"+"<br>"+"Colour Array with Update_b:(New element added at end)");
        for(var a=0;a<org_arr.length;a++)
        {
            document.write("<br>"+org_arr[a]);
        }
        }
        */


               
           /*
        
        Update-c

        */

        /*
        var upd_c_a = prompt("Add another colour at beginning", "<name goes here>");
        var upd_c_b = prompt("Add another colour at beginning", "<name goes here>");
        org_arr.unshift(upd_c_a);
        org_arr.unshift(upd_c_b);
        if(upd_c_a!=null&&upd_c_b!=null)
        {
            document.write("<br>"+"<br>"+"Colour Array with Update_c:(Two new elements added at start)");
        for(var a=0;a<org_arr.length;a++)
        {
            document.write("<br>"+org_arr[a]);
            
        }
        }
        */


           /*
        
        Update-d

        */

        /*
        org_arr.shift();
        document.write("<br>"+"<br>"+"Colour Array with Update_d:(First element deleted!)");
        for(var a=0;a<org_arr.length;a++)
        {
            document.write("<br>"+org_arr[a]);
            
        }
        */



         /*
        
        Update-e

        */

        /*
        org_arr.pop();
        document.write("<br>"+"<br>"+"Colour Array with Update_e:(Last element is deleted!)");
        for(var a=0;a<org_arr.length;a++)
        {
            document.write("<br>"+org_arr[a]); 
        }
        */


        /*
        
        Update-f

        */

        /*
        var upd_f_a=prompt("Enter index where you want to enter element","enter here");
        var upd_f_b=prompt("Enter element want to enter","enter here");
        org_arr.splice(upd_f_a,0,upd_f_b);
        document.write("<br>"+"<br>"+"Colour Array with Update_f:(Another element added at specific loc)");
        for(var a=0;a<org_arr.length;a++)
        {
            document.write("<br>"+org_arr[a]); 
        }
        */


          /*
        
        Update-g

        */

        /*
        var upd_g_a=prompt("Enter index from where you want to delete element'(s)","enter here");
        var upd_g_b=prompt("Enter number of element'(s) want to remove","enter here");
        org_arr.splice(upd_g_a,upd_g_b);
        document.write("<br>"+"<br>"+"Colour Array with Update_g:( Element deleted from specific loc)");
        for(var a=0;a<org_arr.length;a++)
        {
            document.write("<br>"+org_arr[a]); 
        }        

        console.clear;
        */


/*
        Ex-10

        var sscores=[320,230,480,120];
        document.write("Scores of Students :");
        for(var a=0;a<sscores.length;a++)
        {   
            if(a!=sscores.length-1)
            document.write(sscores[a]+",");
            else
            document.write(sscores[a]);
        }

        for(var a=0;a<sscores.length;a++)
        {
            for(var b=a+1;b<sscores.length;b++)
            {
                if(sscores[a]>sscores[b])
                {
                    var temp1=sscores[a];
                    var temp2=sscores[b];

                    sscores[b]=temp1;
                    sscores[a]=temp2;
                }
            }
        }
        document.write("<br>");
        document.write("Ordered Scores of Students :");
        for(var a=0;a<sscores.length;a++)
        {
            if(a!=sscores.length-1)
            document.write(sscores[a]+",");
            else
            document.write(sscores[a]);
        }
        */




        /*
        Ex-11

        var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
        document.write("Cities List:"+"<br>");
        for(var a=0;a<cities.length;a++)
        {
            if(a!=cities.length-1)
            document.write(cities[a]+",");
            else
            document.write(cities[a]);
        }
        var selected_cities=cities.splice(1,3);
        document.write("<br>"+"Selected Cities List:"+"<br>");
        for(var a=0;a<cities.length;a++)
        {
            if(a!=cities.length-1)
            document.write(cities[a]+",");
            else
            document.write(cities[a]);
        }
        */



 /*
        Ex-12

        var arr1=["This","is","my","cat"];
        document.write("Array:"+"<br>");
        for(var a=0;a<arr1.length;a++)
        {
            if(a!=arr1.length-1)
            document.write(arr1[a]+",");
            else
            document.write(arr1[a]);
        }
        document.write("<br>"+"String:"+"<br>");
        var s1=arr1.join(" ");
        document.write(s1);
        */

        
        /*
        var arr1=["A","B","C","D"];
        document.write(arr1+"<br>");
        arr1.pop();
        document.write(arr1+"<br>");
        arr1.push("E");
        document.write(arr1+"<br>");
        arr1.shift();
        document.write(arr1+"<br>");
        arr1.unshift("Y");
        document.write(arr1+"<br>");
        */


        /*

        Ex-13
        
        */

        /*
        var arr1=new Array();
        arr1.unshift("Keyboard");
        arr1.unshift("Mouse");
        arr1.unshift("Printer");
        arr1.unshift("Monitor");
        alert(arr1.pop());
        alert(arr1.pop());
        alert(arr1.pop());
        alert(arr1.pop());
        */

        /*

        Ex-14
        
        */

        /*
        var arr1=new Array();
        arr1.push("Keyboard");
        arr1.push("Mouse");
        arr1.push("Printer");
        arr1.push("Monitor");
        alert(arr1.pop());
        alert(arr1.pop());
        alert(arr1.pop());
        alert(arr1.pop());
        */



        /*-----------Chapter-17-20----------- */



        /*

        Ex-1

       var arr1 = [ [],[],];
       arr1=[["Syed Huzaifa",22],["Faaiz Shaikh",22]];

        */



        /*
        
        Ex-2

        var num_arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

        for(var a=0;a<3;a++)
        {
            for(var b=0;b<4;b++)
            {
                document.write(num_arr[a][b]+"&nbsp&nbsp&nbsp");
            }
            document.write("<br>");
        }

        */



        /*
        
        Ex-3

        for(var a=1;a<=10;a++)
        {
            document.write(a+"<br>");
        }

        */




        /*
        
        Ex-4
        
        var num=prompt("Enter a number to show its multiplication table","Enter here...");
        var len1=prompt("Enter length multiplication table","Enter here...");

        document.write("Multiplication table of "+num+" Length "+len1+"<br>");
        for(a=1;a<=len1;a++)
        {
            document.write(num+" "+"x"+" "+a+"="+" "+num*a+"<br>");
        }

        */




        /*
        
        Ex-5
        
        var fruits=["apple","banana","mango","orange","strawberry"];

        for(var a=0;a<fruits.length;a++)
        {
            document.write("Element at index "+a+" is "+fruits[a]+"<br>");
        }

        */
        


        /*
        
        Ex-6
    
        document.write("Counting:");
        for(var a=1;a<=15;a++)
        {   
            if(a!=15)
            document.write(a+",");
            else
            document.write(a);
        }
        
        document.write("<br>"+"Reverse Counting:");
        for(var a=10;a>=1;a--)
        {   
            if(a!=1)
            document.write(a+",");
            else
            document.write(a);
        }
        
        document.write("<br>"+"Even:");
        for(var a=0;a<=20;a=a+2)
        {   
            if(a!=20)
            document.write(a+",");
            else
            document.write(a);
        }
        document.write("<br>"+"Odd:");
        for(var a=1;a<=19;a=a+2)
        {   
            if(a!=19)
            document.write(a+",");
            else
            document.write(a);
        }
        document.write("<br>"+"Series:");
        for(var a=2;a<=20;a=a+2)
        {   
            if(a!=20)
            document.write(a+"k"+",");
            else
            document.write(a+"k");
        }

        */




        /*

        Ex-7        

        var temp=0;
        var bakery=["cake","apple pie","cookie","chips","patties"];
        var check=prompt("Welcome to MyNewBakers....What do you want to order Sir/Mam","Type.....");
        for(var a=0;a<bakery.length;a++)
        {
            if(check.toLowerCase()==bakery[a])
            {
                document.write(bakery[a]+" is "+"available at index "+a+" in our bakery.");
                temp++;
            }
        }
        if(temp==0)
        document.write("We are sorry "+check+" is not available in our bakery.");

        */




        /*
        
        Ex-8

        var num=[24,53,78,91,12];
        var temp=0;
        for(var a=0;a<num.length;a++)
        {
            if(num[a]>temp)
            temp=num[a];
        }
        document.write("Array items :"+num+"<br>");
        document.write("The Largest number is : "+temp);

        */



        /*
        
        Ex-9
        
        var num=[24,53,78,91,12];
        var temp1=0;
        var temp2=0;
        document.write("Array items :"+num+"<br>");
        for(var a=0;a<num.length;a++)
        {
            for(var b=a+1;b<num.length;b++)
            {
                if(num[a]>num[b])
                {
                    var temp1=num[a];
                    var temp2=num[b];

                    num[b]=temp1;
                    num[a]=temp2;
                }
            }
        }
        
        document.write("The Smallest number is : "+num[0]);
        
        */
        


        /*
        
        Ex-10
        
        
        for(var a=5;a<=100;a=a+5)
        {
            if(a!=100)
            document.write(a+",");
            else
            document.write(a);
        }

        */