const express = require('express')
const multer = require('multer')

const PORT = process.env.PORT || 3001
const app = express()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  },
})

const upload = multer({storage})

app.post('/api/upload', upload.single('image'), (req, res) => {
  res.send('Image uploaded successfully')
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
