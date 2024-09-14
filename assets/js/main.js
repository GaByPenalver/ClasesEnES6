import { Cliente } from './Cliente.js';
import { Impuestos } from './Impuestos.js';


//Cliente 1
const impuestoCliente1 = new Impuestos(1000000, 200000);
const cliente1 = new Cliente('Luis Orellana', impuestoCliente1);


console.log(`Cliente: ${cliente1.getNombre()}`);
console.log(`Impuesto calculado: $${cliente1.calcularImpuesto()}`);

console.log('\n');


//Cliente 2

const impuestoCliente2 = new Impuestos(2000000, 500000);
const cliente2 = new Cliente('Miguel Moreno', impuestoCliente2);


console.log(`Cliente: ${cliente2.getNombre()}`);
console.log(`Impuesto calculado: $${cliente1.calcularImpuesto()}`);
