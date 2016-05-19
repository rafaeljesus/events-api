import micro, { send, sendError } from 'micro'
import { parse } from 'url'
import Event from '@rafaeljesus/events-core'

const port = process.env.PORT || 3000

const search = async (req) => {
  const query = parse(req.url, true).query
  return await Event.search(query)
}

const srv = micro(async (req, res) => {
  try {
    switch (req.method) {
      case 'GET':
        return send(res, 200, await search(req))
      default:
        send(res, 405, 'Invalid method')
    }
  } catch (err) {
    sendError(req, res, err)
  }
})

srv.listen(port)

console.log(`> \u001b[96mReady!\u001b[39m Listening on ${port}.`)
