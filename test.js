const score = require('./index.js');

const LIVE_MATCH = "https://cricket-api.vercel.app/live.php";

score.match(LIVE_MATCH).then(live => {
    console.log(live);
});