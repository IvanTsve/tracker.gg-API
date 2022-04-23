const { WEAPONS_URL } = require('../config/config');
const fetch = require('node-fetch');

async function getAll() {
    const response = await fetch(WEAPONS_URL, {
        headers: {
            "content-type": "application/json",
            "TRN-Api-Key": "3bf4b6c9-4b8a-4775-91f0-fd5a06bd67fe"
        },
    });
    const body = await response.text();
    return (JSON.parse(body)).data;
}

module.exports = {
    getAll,
}