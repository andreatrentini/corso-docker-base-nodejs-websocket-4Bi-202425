// Categorie dei messaggi
const messaggi = {
    welcome: 'welcome',
    registration: 'registration'
}

// L'esecuzione della funzione io crea il websocket lato client (socketClient)
// Attraverso il socketClient il client può inviare e ricevere messaggi con il server
var socketClient = io();

function registration() {
    let nickname = document.getElementById('nickname').value;
    socketClient.emit(messaggi.registration, nickname);
}

socketClient.on(messaggi.welcome, (messaggio) => {
    // Funzione di callback che verrà eseguita quando il server manda la client il messaggio welcome
    console.log(messaggio);
})