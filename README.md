# Conjugate Command Line

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

- Add option to choice the language;
- Create option to show verbs examples;
- Create API module.

## Credits

[@tcelestino](https:/github.com/tcelestino)

## License

The MIT License (MIT)
