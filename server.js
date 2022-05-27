var express = require('express');
var app = express();

app.get('/',function(req,res) {
res.sendFile(__dirname + '/index.html');
});

// use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server is listening on port ${port}`));
