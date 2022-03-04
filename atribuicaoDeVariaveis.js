console.log("Trabalhando com atribuição de variáveis");

//Utilizar o "let" permite que a variável seja sobrescrita futuramente. Funciona bem para "contadores"
//TENTAR REDUZIR AO MÁXIMO A UTILIZAÇÃO!!!

let idade = 26;
let primeiroNome = "Oman";
const sobrenome = "Moura";

console.log(primeiroNome + " " + sobrenome);

//Forma mais enxuta para concatenar
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`)

const nomeCompleto = primeiroNome + sobrenome;

console.log(nomeCompleto)