#!/usr/bin/env node
'use strict';

const program = require('commander');
const pkg = require('./package.json');
const osmosis = require('osmosis');
const Table = require('cli-table');
const results = [];
const URL = 'https://pt.bab.la/verbo/ingles';

program.version(pkg.version, '-v, --version');

program
  .arguments('<verb>')
  .description('Write the verb that you want find')
  .action((verb) => {
    search(verb);
  });

function search(verb = '') {
  osmosis.get(`${URL}/${verb}`)
    .find('div.quick-results div.quick-result-entry:nth-child(1n+1n)')
    .set({
      'type': 'div.quick-result-option',
      'overview': 'div.quick-result-overview > ul li'
    })
    .data(result => {
      if (result.hasOwnProperty('type')) {
        results.push(result);
      }
    })
    .done(() => {
      showResultsOnTable(results);
    })
    .error(err => console.error(err));
}

function showResultsOnTable(verbs = []) {
  let data = verbs.filter((x, i) => i < 3); // it was needs because I didn't get to three first items :/

  var getData = (data = [], key) => data.map((obj) => {
    if (!obj.hasOwnProperty(key)) {
      console.warning(`There isn't this key: ${key}`);
      return;
    }

    return obj[key];
  });

  let table = new Table({
    head: getData(data, 'type')
  });

  table.push(getData(data, 'overview'));

  console.log(table.toString());
}

program.parse(process.argv);
