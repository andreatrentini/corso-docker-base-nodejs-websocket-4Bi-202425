// Categorie dei messaggi
const messaggi = {
    welcome: 'welcome',
    registration: 'registration',
    confermaRegistrazione: 'conferma-registrazione'
}

// L'esecuzione della funzione io crea il websocket lato client (socketClient)
// Attraverso il socketClient il client può inviare e ricevere messaggi con il server
var socketClient = io();

function registration() {
    let nickname = document.getElementById('nickname').value;
    // Mando un messaggio di richiesta registrazione al server. nel messaggio inserisco il nickname scritto nella input
    socketClient.emit(messaggi.registration, nickname);
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