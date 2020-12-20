//Old Version
function datos(nombre, edad, pais){
    var name = nombre || 'jhonDoe'; //se usa || para agregar valores por default
    var age = edad || 18;
    var country = pais || 'la tierra del olvido';

    console.log('Hola '+ name +' registraremos tu edad (' + age +') y pais (' + country +')');
}
// es6 way
function datos2(name = 'JhonDoe', age = 18, country = 'La tierra del olvido'){
    console.log(`Hola ${name} registraremos tu edad (${age}) y pais (${country})`);
};

datos();
datos2();
// --> template literals <--
let hello = 'hello';
let world = 'world';
let phrase = `${hello} ${world}`;

console.log(phrase);

//  --> Multuilinea <--
//Old Version
let lorem = "aqui va una frase epica \n"
+ "el resto de la flase epica."

//en em6
let lorem2 = `otra frace epica
que no necesita complicarse para multilinear
`;
console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'oscar',
    'age': 18,
    'country' : 'CO'
};

// -->acceder a los datos <--
//old version
console.log(person.name, person.age, person.country);
//hacer destructuracion em6
let {name, age, country} = person;
console.log(name, country, age);

// --> manejo de arrays <--
let team1 = ['juan', 'gabriel', 'pedro'];
let team2 = ['camilo', 'felipe', 'andres'];
// concatenando arrays
let education = ['david', ...team1, ...team2];

console.log(education);

//--> asignacion de valores en objetos <--
let name = 'ariel';
let age = 26;
//es5
obj = {name: name, age: age};
console.log(obj);
//es6
obj2 = {name, age};
console.log(obj2);

// --> Arrow Function <--
const names = [
    {name: 'ariel', age: 26},
    {name: 'camilo', age: 24}
]
//old way
let listOfNames = names.map(function(item){
    console.log(item.name);
})
//con arrow function
let listOfNames2 = names.map(item => console.log(item.name));

// --> Promesas <--
const helloPromise = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('resuleto!!');
        } else{
            reject('Ups!!');
        }
    });
};
//la promesa se ejecuta:
helloPromise().then(response =>console.log(response))
.catch(error => console.log(error));
//ejemplo
const esmayor= (a, b) =>{
    return new Promise((resolve, reject) =>{
        if(a > b){
            resolve(`${a} es mayor que ${b}`)
        } else{
            reject(`${a} no es mayor que ${b}`)
        }
    })
};

esmayor(7, 2).then(response => console.log(response))
.catch(error => console.log(error))

// --> Clases <--
class calculator{
    constructor(){
        this.valueA  = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(3, 5));
//importacion de modulos
import { hello } from './module';

hello();

// --> Generator <--
//funciones que se ejecutan por etapas, al ser llamada una vez 
//solo ejecutara su primera parte
function* helloWorld(){
    if (true){
        yield 'Hello';
    }
    if (true){
        yield 'world';
    }
};

const generatorHellow = helloWorld();
console.log(generatorHellow.next().value);
console.log(generatorHellow.next().value);
console.log(generatorHellow.next().value);



