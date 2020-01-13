const express = require("express");
const bodyparser = require("body-parser");
const ProductRoutes = require("./routes/product");
const CountryRoutes = require("./routes/country");
const SuggestionRoutes = require('./routes/suggestion');
const sequelize = require("./server");
const app = express();
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);

app.use(ProductRoutes);
app.use(CountryRoutes);
app.use('/suggestion',SuggestionRoutes);

sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(2000, () => console.log("Server running on port 2000"));
  })
  .catch(err => {
    console.log(err);
  });
