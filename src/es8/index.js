// --> object.entries() <--

const { default: hello } = require("../es6/module");

// para convertir los elementos de un objeto en una matriz
const data = {
    frontend: 'oscar',
    backend: 'isabel',
    desing: 'anna',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//--> Object.values() <--
//pasar los valores en el objeto a un areglo
const data = {
    frontend: 'oscar',
    backend: 'isabel',
    desing: 'anna',
}

const values = Object.values(data);
console.log(values)


// --> Modificacion de Strings <--

const string = 'hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12,'-----'))


//Async Await
const helloWorld = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() => resolve('Hello world'), 3000)
        }else{
            reject(new Error('Test Error'))
        }
    })
};

const helloAsync = async () =>{
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error){
        console.log(error);
    }
};

anotherFunction();