# react-image-uploader

## 1. Start server

cd server; yarn start

## 2. Start client

cd client; yarn; yarn start

## 3. Run test

cd client; yarn test
The second test should fail as no image has been uploaded yet.

## 4. Upload an image

Connect to http://localhost:3000/
Select an image from the interface then click on "Send" button

## 5. Run test

cd client; yarn test
This time all tests are successful as you can found the uploaded image in the upload folder at project's root directory
