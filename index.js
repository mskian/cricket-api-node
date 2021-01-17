const got = require('got');

const msg = 'API ERROR OR NO MATCH DATA';

const ScoreData = link => {
    return got(link).then(response => {
        const data = response.body;
        return data;
    }).catch(error => {
        if (error) {
            error.message = msg;
        }
        return error.message;
    });
};

module.exports.match = ScoreData;