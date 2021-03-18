  console.log('Remote Buzzer client is enabled');


  var ioClient;

  ioClient = io('http://localhost:815');

  console.log('Remote buzzer connecting to http://localhost:815');
	
	$('#test').on('click',function(){
		console.log("Sende 'test' an den Server");
		ioClient.emit('socket', 'test');
		console.log("gesendet");
	});
	
  ioClient.on('client', function (data) {
		console.log("Antwort vom Server: " + data);
		//ioClient.emit('socket', 'test');
	});

	ioClient.on('connect_failed', function () {
		console.log('ERROR: client unable to connect to webserver ip');
	});

