export interface IMezzo {
  tipo: 'bici' | 'scooter' | 'monopattino';
  id: string;
  stato: 'disponibile' | 'in uso';
  assegnaUtente(utente: IUtente): void;
}

import { IUtente } from './IUtente';
