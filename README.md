# Conjugate CLI

Sometimes we forgot to conjugate a verb in English. Conjugate CLI was created to helps the find the correct combine to verb on terminal.

Conjugate CLI is web scraper that used data from [bab.la](https://bab.la) website. This is a personal project **without the partnership bab.la**.

## Installation

```bash
npm i -g conjugate-cli
```

## Usage

```bash
conjugate forget
```

The result:

```bash
┌────────────┬────────────────┬───────────────────┐
│ Infinitive │ Simple past    │ Past participle   │
├────────────┼────────────────┼───────────────────┤
│ to forget  │ forgot; forgat │ forgotten; forgot │
└────────────┴────────────────┴───────────────────┘
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
