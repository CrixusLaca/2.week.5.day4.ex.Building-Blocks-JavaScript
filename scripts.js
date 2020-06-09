function Ciklus(){
    for (var i = 0; i < 10; i++)
    console.log(i);
    console.log("A first ciklus lefutott. ");
}

function Ciklus2(){
    for (var i = 1; i < 11; i++)
    console.log(i);
    console.log("The second ciclus is done. ")
}

function Ciklus3(){
    for (var i =0; i < 21; i++)
    console.log(i);
    console.log("The thirth ciclus also done.")
}
//tömbök létrehozása, és annak megadott paramétereinek kiiratása
let name = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
name[1];
console.log(name[1]);


let getGreetingTo = "Hello";
let names = ' Aladár';
console.log(getGreetingTo + names + '!');


let array = [0,3,6,7,9];
let printValues = (array) =>{
    for (let i = 0; i < array.length; i++)
      console.log(array[i]);
  };

//.forEach - használata a mynumbers sor oszloppá alakítása. 
//           legalábbis ennyit értek idáig. 

  let mynumbers  = [10, 20, 30, 40, 50];
    mynumbers.forEach((Number) => {
    console.log(Number);
    });
