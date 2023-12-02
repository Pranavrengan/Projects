var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors({
  origin: '*'
}));

 app.listen(3000, () => {
  console.log("Application started and Listening on port 3000")
})

app.get("/login", (req, res) =>{
  res.send({message: 'hello world'});
  });



