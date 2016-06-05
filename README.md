## Events API

[![CircleCI](https://circleci.com/gh/rafaeljesus/events-api/tree/master.svg?style=svg)](https://circleci.com/gh/rafaeljesus/events-api/tree/master)
[![Docker Image Pulls](https://img.shields.io/docker/pulls/rafaeljesus/events-api.svg)](https://hub.docker.com/r/rafaeljesus/events-api/)
[![bitHound Overall Score](https://www.bithound.io/github/rafaeljesus/events-api/badges/score.svg)](https://www.bithound.io/github/rafaeljesus/events-api)
[![bitHound Dependencies](https://www.bithound.io/github/rafaeljesus/events-api/badges/dependencies.svg)](https://www.bithound.io/github/rafaeljesus/events-api/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/rafaeljesus/events-api/badges/devDependencies.svg)](https://www.bithound.io/github/rafaeljesus/events-api/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/rafaeljesus/events-api/badges/code.svg)](https://www.bithound.io/github/rafaeljesus/events-api)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/rafaeljesus/events-api)

* The public Events API
* A minimal docker alpine container
* Automatically pushes it to dockerhub if tests pass

## Running server
To start the serve execute:
```bash
npm start
```

### search
```bash
curl -X GET 'http://localhost:3000/v1/events/?name=order_received&status=error&page=2&page_size=25'
```

## Docker
This repository has automated image builds on hub.docker.com.

run:
```
$ docker-machine start default
$ eval $(docker-machine env default)
$ docker-compose up
$ curl `docker-machine ip default`:3000
```

## Built with
- [nodejs](https://https://nodejs.org) Backend is a node.js.
- [micro](https://github.com/zeithq/micro) API is exposed by micro. Async HTTP microservices

## Contributing
- Fork it
- Create your feature branch (`git checkout -b my-new-feature`)
- Commit your changes (`git commit -am 'Add some feature'`)
- Push to the branch (`git push origin my-new-feature`)
- Create new Pull Request

### Maintaners

* [Rafael Jesus](https://github.com/rafaeljesus)
