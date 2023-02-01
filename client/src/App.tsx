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
        alert('Image upload failed')
      }
      // Empty file
      setFile(undefined)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">Image Uploader</div>
        <div className="input">
          <ImageUpload onFile={setFile} />
        </div>
        <div className="validation-button">
          <ValidateButton disabled={!file} onValidate={validate} />
        </div>
      </header>
    </div>
  )
}

export default App
