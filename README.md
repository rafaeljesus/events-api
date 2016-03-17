## Events API

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/rafaeljesus/events-api)

* The public Events API

## Running server
To start the serve execute:
```bash
npm run build && npm run serve
```

## Create a Event
`curl -X POST localhost:3000/events \`

`-d 'name=order_creted' \`

`-d 'status=completed'`


## Built with
- [nodejs](https://https://nodejs.org) Backend is a node-v.5.7.1.
- [micro](https://github.com/zeithq/micro) API is exposed by micro. Async HTTP microservices

## Contributing
- Fork it
- Create your feature branch (`git checkout -b my-new-feature`)
- Commit your changes (`git commit -am 'Add some feature'`)
- Push to the branch (`git push origin my-new-feature`)
- Create new Pull Request

### Maintaners

* [Rafael Jesus](https://github.com/rafaeljesus)
