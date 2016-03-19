import micro, {send, sendError} from 'micro'
import {parse} from 'url'
import Event from '@rafaeljesus/events-core'

export default micro(async function (req, res) {
  try {
    if (req.method !== 'GET') {
      return send(res, 405, 'Invalid method')
    }
    send(res, 200, await search(req))
  } catch (err) {
    sendError(req, res, err)
  }
})

async function search (req) {
  const query = parse(req.url, true).query
  return await Event.search(query)
}
