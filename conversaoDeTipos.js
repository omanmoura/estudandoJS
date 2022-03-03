console.log("Conversão de Tipos");

//Operação de soma com textos concatena as partes
console.log("ano" + 2020);
console.log("2" + "2");

//Conversão forçada para tranformar em números inteiros e realizar a soma
console.log(parseInt("2") + parseInt("2"));

//Em operações matemáticas com textos (exceto adição), o JS tentará converter automaticamente em números e fazer o cálculo.
console.log("10" / "2");
console.log("10" * "2");

//Not a Number: o JS tenta converter e dá erro
console.log("Oman" * "5");
