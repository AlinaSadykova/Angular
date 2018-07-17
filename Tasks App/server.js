const express = require("express");
const transmogrify = require("./server/routes");

const app = express();

app.use(express.static(__dirname+"/client/dist/client"));

transmogrify(app);

app.listen(8000, function(){
    console.log("listen 8000!!!")
})