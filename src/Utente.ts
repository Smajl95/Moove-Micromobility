import { IUtente } from './IUtente';
import { IMezzo } from './IMezzo';

export class Utente implements IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;

    constructor(nome: string, cognome: string, email: string, metodoPagamento: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }

    prenotaMezzo(mezzo: IMezzo): void {
        if (mezzo.stato === 'disponibile') {
            mezzo.assegnaUtente(this);
        } else {
            console.log(`Il mezzo con ID ${mezzo.id} non è disponibile.`);
        }
    }
}
