const model = require("./model");

module.exports = {
  login: (req, res) => {
    res.status(200).send({ msg: "Login Successful" });
  },
  register: (req, res) => {
    let newUser = new model({
      forename: req.body.forename,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
    });

    newUser
      .save()
      .then((result) => {
        res
          .status(200)
          .send({ msg: "Register Successful", user_id: result._id });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({ msg: "Register Unsuccessful" });
      });
  },
};
