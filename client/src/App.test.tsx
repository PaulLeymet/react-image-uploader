import {render, screen} from '@testing-library/react'
import fs from 'fs'
import path from 'path'
import App from './App'

test('renders main page', () => {
  render(<App />)
  const linkElement = screen.getByText(/Image Uploader/i)
  expect(linkElement).toBeInTheDocument()
})

test('check if image has been uploaded successfully', () => {
  const directoryPath = path.join(__dirname, '../../upload')

  fs.readdir(directoryPath, (err, files) => {
    if (err) throw err

    const hasImage = files.some((file) => {
      return ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(file))
    })

    expect(hasImage).toBe(true)
  })
})
