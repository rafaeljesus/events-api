import test from 'ava'
import 'babel-register'
import request from 'request-promise'
import Event from '@rafaeljesus/events-core'

import listen from './listen'
import fixture from './fixture'

let data = fixture()

test.beforeEach(async function () {
  await Event.create(data)
})

test.afterEach(async function () {
  await Event.remove()
})

test('GET /events', async function (t) {
  try {
    const url = await listen()
    const body = await request({
      uri: url,
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
