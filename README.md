## Project info
This project is a mockup of a login page.

The form data is validated in the frontend with yup, and the backend gives back two possible responses:

-With "registered" credentials (there is no registration, just a "valid" user: a variable object declared with an email & password) => status 200, and an object with
a token, userId & expiresIn variable.

-With "unregistered" credentials => an alert is triggered & the response includes a success: false & an error message

Registered credentials:
-Email: test@mail.com
-Password: 1234567

## Technologies
React in the frontend, Node/Express in the backend

## To run locally with npm
### Install api dependencies and start the server with nodemon:
```
$ cd api && npm install
$ npm run dev
```

### Install web dependencies & start it:
```
$ cd wob-login && npm install
& npm start
```
