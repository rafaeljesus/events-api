## Events API

[ ![Codeship Status for rafaeljesus/events-api](https://codeship.com/projects/66ffe6d0-cf94-0133-1f1c-52aba3b897dd/status?branch=master)](https://codeship.com/projects/141289)
[![Docker Image Size](https://img.shields.io/imagelayers/image-size/rafaeljesus/events-api/latest.svg)](https://hub.docker.com/r/rafaeljesus/events-api/)
[![Docker Image Pulls](https://img.shields.io/docker/pulls/rafaeljesus/events-api.svg)](https://hub.docker.com/r/rafaeljesus/events-api/)
[![bitHound Overall Score](https://www.bithound.io/github/rafaeljesus/events-api/badges/score.svg)](https://www.bithound.io/github/rafaeljesus/events-api)
[![bitHound Dependencies](https://www.bithound.io/github/rafaeljesus/events-api/badges/dependencies.svg)](https://www.bithound.io/github/rafaeljesus/events-api/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/rafaeljesus/events-api/badges/devDependencies.svg)](https://www.bithound.io/github/rafaeljesus/events-api/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/rafaeljesus/events-api/badges/code.svg)](https://www.bithound.io/github/rafaeljesus/events-api)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/rafaeljesus/events-api)

* The public Events API

## Running server
To start the serve execute:
```bash
npm run start
```

## Docker
This repository has automated image builds on hub.docker.com.

Use [docker-mongodb](https://github.com/rafaeljesus/docker-mongodb) and run command described there

Finally run:
``
$ docker-machine start default
$ eval $(docker-machine env default)
$ docker run -it -e "NODE_ENV=development" -v "$(pwd)":/data --link mongo:mongo -w /data -p 3000:3000 rafaeljesus/events-api
$ curl `docker-machine ip default`:3000
``

## Search Events
`curl -X GET localhost:3000/?name=order_creted&status=completed&page=1&pageSize=20`

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
