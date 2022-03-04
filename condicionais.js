console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = 0;

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhado) {
    console.log("\nUsuário habilitado para comprar.");
    console.log(`\nDestino vendido: ${listaDeDestinos[1]}`)
    listaDeDestinos.splice(1,1);
} else {
    console.log("\nComprador menor de idade e não está acompanhado. Não pode comprar.");
}

console.log("\nDestinos disponíveis:");
console.log(listaDeDestinos);
