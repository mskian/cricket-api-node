# Cricket API Node 🏏

![Score Test](https://github.com/mskian/cricket-api-node/workflows/Score%20Test/badge.svg)  [![dependencies Status](https://status.david-dm.org/gh/mskian/cricket-api-node.svg?style=flat-square)](https://david-dm.org/mskian/cricket-api-node)  

Build a Live Cricket Score JSON API by using this Node Module.

## Requirements 📦

- Node.js 12X LTS or 14X LTS

## Installation 🍔

- Insall via `NPM`

```sh
npm install cricket-api-node

OR

yarn add cricket-api-node
```

## Usage 📝

- Get Live Match Score

```js
const score = require('cricket-api-node');

score.match('<Live Match URL from cricbuzz>');
```

This is My Experimenting `npm` Module for Build an API using Express.js

```js
const express = require('express');
const cors = require('cors');
const score = require('cricket-api-node');

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
    const LIVE_MATCH = "<URL OF CRICKET API>";
    score.match(LIVE_MATCH).then(live => {
        res.send(live);
      });
});
```

## API Library 🗃

- Free Cricket API - <https://github.com/mskian/cricket-api>

## Disclaimer 🗃

- This is not an Offical CLI tool from Cricbuzz - it's an Unofficial CLI tool and API
- This is for Education Purpose only - use at your own risk on Production Site

All Credits Goes to <https://www.cricbuzz.com/>

## My other Projects 🤓

| # | Project Name | Description |
|---|:------|-------------|
| 01 | [Live Cricket Score Static Site](https://github.com/mskian/livescore) | A Simple Scrape Method - Fetch the Live Cricket Score from `espncricinfo.com` using Nodejs and Cheerio.js |
| 02 | [IPL Special](https://github.com/mskian/iplscore) | Cricket API for Get the Live IPL Cricket Score |
| 03 | [Live IPL Score Update on Telegram](https://github.com/mskian/score-update) | Get Live IPL cricket Score on Telegram  |
| 04 | [Live Cricket Score Wordpress Plugin (JS Version)](https://github.com/mskian/hello-cricket) | Get Live Cricket Score on Wordpress site call API using Javascript Fetch API |
| 05 | [Live Cricket Score Wordpress Plugin (Wp Remote URL)](https://github.com/mskian/san-cricket) | Get Live Cricket Score on Wordpress site call API using Wordpress HTTP Remote URL |  
| 06 | [PWA Web App](https://github.com/mskian/vue-cricket) | Real-time Live Cricket Score Web app + PWA Built using Nuxt.js |  

## LICENSE 📕

MIT
