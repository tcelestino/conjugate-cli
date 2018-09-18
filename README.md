# Conjugate Command Line

We sometimes forget to conjugate verbs in English or others languages. I created conjugate command line to help us find the correct verb tenses at the moment in english on terminal.

Conjugate CLI is web scraper that uses data from [bab.la](https://bab.la) website, however this is a independent project **does not relate** with bab.la website.

## Installation

```bash
npm i -g conjugate-cli
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

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## To Do

- Create test;
- Add Travis integration.

## Features

- Add option to choice the language.
- Create option to show verbs examples;
- Create API module.

## Credits

[@tcelestino](https:/github.com/tcelestino)

## License

The MIT License (MIT)
