const express = require('express')
const path = require('path');
const router = require("./server/routes")
const app = express();
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '/client/dist/client/')))
router(app)


const port = 8000;

app.all('**', (req, res)=>{
    res.sendFile(path.join(__dirname,'./client/dist/client/index.html'))
})
app.listen(port, function(){
    console.log("listen 8000!!!")
})