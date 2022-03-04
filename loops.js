console.log(`Trabalhando com loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `São Paulo`,
    `Rio de Janeiro`,
    `São Paulo`,
    `Curitiba`
);

const idadeComprador = 15;
const estaAcompanhado = 0;
let temPassagemComprada = 0;
const destino = "São Paulo";
const podeComprar = (idadeComprador >= 18 || estaAcompanhado)
let contador = 0;
let passagensDisponiveis = 0;

//LOOP COM WHILE
while (contador < listaDeDestinos.length) {
    if (listaDeDestinos[contador] == destino) {
        passagensDisponiveis++;
    }
    contador++;
}

//LOOP COM FOR
// for (let i = 0; i < listaDeDestinos.length; i++) {
//     if (listaDeDestinos[i] == destino) {
//         passagensDisponiveis++;
//     }
// }

if (passagensDisponiveis > 0) {
    console.log(`Há ${passagensDisponiveis} passagem(ns) disponível(is) para ${destino}.`);
} else {
    console.log(`Não há passagens disponíveis para ${destino}.`);
}