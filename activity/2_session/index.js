// Ejercicio 1
var person = {

  name:"lucas",
  
  age: 27,

  profession: "Developer"

}
const keys = Object.keys(person);
console.log (keys); // ['name', 'age', 'profession']

// Ejercicio 2
//----RESPUESTAS EJERCICIO 2-------//

/* */
//En un contexto global this se referirá al objeto global 
console.log(this === document);
//En un navedgador This se referirá al objeto Window 
console.log (this === window );

//En función, el valor de this depende de cómo la función es llamada.
//Si no es definido en modo estricto al ser llamado this por la función tomara el contexto global :

function f1(){
  return this;
}

f1() === window; // objeto global

// En una función en mode estricto o función flecha this is 'undefined'

function f2 () {
  'use strict'
  return this ;
  }
  console.log(f2()=== undefined);

///Cuando una función es llamada como un método de un objeto, el this cambia por el método del objeto llamado.

var car  = {
  door:  4,
  f: function() {
    return this.door;
  }
};

console.log(car.f()); // 4


//Cuando el This esta dentro de un método este apunta al contexto de la función 

let Car = {
  brand: "Toyota",
  arg() {
    console.log (`This car is a ${this.brand}`)
  }
}
Car.arg();

//En cambio si This está en un función Flecha esta apunta al contexto global de donde fue invocado 

const Car2 = {
  brand2: "Suzuki",
  arg:()  => {
     console.log (`This car is a ${this.brand2}`)
   }
 }
Car2.arg();//undefined 

// En los Métodos call() , bind() y apply(), this hace referencia al objeto que enlazan estos métodos 

function add(c, d){
  return this.a + this.b + c + d;
}

var o = {a:1, b:3}
const r1 = add.call(o, 5, 7)
console.log(r1);
const r2 = add.apply(o, [10, 20]);
console.log(r2);


 

// Ejercicio 3

const InvertirCadena = (cadenaInvertir) => (()=>{

  if (cadenaInvertir === "") {
    const error ='error cadena vacia';
  throw error;
  }else{
  
  let int = (cadenaInvertir) => cadenaInvertir.split("").reverse().join('');
    console.log(int(cadenaInvertir));
  }
  return

})(cadenaInvertir);
try {
  const invertirCadena = InvertirCadena("Hola Mundo");
}catch (error){
console.log(error)
}
 //-----RESPUESTAS EJERCICIO 3-----// 
 /*
P: ¿Cómo podemos hacer para que nuestro código no rompa al ejecutarse?
R: Para que el código no se rompa hay que atrapar el error que entrega la función con un "catch".

P: Ahora cambia el valor a cadenaInvertir y vuelve a llamar la función. ¿Cuál es el resultado?.
R: Entrega la Cadena Invertida correctamente de "Hola mundo".

P:Por último, intenta acceder al siguiente método invertirCadena.nuevoMetodo(). ¿Cómo podemos hacer para que no de un error?
R: Para que no de error al solicitar un método inexistente, podemos utilizar el patrón módulo de las IIFE ,así se oculta el código y no se puede hacer llamada a un método inexistente .


*/


// Ejercicio 4
class Login {

  constructor (username,password) {

    this.username = username;
    this.password = password;

  }

  login() {

    if (this.username == "admin" && this.password == "passwd") {
       alert('User logged in');
    }else{
       alert('User or Password incorrect');
    }
  }

}

let login = new Login('admin','passwd');//  alert('User logged in');
let logbad = new Login('pepe','bad');// alert('User or Password incorrect');


// Ejercicio 5

const loginButton = document.getElementById('loginSuccess');
loginButton.addEventListener('click', function(){
  console.log('User logged in');
  login.login();
}  );

const errorButton = document.getElementById('loginFailure');
errorButton.addEventListener('click', function(){
  console.log('User or Password incorrect');
  logbad.login();
}  );



// Ejercicio 6

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};

const loginAsyncButton = document.getElementById('loginSuccessAsync');
loginAsyncButton.addEventListener('click', async () =>{
 const log = await loginWitUsername('admin', 'passwd');
 console.log(log); 
});

const errorAsyncButton = document.getElementById('loginFailureAsync');
errorAsyncButton.addEventListener('click', async () =>{
 try{
   await loginWitUsername('root', 'default');
 }catch (error) {
  console.log(error);
 } 
});