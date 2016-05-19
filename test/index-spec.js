import test from 'ava'
import request from 'request-promise'
import Event from '@rafaeljesus/events-core'

import '../server'
import fixture from './fixture'

let data = fixture()

test.beforeEach(async () =>
  await Event.create(data)
)

test.afterEach(async () =>
  await Event.remove()
)

test('GET /events', async (t) => {
  try {
    const body = await request({
      uri: 'http://localhost:3000',
      method: 'GET',
      json: true
    })
    t.is(body.total, 1)
    t.is(body.result.length, 1)
    t.same(body.result[0].status, data.status)
  } catch (err) {
    t.false(err)
  }
})
