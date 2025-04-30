# corso-docker-base-nodejs-websocket

è una virtualizzazione di un sistem operativo o sisntema di conteinerizzazione.
virtualizzazione di macchine virtuali che si comportano come macchinari veri.
paravirtualizzazione:

virtualizzazione: creazione di un nuovo computer quanti ne voglio con neccessariamente un sistema operativo 
creazione di ambienti senza sistea operativo utilizzando il sistema operativo della macchina host e quindi si parla di container micro macchine virtuali.
Kernel linux 2 caratteristiche 
name spaces e cgroup
sono proprie del kernel linux e basta cosa prevedono
namespaces mi permette di isolare le risorse a disposizione del computer nel loro utilizzo di computer diversi
invece cgroup limita e isola i processi garantisce protezione ai processi da attacchi da altri processi .
il vantaggio sono le risorse per un solo sistema operativo attivo e tutti sfrutteranno lo steso in un modo sucuro perchè i processi di ogni container sono separati e un processo in un container non interagisce con altri container

da windows 10 è già installato un sottosistema che è una macchina virtuali linux
dal punto di vista del filesystem  del s.o  non può essere in nessun modo essere modificato  un conteiner vede tutti i file del sistema operativo ma solo in lettura 
image: contiene file di installazione, file di configurazione, variabili di ambiente, tutto quello che serve.
MYSQL esempio è fatta tutta a strati ugnuno di questi è in read only una volta creato non può essere modificato sola lettura 
=======
# Corso docker, nodejs/express e websocket
### a.s. 2024/2025
### Classe 4Bi

## Guide

- [Docker](./DOCKER.md)
