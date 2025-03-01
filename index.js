
//Basic Concepts

/*console.log(`Hello, world!`);
let x = 5;
console.log(`the value of x is ${x}`);
let s = `Arun`;
console.log(`the data type of s is ${typeof s}`);
console.log(`Hello, ${s}!`);
let f=5.7;
console.log(`the data type of f is ${typeof f}`);
let b=true;
console.log(`the data type of b is ${typeof b}`);
document.getElementById("demo").textContent=s;
document.getElementById("demo1").textContent=x; */

//User input

/*let u;
u=window.prompt("Enter a number");
console.log(`the value of u is ${u}`);
document.getElementById("demo").textContent=u;
let s = window.prompt("Enter a name");
console.log(`the value of s is ${s}`);
document.getElementById("demo1").textContent=s;
let id;
document.getElementById("mysubmit").onclick=function(){
     id=document.getElementById("mytext").value;
     console.log(`the value of id is ${id}`);
     document.getElementById("demo").textContent=`The user name is : ${id}`;
} */

//Type conversion: User input is always string datatype

/*let u= window.prompt("Enter a number");
u=Number(u);
u+=5;
console.log(`the value of u is ${u}`);
document.getElementById("demo1").textContent=u;
let x= "Name";
let y= "name";
let z= "name";
x=Number(x);
y=String(y);
z=Boolean(z);
console.log(`the value of x is ${x},${typeof x}`);
console.log(`the value of y is ${y},${typeof y}`); 
console.log(`the value of z is ${z},${typeof z}`);
let x;
let y;
let z;
x=Number(x);
y=String(y);
z=Boolean(z);
console.log(`the value of x is ${x},${typeof x}`);
console.log(`the value of y is ${y},${typeof y}`); 
console.log(`the value of z is ${z},${typeof z}`);*/

//Constants

/*let pi=3.14;
let radius;
let circumference;
radius=window.prompt("Enter the radius of the circle");
circumference=2*pi*radius;
console.log(`The circumference of the circle is ${circumference}`);
const PI=3.14;
let radius;
let circumference; 
radius=window.prompt("Enter the radius of the circle");
circumference=2*PI*radius;
console.log(`The circumference of the circle is ${circumference}`);*/

//Counter program

/*const de=document.getElementById("b1");
const re=document.getElementById("b3");
const inc=document.getElementById("b2");
const l=document.getElementById("l");
let count=0;
de.onclick=function(){
    count--;
    l.textContent=count;
}
re.onclick=function(){
    count=0;
    l.textContent=count;
}
inc.onclick=function(){
    count++;
    l.textContent=count;
}*/

//Math object

/*console.log(Math.PI);
let x=5.9;
let c =Math.round(x);//Round off
console.log(c);
let f=Math.floor(x);//Round down
console.log(f);
let ce=Math.ceil(x);//Round up
console.log(ce);
let t=Math.trunc(x);//Remove decimal part
console.log(t);
let p=Math.pow(2,3);//Power
console.log(p);
let s=Math.sqrt(9);//Square root
console.log(s);
let l=Math.log(10);//Natural logarithm
console.log(l);
let s1=Math.sin(90);//Sine
console.log(s1);
let c1=Math.cos(90);//Cosine
console.log(c1);
let t1=Math.tan(45);//Tangent
console.log(t1);
let a=Math.abs(-5);//Absolute value
console.log(a);
let s3=Math.sign(5);//Sign
console.log(s3);
let m=Math.min(5,6,7,8);//Minimum
console.log(m);
let ma=Math.max(5,6,7,8);//Maximum
console.log(ma);*/

//random number

/*let r=Math.random();//Random number
console.log(r);
let r1=Math.random()*10;//Random number between 0 and 10
console.log(r1);
let r2=Math.floor(Math.random()*10);//Random number between 0 and 9 without decimal number
console.log(r2);
let r3=Math.floor(Math.random()*10)+1;//Random number between 1 and 10
console.log(r3);
let min=50;
let max=100;
let r=Math.floor(Math.random()*(max-min))+min;
console.log(r);*/

//random number program

/*const b=document.getElementById("b1");
const l=document.getElementById("l2");
const l2=document.getElementById("l3");
const l3=document.getElementById("l4");
b.onclick=function(){
    let min=50;
    let max=100;
    let r=Math.floor(Math.random()*(max-min))+min;
    let r1=Math.floor(Math.random()*(max-min))+min;
    let r2=Math.floor(Math.random()*(max-min))+min;
    l.textContent=`Random number one is ${r}`;
    l2.textContent=r1;
    l3.textContent=r2;
}*/

//If else statements

/*let x=-5;
if(x>0){
    console.log("x is positive");
    document.getElementById("header").textContent="X is positive";
}
else{
     console.log("x is negative");
     document.getElementById("header").textContent="X is negative";
}
let f=false;
if(f){
    console.log("f is true");
    document.getElementById("header").textContent="F is true";
}
else{
    console.log("f is false");
     document.getElementById("header").textContent="F is false";
}*/
/*const text=document.getElementById("t1");
console.log(text);
const a=age1.value;
console.log(a);
const license=true;
b1.onclick=function(){
     const age=Number(a);
     if(age>=18){
          console.log("You are eligible to drive");
          document.getElementById("header").textContent="You are eligible to drive";
          if(license){
              console.log("You have a license");
              document.getElementById("Subheader").textContent="You are eligible to drive and you have a license";
          }
          else{
              console.log("You don't have a license");
                document.getElementById("Subheader").textContent="You are eligible to drive but you don't have a license";
          }
     }
     else{
         console.log("You are not eligible to drive");
          document.getElementById("header").textContent="You are not eligible to drive";
     }
}*/

//Array

/*let fruits=["Apple","Banana","Mango","Orange"];
console.log(fruits[0]);
let i=fruits.indexOf("Mango");
console.log(i);*/

//2D Array

/*const a=[[1,2,3],[4,5,6],[7,8,9]];
console.log(a[0][0]);
for(let row of a){
    const rowString=row.join(" ");
    console.log(rowString);
}*/



//Project


let a=document.getElementById("input1");
let b=document.getElementById("input2");
const c=document.getElementById("button1");
const d=document.getElementById("button2");
const e=document.getElementById("button3");
c.onclick=function(){
    console.log("The button is clicked");
    if(a.value.trim()=="" && b.value.trim()==""){
        console.log("Please enter the username and password");
        window.alert("Please enter the username and password");
    }
    else if(a.value.trim()==""){
        console.log("Please the username");
        window.alert("Please enter the username");
    }
    else if(b.value.trim()==""){
        console.log("Please enter the password");
        window.alert("Please enter the password");
    }
    else{
        let z=b.value;
        if(z.length<8){
            console.log("The password should be atleast 8 characters long");
            window.alert("The password should be atleast 8 characters long");
        }
        console.log("Login successful");
        window.alert("Login successful");
    }
}
d.onclick=function(){
    window.alert("Take necessary steps");
}
e.onclick=function(){
    window.alert("Take necessary steps");
}

