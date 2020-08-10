// variables numericas

var edad = 27;
// incremento
edad = edad + 1;
// es igual a esto
edad += 1;
console.log(edad);

//  decremento
var peso = 75;
peso = peso - 2;
// es igual a esto
peso -= -2;
console.log(peso);

var sandwich = 1;
// peso = peso + sandwich;
peso += sandwich;
console.log(peso);

var realizarDeporte = 3;
// peso = peso - realizarDeporte;
peso -= realizarDeporte;
console.log(peso);

// ejemplo con decimales

var precioDelVino = 200.3;
var total = precioDelVino * 3;
console.log(total);
//  en js la manera de almacaenar decimales no es tan precisa, para solucionarlo hacemos

total = (precioDelVino * 100 * 3) / 100;
console.log(total);

// para hace cuentas complejas hacemos
total = Math.round(precioDelVino * 100 * 3) / 100;
console.log(total);

// para colocar cuantos decimales queremmos colocamos
var totalStr = total.toFixed(2);
console.log(totalStr);
var totalStr = total.toFixed(3);
console.log(totalStr);

// ESTO DE ARRIBA ES UN COMPLETO STING SI QUEREMOS REGRESARLO A NUMERO TENEMOS QUE HACER LO SIGUIENTE
var total2 = parseFloat(totalStr);
console.log(total2);

// como hace una division
var pizza = 8;
var personas = 2;
var cantidadDeRebanadasPorPersona = pizza / personas;
console.log(cantidadDeRebanadasPorPersona);
