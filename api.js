const express = require('express');
const cors = require('cors');
const score = require('./index.js');

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

app.listen(port, function () {
    console.log('listening on port ' + port);
});

function customHeaders(req, res, next) {
    app.disable('x-powered-by');
    res.setHeader('X-Powered-By', 'Live Score API');
    next();
}
app.use(customHeaders);

app.get('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');
    res.header('Content-Type', 'application/json');
    const LIVE_MATCH = "<CRICKET API URL>";
    score.match(LIVE_MATCH).then(live => {
        res.send(live);
      });
});