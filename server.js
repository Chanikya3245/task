const express = require('express');
		const path = require('path');
		const app = express();
		app.use(express.static(__dirname + '/dist/task'));
		app.get('/*', function(req,res) {
		res.sendFile(path.join(__dirname+
		'/dist/task/index.html'));});
		const server = app.listen(process.env.PORT || 5000, () => {
			const port = server.address().port;
			console.log(`Express is working on port ${port}`);
		});