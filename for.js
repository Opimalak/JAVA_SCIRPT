let notas = [10, 9.5, 8, 7.5];

let somant = 0;

for (let i = 0; i < notas.length; i++){
    somant += notas[i]; 

}

let media = somant / notas.length;

console.log(`A média das notas é ${media}`)