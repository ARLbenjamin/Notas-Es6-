// --> metodo .flat() para arrays <--
// se usa para aplanar arreglos con diferentes niveles de profundidad

let array = [1, 2, 3, [1,2,3, [1,2,3]]]

console.log(array.flat())


// metodo .flatMap() para mapear arreglos 
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));


// metodo trimStart() para strings, elimina los espacios en blanco delante del string
let hello = '    Hello World';
console.log(hello);
console.log(hello.trimStart());
//metodo trimEnd() para quitar lso espacios en blanco al final de un string
let hello = 'Hello World     ';
console.log(hello);
console.log(hello.trimEnd());

