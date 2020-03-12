/*MAP: 
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
doubles is now [2, 10, 20, 30] y numbers is still [1, 5, 10, 15]


var numeros = [1, 4, 9];
var dobles  = numeros.map(function(num) {
  return num * 2;
});
dobles es ahora [2, 8, 18] y numeros sigue siendo [1, 4, 9]


const sumar = (a, b) => a + b;
const llamarFuncion = funcion => {
    console.log(funcion(2,3))
}
llamarFuncion (sumar)


const duplicar = x => x*2;
const triplicar = x => x*3;
const cuadriplicar = x => x*4;
const operaciones = [duplicar, triplicar, cuadriplicar];
const ejecutarOperaciones = (x,operaciones) => {
    for(let i = 0; i < operaciones.length; i++){
        const operar = operaciones[i]
        const resultado = operar(x)
        console.log(resultado)
    }
}

Crear una función map que acepte un array y un callback y que:
por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
obtenga el resultado
lo pushee a un nuevo array
devuelva el array final con el resultado de cada una de las llamadas al callback.
Ejemplo:

const numeros = [1, 2, 3]
const duplicar = x => x * 2
map(numeros, duplicar) // [2, 4, 6]


const duplicar = x => x * 2;
const numeros = [1, 2, 3];

const dobles  = numeros.map(function(x) {
    const resultado = duplicar(x)
    return resultado;
})

en este caso no tengo q usarla sino replicarla*/

const numeros = [1, 2, 3];
const duplicar = x => x * 2;

const mapear = (items, fn) => {
    let dobles = numeros.slice();
    let resultado = [];

    for(let i = 0; i < dobles.length; i++){
        resultado.push(duplicar(dobles[i]));
    }

    return resultado;
}

/*Crear una función filter que acepte un array y un callback y que:
por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
si dicho callback devuelve true, pushea el elemento a un nuevo array
devuelva el array final con los elementos que pasaron el "filtro".
Ejemplo:

const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
filter(numeros, multiploDe10) // [10, 40, 50]


El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]*/


const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0

const filter = (items, fn) => {
    let nuevosNumeros = numeros.slice();
    let filtrados = [];

    for(let i = 0; i < nuevosNumeros.length; i++){
        if(multiploDe10(nuevosNumeros[i])){
            filtrados.push(nuevosNumeros[i]);
        }
    }

    return filtrados;
}


/*Crear una función every que acepte un array y un callback y que:
por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
devuelva true si todas las llamadas al callback devolvieron true
Ejemplo:

const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
const esPositivo = x => x >= 0

every(numeros, multiploDe10) // false
every(numeros, esPositivo) // true

Every determina si todos los elementos en el array satisfacen una condición.*/


const numeros = [10, 2, 3, 40, 33, 50];
const multiploDe10 = x => x % 10 !== 0;              //puse que no sea negativo para que me de
const esPositivo = x => x >=! 0;
let resultado = true;

const every = (items, fn1, fn2) => {
    const nuevosNumeros = numeros.slice();

    for(let i = 0; i < nuevosNumeros.length; i++){
        if(multiploDe10(nuevosNumeros[i]) && esPositivo(nuevosNumeros[i])){
            resultado = false;
        }
    }

    return resultado;
}


/*Crear una función some que acepte un array y un callback y que:
por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
devuelva true si al menos una de las llamadas al callback devolvió true
Ejemplo:

const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
const esPositivo = x => x >= 0

some(numeros, multiploDe10) // true
some(numeros, esPositivo) // true

El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.*/

const numeros = [10, 2, 3, 40, 33, 50];
const multiploDe10 = x => x % 10 === 0;              //puse que no sea negativo para que me de
const esPositivo = x => x >= 0;
let resultado = false;

const some = (items, fn1, fn2) => {
    let nuevosNumeros = numeros.slice();

    for(let i = 0; i < nuevosNumeros.length; i++){
        if(multiploDe10(nuevosNumeros[i]) || esPositivo(nuevosNumeros[i])){
            resultado = true;

            return resultado;
        }
    }
}


/*Crear una función find que acepte un array y un callback y que:
por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
devuelva el elemento pasado como argumento del primer callback que devuelva true
si ningún callback devuelve true, devuelva undefined
const numeros = [8, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
find(numeros, multiploDe10) // 40

El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada. En cualquier otro caso se devuelve undefined.*/

const numeros = [8, 2, 3, 40, 33];
const multiploDe10 = x => x % 10 === 0;

const find = (items, fn) => {
    let nuevosNumeros = numeros.slice();
    let elementosEncontrados = undefined;

    for(let i = 0; i < nuevosNumeros.length; i++){
        if(multiploDe10(nuevosNumeros[i])){
            elementosEncontrados = nuevosNumeros[i]
            return elementosEncontrados;
        }
    }
}


/*Crear una función findIndex que acepte un array y un callback y que:
por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
si ningún callback devuelve true, devuelva undefined
const numeros = [8, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
find(numeros, multiploDe10) // 3

El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.*/

const numeros = [8, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0

const findIndex = (items, fn) => {
    const nuevosNumeros = numeros.slice();
    let indicesEncontrados = undefined;

    for(let i = 0; i < nuevosNumeros.length; i++){
        if(multiploDe10(nuevosNumeros[i])){
            indicesEncontrados = i;
        }
    }

    return indicesEncontrados;
}


/*Crear una función dropWhile que acepte un array y un callback y que:
por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
devuelva un array con los elementos a partir del primer callback que devolvió false
(Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback de true, no los agrega, cuando el callback da false por primera vez agrega todos los elementos restantes a partir de dicho elemento inclusive)

const numeros = [40, 33, 50, 8, 2, 3, 20]
const multiploDe10 = x => x % 10 === 0
dropWhile(numeros, multiploDe10) // [8, 2, 3, 20]*/

const numeros = [40, 20, 33, 8, 2, 3, 20];
const multiploDe10 = x => x % 10 === 0;

const dropWhile = (items, fn) => {
    const nuevosNumeros = numeros.slice();
    let elementosEncontrados = [];

    for(let i = 0; i < nuevosNumeros.length; i++){
        if(!multiploDe10(nuevosNumeros[i])){
            elementosEncontrados = nuevosNumeros.slice(i, nuevosNumeros.length);
            return elementosEncontrados;
        }
    }
}


/*Crear una función takeWhile que acepte un array y un callback y que:
por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
devuelva un array con los elementos hasta el primer callback que devolvió false
(Inverso del dropWhile)

const numeros = [40, 50, 33, 8, 2, 3, 20]
const multiploDe10 = x => x % 10 === 0
takeWhile(numeros, multiploDe10) // [40, 50]*/

const numeros = [40, 50, 33, 8, 2, 3, 20]
const multiploDe10 = x => x % 10 === 0

const takeWhile = (items, fn) => {
    const nuevosNumeros = numeros.slice();
    let elementosEncontrados = [];

    
}


/*for(let i = 0; i < nuevosNumeros.length; i++){
        if(!multiploDe10(nuevosNumeros[i])){
            elementosEncontrados = nuevosNumeros.slice(i, nuevosNumeros.length);
            return elementosEncontrados;
        }
    }*/