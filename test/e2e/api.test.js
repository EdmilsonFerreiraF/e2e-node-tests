import {
    jest,
    expect,
    test,
    describe
} from '@jest/globals'

import superTest from 'supertest'
import Server from '../../src/server.js'

describe('API E2E Test Suite', () => {
    test('GET / - should return an array', async () => {
        const response = await superTest(Server)
        .get('/')

        const data = JSON.parse(response.text)

        expect(data).toBeInstanceOf(Array)
        expect(data.length).toEqual(0)

        console.log('text', response.text)
    })
})