const { v4 } = require("uuid");
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  const successLogin = {
    token: v4(),
    expires: 10000000,
    userId: v4(),
  };
  const errorLogin = {
    success: false,
    message: "You entered wrong credentials or this user is not registered",
  };
  const validEmail = {
    Username: "test@mail.com",
    Password: "1234567",
  };
  if (
    req.body.Username === validEmail.Username &&
    req.body.Password === validEmail.Password
  ) {
    res.status(200).json(successLogin);
  } else if (req.body.Username !== validEmail.Username) {
    res.json(errorLogin);
  }
});

app.listen(port, () => console.log(`Running on port ${port}`));
