import './styles.css';
import { Mezzo } from './Mezzo';
import { Utente } from './Utente';
import { Citta } from './Citta';

const citta = new Citta('Milano');
const bici = new Mezzo('bici', '1');
const scooter = new Mezzo('scooter', '2');
const monopattino = new Mezzo('monopattino', '3');
const utente = new Utente('Mario', 'Rossi', 'mario.rossi@example.com', 'carta di credito');

citta.aggiungiMezzo(bici);
citta.aggiungiMezzo(scooter);
citta.aggiungiMezzo(monopattino);

const output = document.getElementById('output');
const addMezzoButton = document.getElementById('addMezzo');
const prenotaMezzoButton = document.getElementById('prenotaMezzo');

const renderMezzi = () => {
    if (output) {
        output.innerHTML = '<h2>Mezzi disponibili</h2>';
        citta.mezziDisponibili.forEach(mezzo => {
            output.innerHTML += `<p>${mezzo.tipo} (ID: ${mezzo.id}, Stato: ${mezzo.stato})</p>`;
        });
    }
};

addMezzoButton?.addEventListener('click', () => {
    // Genera casualmente un numero tra 0 e 2 per selezionare casualmente tra bici, scooter e monopattino
    const randomNumber = Math.floor(Math.random() * 3);

    let tipoMezzo: 'bici' | 'scooter' | 'monopattino';

    // Seleziona casualmente il tipo di mezzo in base al numero generato
    switch (randomNumber) {
        case 0:
            tipoMezzo = 'bici';
            break;
        case 1:
            tipoMezzo = 'scooter';
            break;
        case 2:
            tipoMezzo = 'monopattino';
            break;
        default:
            tipoMezzo = 'bici'; // Default a bici se per qualche motivo il numero generato non è valido
            break;
    }

    // Crea un nuovo mezzo del tipo selezionato
    const nuovoMezzo = new Mezzo(tipoMezzo, (Math.random() * 1000).toFixed(0));

    // Aggiunge il nuovo mezzo alla città e aggiorna la visualizzazione
    citta.aggiungiMezzo(nuovoMezzo);
    renderMezzi();
});

prenotaMezzoButton?.addEventListener('click', () => {
    if (citta.mezziDisponibili.length > 0) {
        const mezzo = citta.mezziDisponibili[0];
        utente.prenotaMezzo(mezzo);
        renderMezzi();
    } else {
        console.log('Nessun mezzo disponibile.');
    }
});

renderMezzi();
