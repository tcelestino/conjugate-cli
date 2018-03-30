# Conjugate CLI

We sometimes forget to conjugate verbs in English. Conjugate CLI was created to help us find the correct verb tenses in the English language on terminal.

Conjugate CLI is web scraper that uses data from [bab.la](https://bab.la) website. However, this is an independent project **which does not relate** to bab.la website.

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

- Create unit test;
- Add Travis integration.

## Features

- Create option to show verbs examples;
- Create API module.

## Credits

[@tcelestino](https:/github.com/tcelestino)

## License

The MIT License (MIT)
