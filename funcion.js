function calcularRadio(){
    area = π * (radio * radio);
    console.log(area);
}
let area;
let π = 3.1416;
let radio = 15;

calcularRadio();


let num1 = 2;
let num2 = 3;
let num3 =15;
let num4 =12;

function mayorNum(){
   if(
    num1 > num2 && num1 > num3 && num1 > num4){
    console.log("El número mayor es: " + num1);

   } else if(num1 < num2 && num2 > num3 && num2 > num4){
    console.log("El número mayor es: " + num2);
   } else if(num1 < num3 && num3 > num2 && num3 > num4){
    console.log("El número mayor es: " + num3);
   } else {
    console.log("El número mayor es: " + num4);
   }
    
  
}

mayorNum();
 
function menorNum(){
    if(num1 < num2 && num1 < num3){
console.log("El numero menor es: " + num1)
    }else if(num2< num1 && num2 < num3){
        console.log ("El numero menor es: " + num2)
    }else {
        console.log ("El numero menor es: " + num3)
    }

}

menorNum();

let num = 14;
function numeroImpar(){
    if (num % 2 == 0){
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

numeroImpar();