const express = require('express');
const app = express();
const port = 3000;

const gitHandle = "cel19";
const lastName = "Lowing";
const firstName = "Collin";

app.get('/', (req, res) => {
    res.send(gitHandle + ':' + lastName + firstName)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});