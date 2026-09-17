const entrada = require('readline-sync');

const nomeMaterial = entrada.question("Digite o nome do material: ");
const quantidadeAdiquirida = entrada.questionInt("Informe qual a quantidade de materiais adiquiridos: ");
const precoMaterial = entrada.questionFloat("Qual o valor da unidade? ");

const TotalCompra =  quantidadeAdiquirida * precoMaterial 

console.log("\n=== RELATORIO DAS COMPRAS ===");
console.log(`O valor total da compra foi: ${TotalCompra.toFixed(2)}`);
