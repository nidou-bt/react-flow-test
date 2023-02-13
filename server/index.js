const express = require('express');

const app = express();

app.use('/api/node', require("./src/routes/node.router"))
app.use('/edge/node', require("./src/routes/edge.router"))
app.use('/diagram/node', require("./src/routes/diagram.router"))
app.use('/board/node', require("./src/routes/board.router"))

app.listen(3001, ()=> console.log('server run in port 3000'))