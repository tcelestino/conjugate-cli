# Conjugate Command Line

[![CI](https://github.com/tcelestino/conjugate-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/tcelestino/conjugate-cli/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/@tcelestino%2Fconjugate-cli.svg)](https://www.npmjs.com/package/@tcelestino/conjugate-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/node/v/@tcelestino/conjugate-cli)](https://nodejs.org)

We sometimes forget to conjugate verbs in English or in other languages and that is why I have developed conjugate command line, a useful tools to help us find the correct verb tenses on terminal.

Conjugate command line is a web scraper that uses data from [bab.la](https://bab.la) website. It is, however, an independent project which **does not relate** to bab.la website.

## Installation

```bash
npm i -g @tcelestino/conjugate-cli
```

## Usage

```bash
conjugate play
```

The result:

```bash
┌────────────┬─────────────┬─────────────────┐
│ Infinitive │ Simple past │ Past participle │
├────────────┼─────────────┼─────────────────┤
│ to play    │ played      │ played          │
└────────────┴─────────────┴─────────────────┘
```

**PS.:** you don't need to install the conjugate-cli, you can use `npx` instead:

```bash
npx @tcelestino/conjugate-cli play
```

## Requirements

- Node.js >= 18.0.0

## Development

### Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests with UI
npm run test:ui

# Run linter
npm run lint
```

### Test Coverage

The project has comprehensive unit tests with **84% code coverage**, testing:
- HTML parsing and data extraction
- Input validation
- Error handling
- Result formatting
- Console display

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Write tests for your changes
4. Make sure all tests pass: `npm test`
5. Commit your changes: `git commit -am 'Add some feature'`
6. Push to the branch: `git push origin my-new-feature`
7. Submit a pull request :D

All pull requests are automatically tested via GitHub Actions CI.

## Roadmap

### Completed ✅
- ✅ Unit tests with Vitest
- ✅ GitHub Actions CI/CD
- ✅ Modern Node.js 18+ support
- ✅ Updated dependencies

### Future Features
- [ ] Add option to choose the language
- [ ] Create option to show verb examples
- [ ] Create API module
- [ ] Solve bab.la anti-bot protection issue

## Credits

[@tcelestino](https:/github.com/tcelestino)

## License

The MIT License (MIT)
