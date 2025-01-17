//Arrays
// 1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío
let arrayVacio =[];

// 2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
let arrayNumeros=[0,1,2,3,4,5,6,7,8,9];

//3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
let arrayNumerosPares =[0,2,4,6,8];

//4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]
let arrayBidimensional=[[0, 1, 2], ['a', 'b', 'c']];

//Funciones
//5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma
function suma(num1,num2) {
    return num1+num2;  
}

//6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)
function potenciacion(num1,num2) {
    return Math.pow(num1,num2);   
}

//7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]
let stri='hola mundo';
function separarPalabras(stri) {
    return stri.split(' ');
}

//8.- Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado
// de concatenar el primer string el número dado de veces
function repetirString(stri,num1) {
    return stri.repeat(num1); 
}

//9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es


let num3 = Math.floor(Math.random());
function esPrimo(num1){
    if(num1==0 || num1==1|| num1%2==0 || num1%3==0 ||num1%5==0 || num1%7==0){
        return false;
    }else{
        return true;
     } 
}  

//Mezclando arrays y funciones
//10.- Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor

function ordenarArray (arr){
    return arr.sort(function(a, b){
        return a - b;
    });
}
//11.- Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares
function obtenerPares(arr){
    return arr.filter(number => number % 2 === 0);
}


//12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array 
//entrada: [0, 1, 2] String salida: '[0, 1, 2]'

function pintarArray(arr) {
    let arr2= arr.join(', ')
    let stri = '['
    let strin = ']'

    return stri + arr2 + strin; 
    
}
//13.- Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array

function arrayMapi(arr ,f) {
    let arrResul =[];
    for (let i = 0; i < arr.length; i++) {
        arrResul[i] = f(arr[i]);       
    }
    return arrResul;
    
}


//14.- Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados
let array = [2,3,4,3,2,5,6];
function eliminarDuplicados(array) {

    const arraySin= new Set(array);
    let arraySinDupl =[...arraySin];

    return arraySinDupl;
}



//Arrays
//15.- Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]

//16.- Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
let holaMundo = ['Hola', 'Mundo'];

//17.- Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
let loGuardoTodo =['hola','que',23, 42.33,'tal'];

//18.- Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
let arrayDeArrays =[[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//Funciones
// 19.- Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación
function multiplicacion(num1,num2) {
    return num1*num2;    
}
//20.- Crea la función division que acepte como argumento dos números y devuelva el resultado de su division
function division(num1,num2) {
    return num1/num2;    
}
//21.- Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar
function esPar(num1) {
    if (num1%2==0) {
        return true;
    } else {
        return false;
    }   
}
//22.- Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y 
//multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)

let arrayFunciones = [function suma (num1,num2){ return num1+num2;},function resta(num1,num2) {return num1-num2;},function multiplicacion(num1,num2) {return num1*num2;}];

//Mezclando arrays y funciones
 //23.- Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
function ordenarArray2(numeros) {
    return numeros.sort(function(a, b){return b - a}); 
}
//24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares
function obteneImpares(arr){
    return arr.filter(number => number % 2 !== 0);
}
//25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
function sumarArray(arr){
    let suma = 0;
    for (let i = 0; i < arr.length; i++){
        suma += arr[i];
    }
    return suma;
}

//26.- Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
function multiplicarArray(arr){
    let multiplación = 1;
    for (let i = 0; i < arr.length; i++){
        multiplación *= arr[i];
    }
    return multiplación;
}