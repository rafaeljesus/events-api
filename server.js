import micro, { send, sendError } from 'micro'
import { parse } from 'url'
import { wrap, log } from '@rafaeljesus/events-util'
import Event from '@rafaeljesus/events-core'

const port = process.env.PORT || 3000

const search = async (req) => {
  const query = parse(req.url, true).query
  return await Event.search(query)
}

const srv = micro(wrap(async (req, res) => {
  switch (req.method) {
    case 'GET':
      return send(res, 200, await search(req))
    default:
      send(res, 405, 'Invalid method')
  }
}))

srv.listen(port)

log.info(`> \u001b[96mReady!\u001b[39m Listening on ${port}.`)
