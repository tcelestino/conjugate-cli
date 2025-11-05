const axios = require('axios');
const cheerio = require('cheerio');
const Table = require('cli-table3');

const URL = 'https://pt.bab.la/verbo/ingles';

/**
 * Fetches HTML content from bab.la for a given verb
 * @param {string} verb - The verb to search for
 * @returns {Promise<string>} HTML content
 */
async function fetchVerbPage(verb) {
  const response = await axios.get(`${URL}/${verb}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  return response.data;
}

/**
 * Parses HTML content to extract verb conjugation results
 * @param {string} html - HTML content to parse
 * @returns {Array<{type: string, overview: string}>} Array of conjugation results
 */
function parseConjugationResults(html) {
  const $ = cheerio.load(html);
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

  return results;
}

/**
 * Searches for a verb's conjugation
 * @param {string} verb - The verb to search for
 * @returns {Promise<Array<{type: string, overview: string}>>} Conjugation results
 */
async function searchVerb(verb) {
  if (!verb || typeof verb !== 'string' || verb.trim() === '') {
    throw new Error('Verb must be a non-empty string');
  }

  try {
    const html = await fetchVerbPage(verb);
    const results = parseConjugationResults(html);

    if (results.length === 0) {
      throw new Error(`The verb "${verb}" was not found`);
    }

    return results;
  } catch (err) {
    if (err.message.includes('was not found')) {
      throw err;
    }
    if (err.response) {
      throw new Error(`Error: The verb "${verb}" was not found or there was a connection issue (Status: ${err.response.status})`);
    }
    throw new Error(`Error: The verb "${verb}" was not found or there was a connection issue`);
  }
}

/**
 * Formats and returns conjugation results as a table string
 * @param {Array<{type: string, overview: string}>} verbs - Array of conjugation results
 * @param {number} maxResults - Maximum number of results to display (default: 3)
 * @returns {string} Formatted table string
 */
function formatResults(verbs, maxResults = 3) {
  if (!Array.isArray(verbs) || verbs.length === 0) {
    return '';
  }

  const data = verbs.slice(0, maxResults);
  const table = new Table({
    head: data.map(v => v.type)
  });

  table.push(data.map(v => v.overview));
  return table.toString();
}

/**
 * Displays results in the console (with clear screen)
 * @param {Array<{type: string, overview: string}>} verbs - Array of conjugation results
 * @param {number} maxResults - Maximum number of results to display (default: 3)
 */
function displayResults(verbs, maxResults = 3) {
  if (!Array.isArray(verbs) || verbs.length === 0) {
    return;
  }

  const tableString = formatResults(verbs, maxResults);
  if (tableString) {
    console.clear();
    console.log(tableString);
  }
}

module.exports = {
  fetchVerbPage,
  parseConjugationResults,
  searchVerb,
  formatResults,
  displayResults
};
