const express = require('express');
var path = require('path');
const app = express();
const port = 3000;
app.use(express.static( path.join(__dirname, 'html')));
app.use(express.static("assets"));
app.use(express.static( path.join(__dirname, 'css')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html/home.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})