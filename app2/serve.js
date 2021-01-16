const express = require('express');

const app = express();

app.use(express.static("dist"))

app.listen(3001, () => {
  console.log(`Module listening at http://localhost:3001`)
})