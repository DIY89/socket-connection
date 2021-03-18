<?php 

	$connection = @fsockopen('127.0.0.1', '815');

	if (! is_resource($connection)){
		$logfile = 'socket_logfile.log';

		print ("\t<!-- Remote Buzzer Enabled --- starting server -->\n");

		proc_close(proc_open ("node" ." socket_server.js 1>>".$logfile." 2>&1 &", array(), $foo));

	}else {
	   print ("\t<!-- Remote Buzzer Enabled --- server already started (port in use) -->\n");
	}
  
?>
<script type="text/javascript" src="node_modules/socket.io-client/dist/socket.io.js"></script>

