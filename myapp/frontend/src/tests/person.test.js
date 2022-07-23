import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Persons from '../components/Persons'

test('renders person', () => {
  const personList = [{
    name: 'john doe',
    number: '010-123456',
    id: '1234'
  }]

  render(<Persons persons={personList} />)
  const element = screen.getByText('john doe 010-123456')
  expect(element).toBeDefined()
})

test('delete button calls handler', async () => {
  const personList = [{
    name: 'john doe',
    number: '010-123456',
    id: '1234'
  }]

  const mockHandler = jest.fn()

  render(<Persons persons={personList} handleDelete={mockHandler} />)

  const user = userEvent.setup()
  const button = screen.getByText('delete')
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})