export class Cliente {
    constructor(nombre, impuesto) {
        this.nombre = nombre;
        this.impuesto = impuesto;
    }
    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    calcularImpuesto() {
        const montoBrutoAnual = this.impuesto.getMontoBrutoAnual();
        const deducciones = this.impuesto.getDeducciones();
        const impuestoTotal = (montoBrutoAnual - deducciones) * 0.21;

        return impuestoTotal;
    }
}