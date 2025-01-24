è una virtualizzazione di un sistem operativo o sisntema di conteinerizzazione.
virtualizzazione di macchine virtuali che si comportano come macchinari veri.
paravirtualizzazione:

virtualizzazione: creazione di un nuovo computer quanti ne voglio con neccessariamente un sistema operativo 
creazione di ambienti senza sistea operativo utilizzando il sistema operativo della macchina host e quindi si parla di container micro macchine virtuali.
Kernel linux 2 caratteristiche 
# namespaces e cgroup
sono proprie del kernel linux e basta cosa prevedono
namespaces mi permette di isolare le risorse a disposizione del computer nel loro utilizzo di computer diversi
invece cgroup limita e isola i processi garantisce protezione ai processi da attacchi da altri processi .
il vantaggio sono le risorse per un solo sistema operativo attivo e tutti sfrutteranno lo steso in un modo sucuro perchè i processi di ogni container sono separati e un processo in un container non interagisce con altri container

da windows 10 è già installato un sottosistema che è una macchina virtuali linux
dal punto di vista del filesystem  del s.o  non può essere in nessun modo essere modificato  un conteiner vede tutti i file del sistema operativo ma solo in lettura 
image: contiene file di installazione, file di configurazione, variabili di ambiente, tutto quello che serve.
MYSQL esempio è fatta tutta a strati ugnuno di questi è in read only una volta creato non può essere modificato sola lettura 

# portabilità
su una qualsiasi macchina installi docker prendi tutto quello che è software, con un file di testo con tutta la configurazione.
non cambia la configurazione se cambia host basta che ci sia docker installato,
senza avere una attività amministrative operazione di cambio host immediata a differenza di una sistema virutalizzato qui ho solo un sistema operativo è come se fossero in funzione da macchine diverse

# scalabilità

# orchestrator
ho un computer che gestisce le macchine ch ho
il direttore di orchestra gestisce tutti i rami di tutte le macchine di docker

linguaggio jaml io da programmatore programmo anche le infratture nella quale è in esecuzione il mio software attivatà del coding e sistemistica si fondono.
SDN o NFV anche la gestione delle reti sta dinventando una amministrazione che si fa tramite codice sta diventando al centro nell'amministrazione dei sistemi.

# container
è il contenitore nel quale è in esecuzione il nostro processo
-un container viene mantenuto in stato di esecuzione fintanto che il programma all'interno è in esecuzione se si ferma il programma il container viene spento in automatico
-in un container può essere in esecuzione uno e un solo processo la shell o la bash assieme al processo in esecuzione 1 programma 1 container
-per eseguire un programma va installato ma come avviene su docker? i container non toccano minimamente il file system solo quel container specifico uso ad esempio mysql installato sulla mia macchina host 
tutti i file della macchina linux ad esempio sono tutti in sola lettura READ ONLY. Queste sono le IMMAGINI.

# immagini
ottengo una nuova macchina con i neccessari file per eseguire certi processi sopra lo strato del container abbiamo unaltro strato in read/write che solo quel container può modificarlo
e lemodifiche nascondono quello che sta sotto ma non intaccano minimamente i file al di sotto i file della macchina host ma lo sovrascrivono solo per loro.

se ho dei container e ho dei file dei strati che devo usare in un container ma magari unaltro container ne usa già qualcuno non gli installa tutti ma installa solo quello che gli serve.

docker si collega in rete va dal server gli dice voglio quella immagine li e la tiene se la tinene in locale.
si possono tenere le immagini farle ospitare pubblicare o trasferirle, quste immagini vengono identificate da un nome e un tag versionamento

# netword

# volumi

# variabili di ambiente

enginx server web
