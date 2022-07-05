const express = require('express');
var bodyParser  = require('body-parser');
const app = express(),
      port = 8080;

const users = [];

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/HELLO-WORLD-APP/dist/hello-world-app/"));


app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/HELLO-WORLD-APP/dist/hello-world-app/index.html")
});

app.listen(port, (err) => {
   if(err) {
     console.log(err)
   }
    console.log(`Server listening on the port:!!!::${port}`);
});