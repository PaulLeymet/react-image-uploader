import {Button} from '@mui/material'
import {ChangeEvent} from 'react'

const ImageUpload = ({onFile}: {onFile: (file: File) => void}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files?.length) {
      const file = event.target.files[0]
      onFile(file)
    } else {
      alert('Failed to select the file')
    }
  }

  return (
    <Button variant="contained" component="label">
      Select an image
      <input type="file" accept="image/*" hidden onChange={handleChange} />
    </Button>
  )
}

export default ImageUpload
