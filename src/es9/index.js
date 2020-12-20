//nuevas formas de hacer destructuring en es9
const obj = {
    name: 'ariel',
    age: 26,
    country: 'Colombia',
}

let { name, ...all} = obj;
console.log(name, all);


// combinar elementos de 2 objetos
const obj = {
    name: 'ariel',
    age: 26,
}

const obj1 = {
    ...obj,
    country: 'COL',
}

console.log(obj1);

// --> sentencia finally para las promise <--
//es introducir una linea de codigo
const helloWorld = ()=>{
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() => resolve('Heello World'), 3000)
        }else{
            reject(new Error('Test Error'))
        }
    })
}

helloWorld().then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Promesa Finalizada'))

