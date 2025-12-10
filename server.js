const express = require('express');
const app = express();

app.use(express.static(__dirname)); // すべてのファイルを静的配信

app.listen(3000, () => {
  console.log("server started: http://localhost:3000");
});