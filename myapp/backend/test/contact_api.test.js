const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index')
const Person = require('../models/person')

const api = supertest(app)

const initialContact = [{
  name: 'kai hall',
  number: '010-123456'
}]

beforeEach(async () => {
  await Person.deleteMany({})
  const contact = new Person(initialContact[0])
  await contact.save()
})

test('response is ok', async () => {
  await api
    .get('/api/persons')
    .expect(200)
})

test('contacts are correct', async () => {
  const response = await api.get('/api/persons')
  const name = response.body.map(c => c.name)

  expect(response.body).toHaveLength(initialContact.length)
  expect(name).toContain(initialContact[0].name)
})

test('contact can be added', async () => {
  const newContact = {
    name: 'john doe',
    number: '00-000000'
  }
  await api
    .post('/api/persons')
    .send(newContact)
    .expect(201)
})

test('invalid contact is not added', async () => {
  const newContact = {
    name: 'john doe',
    number: '10021123'
  }
  await api
    .post('/api/persons')
    .send(newContact)
    .expect(400)
})

test('contact can be deleted', async () => {
  const response = await api.get('/api/persons')
  const id = response.body.map(c => c.id)
  await api.delete(`/api/persons/${id[0]}`).expect(204)
})


afterAll(() => {
  mongoose.connection.close()
})