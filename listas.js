console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

console.log("Destinos possíveis:");
//console.log(salvador,saoPaulo,rioDeJaneiro);

//construtor de uma lista (array)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
console.log(listaDeDestinos);

//Adicionar itens a uma lista de forma dinâmica
listaDeDestinos.push(`Curitiba`);
console.log(listaDeDestinos);

//Remover itens da lista
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

//Imprimindo um elemento específico da lista
console.log(listaDeDestinos[1]);