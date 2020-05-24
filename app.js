const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");


const db = require('./models');
const Role = db.role;


const app = express();

let corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);



db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  //calling the function below here to add it to the db
  initial();
});

//Manually adding role to the db
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

app.get("/", (req, res) => {
  res.json({
    message: "welcome to authentication and authorization app",
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
