#!/usr/bin/env node
'use strict';

const { program } = require('commander');
const pkg = require('./package.json');
const axios = require('axios');
const cheerio = require('cheerio');
const Table = require('cli-table3');
const URL = 'https://pt.bab.la/verbo/ingles';

program.version(pkg.version, '-v, --version');

program
  .arguments('<verb>')
  .description('Write the verb that you want find')
  .action(async (verb) => {
    await search(verb);
  });

async function search(verb = '') {
  try {
    const response = await axios.get(`${URL}/${verb}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const $ = cheerio.load(response.data);
    const results = [];

    $('div.quick-results div.quick-result-entry').each((i, elem) => {
      const type = $(elem).find('div.quick-result-option').text().trim();
      const overview = [];

      $(elem).find('div.quick-result-overview > ul li').each((j, li) => {
        overview.push($(li).text().trim());
      });

      if (type && overview.length > 0) {
        results.push({ type, overview: overview.join(', ') });
      }
    });

    if (results.length === 0) {
      console.error(`The verb "${verb}" was not found`);
      return;
    }

    showResults(results);
  } catch (err) {
    console.error(`Error: The verb "${verb}" was not found or there was a connection issue`);
    console.error(err.message);
  }
}

function showResults(verbs = []) {
  const data = verbs.slice(0, 3); // Get first 3 results

  if (data.length === 0) {
    return;
  }

  const table = new Table({
    head: data.map(v => v.type)
  });

  table.push(data.map(v => v.overview));
  console.clear();
  console.log(table.toString());
}

program.parse(process.argv);
