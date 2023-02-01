import {useState} from 'react'
import './App.css'
import ImageUpload from './components/ImageUpload'
import ValidateButton from './components/ValidateButton'

function App() {
  const [file, setFile] = useState<File>()

  const validate = async () => {
    if (file) {
      const formData = new FormData()
      formData.append('image', file)
      try {
        await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })
        alert('Image uploaded successfully')
      } catch (error) {
        console.error(error)
        alert('Image upload failed')
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">Image Uploader</div>
        <ImageUpload onFile={setFile} />
        <ValidateButton onValidate={validate} />
      </header>
    </div>
  )
}

export default App
