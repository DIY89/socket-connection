
/* START WEBSOCKET SERVER */

/* LOGGING FUNCTION */
const log = (...optionalParams) => console.log(`Server :`, ...optionalParams);

log('Server starting on http://localhost:815');

const ioServer = require('socket.io')('815', {
    cors: {
        origin: '*', //'http:localhost:815,
        methods: ['GET', 'POST']
    }
});

/* NEW CLIENT CONNECTED */
ioServer.on('connection', function (client) {
		log('New client connected - ID', client.id);
		
    client.on('socket', function (data) {
			log('Daten von Client empfangen: ', data);
			
			if(data = "test"){
				ioServer.emit('client', 'hat funktioniert');
			}
		});

    /* CLIENT DISCONNECTED */
    client.on('disconnect', function () {
			log('Client disconnected - ID ', client.id);

      if (ioServer.engine.clientsCount == 0) {
        log('No more clients connected - removing lock and arming trigger');
        }
    });
});


