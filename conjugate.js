#!/usr/bin/env node
'use strict';

const { program } = require('commander');
const pkg = require('./package.json');
const { searchVerb, displayResults } = require('./lib/conjugate');

program.version(pkg.version, '-v, --version');

program
  .arguments('<verb>')
  .description('Write the verb that you want find')
  .action(async (verb) => {
    try {
      const results = await searchVerb(verb);
      displayResults(results);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
