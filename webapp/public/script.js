// Categorie dei messaggi
const messaggi = {
    welcome: 'welcome',
    registration: 'registration',
    confermaRegistrazione: 'conferma-registrazione',
    nuovoUtente: 'nuovo-utente',
    creaNuovaRoom: 'crea-nuova-room',
    elencoRoom: 'elenco-room',
    entraInRoom: 'entra-in-room', 
}

// L'esecuzione della funzione io crea il websocket lato client (socketClient)
// Attraverso il socketClient il client può inviare e ricevere messaggi con il server
var socketClient = io();

function registration() {
    let nickname = document.getElementById('nickname').value;
    // Mando un messaggio di richiesta registrazione al server. nel messaggio inserisco il nickname scritto nella input
    socketClient.emit(messaggi.registration, nickname);
}

function creaRoom() {
    let roomName = document.getElementById('room').value;
    socketClient.emit(messaggi.creaNuovaRoom, roomName);
}

socketClient.on(messaggi.welcome, (messaggio) => {
    // Funzione di callback che verrà eseguita quando il server manda la client il messaggio welcome
    let divMessaggi = document.getElementById('messaggi');
    divMessaggi.innerText = messaggio;

    console.log(messaggio);
})

socketClient.on(messaggi.confermaRegistrazione, (dati) => {
    console.log(dati);
})

socketClient.on(messaggi.nuovoUtente, (messaggio) => {
    console.log(messaggio);
})

socketClient.on(messaggi.elencoRoom, (rooms) => {
    console.log(rooms)
})