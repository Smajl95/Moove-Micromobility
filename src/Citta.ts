import { ICitta } from './ICitta';
import { IMezzo } from './IMezzo';

export class Citta implements ICitta {
    nome: string;
    mezziDisponibili: IMezzo[] = [];

    constructor(nome: string) {
        this.nome = nome;
        this.mezziDisponibili = [];
    }

    aggiungiMezzo(mezzo: IMezzo): void {
        this.mezziDisponibili.push(mezzo);
        console.log(`Mezzo di tipo ${mezzo.tipo} con ID ${mezzo.id} aggiunto alla città ${this.nome}.`);
    }
}
