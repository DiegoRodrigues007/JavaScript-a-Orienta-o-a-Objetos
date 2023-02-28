
import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente();

cliente1.nome = "João";
cliente1.cpf = 42565230;

const cliente2 = new Cliente();
cliente2.nome = "Maria";
cliente2.cpf = 78635690;

const contaCorrenteJoao = new ContaCorrente();

contaCorrenteJoao.agencia = 1001;

contaCorrenteJoao.depositar(150);
const valorSacado = contaCorrenteJoao.sacar(80);
console.log(valorSacado)

console.log(contaCorrenteJoao);
