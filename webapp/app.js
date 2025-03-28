// Dichiaro una costante che assume come valore il codice esportato dal package express
const express = require('express');
// Dichiaro una costante che assume come valore la libreria socket.io
const socketio = require('socket.io');
// Meccanismo per importare oggetti, funzioni, array dichiarati in altri file
const config = require('./config');
const log = require('./log');

// app è una istanza di express, rappresenta la mia applicazione
const app = express();

// Aggiungo in testa ll'elaborazione della catena dei middleware la funzione log
app.use(log);

// Implemento la mia applicazione

// Esempio 1. Rispondo al client con il messaggio json Hello world!
app.get('/hello-world', (request, response) => {
    response.status(200).send({
        messaggio: 'Hello world!'
    })
})


/* // Esempio 2. Rspondi al client inviando un file (il meccanismo reale prevede che
// Express apra il file html, ne legga il contenuto e lo aggiunga al body della risposta http)
app.get('', (request, response) => {
    // __dirname è una variabile di sistema che contiene il percorso della directory radice dell'applicazione (/app)
    response.status(200).sendFile(__dirname + '/public/index.html');
})
// Mettiamo in ascolto il server anche per la richiesta del foglio stile
app.get('/style.css', (request, response) => {
    response.status(200).sendFile(__dirname + '/public/style.css');
}) */

// Esempio 3. Realizzazione di un comune web server.
// il metodo use di express prevede la possibilità di aggiungere un middleware alla catena di elaborazione di express.
// Per tutte le URL '' il server passerà l'elaborazione a express.static
// express.static cercherà nella directory public il file richiesto dal client e se trovato lo invierà in risposta.
app.use('', express.static(__dirname + '/public'));

// Creare un server nel quale mettere la mia applicazione in ascolto su una determinata porta
const server = app.listen(config.port, () => {
    // Visualizzo nella console che il server è in esecuzione.
    console.log('Server in ascolto sulla porta: ', config.port);
})

var utenti = [];

// Creare un'istanza del real time server
const io = socketio(server);

// on ci consente di definire cosa defe fare il server quando un client chiede di stabilire una connessione.
// il codice che il server deve eseguire va scritto nella funzione di callback.
// socketServer è un oggetto che rimane attivo fintanto ché il client è connesso, e viene distrutto solo 
// quando il client abbandona la pagina.
// Attraverso socketServer il server può inviare o ricevere messaggi dal client.
io.on(config.messaggi.connection, (socketServer) => {
    console.log('Si è connesso un client...');

    socketServer.emit(config.messaggi.welcome, 'Benvenuto nella chat. Per interagire con gli altri devi registrarti.');

    socketServer.on(config.messaggi.registration, (nickname) => {
        utenti.push(nickname);
        socketServer.emit(config.messaggi.confermaRegistrazione, {
            nickname: nickname,
            messaggio: 'Avvenuta registrazione',
            utenti: utenti
        })

        console.log(nickname);
    })
})
