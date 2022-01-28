const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();
const PORT = 4000;
const URL = 'https://dolarhoje.com/';

axios(URL).then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    const estrangeiro = $('#estrangeiro', html);
    const nacional = $('#nacional', html);

    const dolar = estrangeiro.attr('value');
    const real = nacional.attr('value');

    console.log(`$${dolar} = R$${real}`);
});

app.listen(PORT, () => console.log(`🔥 Server is running on PORT ${PORT}`));