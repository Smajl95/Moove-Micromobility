// Importa le interfacce IMezzo e IUtente
import { IMezzo } from './IMezzo';
import { IUtente } from './IUtente';


export class Mezzo implements IMezzo {
    tipo: 'bici' | 'scooter' | 'monopattino';
    id: string;
    stato: 'disponibile' | 'in uso';

    constructor(tipo: 'bici' | 'scooter' | 'monopattino', id: string) {
        this.tipo = tipo;
        this.id = id;
        this.stato = 'disponibile';
    }

    assegnaUtente(utente: IUtente): void {
        if (this.stato === 'disponibile') {
            this.stato = 'in uso';
            console.log(`Il mezzo con ID ${this.id} è stato assegnato a ${utente.nome} ${utente.cognome}.`);
        } else {
            console.log(`Il mezzo con ID ${this.id} non è disponibile.`);
        }
    }
}
