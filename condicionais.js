console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhado = 0;

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("\nComprador maior de idade");
    console.log(`\nDestino vendido: ${listaDeDestinos[1]}`)
    listaDeDestinos.splice(1,1);
} else {
    if (estaAcompanhado) {
        console.log("\nComprador menor de idade acompanhado");
        console.log(`Destino vendido: ${listaDeDestinos[1]}`)
        listaDeDestinos.splice(1,1);
    } else {
        console.log("Comprador menor de idade e não está acompanhado");
    }
}

console.log("\nDestinos disponíveis:");
console.log(listaDeDestinos);
